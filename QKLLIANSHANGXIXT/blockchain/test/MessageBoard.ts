import assert from "node:assert/strict";
import { describe, it } from "node:test";

import { network } from "hardhat";

describe("MessageBoard", async () => {
  const { viem } = await network.create();

  it("Should start with zero messages", async () => {
    const messageBoard = await viem.deployContract("MessageBoard");
    const count = await messageBoard.read.getMessageCount();
    assert.equal(count, 0n);
  });

  it("Should store a new message", async () => {
    const messageBoard = await viem.deployContract("MessageBoard");
    const [author] = await viem.getWalletClients();
    const content = "Hello Blockchain";

    await messageBoard.write.postMessage([content]);

    const count = await messageBoard.read.getMessageCount();
    assert.equal(count, 1n);
    
    const [msgAuthor, msgContent, msgCreatedAt] = await messageBoard.read.getMessage([0n]);
    assert.equal(msgAuthor.toLowerCase(), author.account.address.toLowerCase());
    assert.equal(msgContent, content);
    assert.ok(msgCreatedAt > 0n);
  });

  it("Should reject an empty message", async () => {
    const messageBoard = await viem.deployContract("MessageBoard");

    try {
      await messageBoard.write.postMessage([""]);
      assert.fail("Should have reverted");
    } catch (error: any) {
      assert.ok(error.message.includes("Message cannot be empty"));
    }
  });

  it("Should reject a message longer than 100 characters", async () => {
    const messageBoard = await viem.deployContract("MessageBoard");
    const content = "a".repeat(101);

    try {
      await messageBoard.write.postMessage([content]);
      assert.fail("Should have reverted");
    } catch (error: any) {
      assert.ok(error.message.includes("Message too long"));
    }
  });

  it("Should reject querying an out-of-range index", async () => {
    const messageBoard = await viem.deployContract("MessageBoard");

    try {
      await messageBoard.read.getMessage([0n]);
      assert.fail("Should have reverted");
    } catch (error: any) {
      assert.ok(error.message.includes("Message index out of range"));
    }
  });
});
