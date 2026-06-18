<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { JsonRpcProvider, getAddress } from 'ethers'

// 状态
const address = ref<string | null>(null)
const balance = ref<string>('0.0')
const isConnected = computed(() => !!address.value)
const shortAddress = computed(() => {
  if (!address.value) return '未连接'
  return `${address.value.slice(0, 6)}...${address.value.slice(-4)}`
})
const chainName = ref('本地测试网')
const isConnecting = ref(false)

// 获取钱包对象
const getEth = () => (window as any).ethereum

// 检查是否安装了钱包
const hasWallet = () => typeof window !== 'undefined' && !!getEth()

// 连接钱包
async function connectWallet() {
  if (!hasWallet()) {
    alert('请先安装 MetaMask 或其他钱包插件')
    return
  }
  
  isConnecting.value = true
  
  try {
    const accounts = await getEth().request({ 
      method: 'eth_requestAccounts' 
    }) as string[]
    
    if (accounts.length > 0) {
      address.value = getAddress(accounts[0])
      await fetchBalance()
      await fetchChainName()
    }
  } catch (error: any) {
    console.error('连接失败:', error)
    if (error.code === 4001) {
      alert('你取消了钱包连接')
    } else {
      alert('连接失败，请重试')
    }
  } finally {
    isConnecting.value = false
  }
}

// 获取余额
async function fetchBalance() {
  if (!address.value) return
  
  try {
    const provider = new JsonRpcProvider('http://127.0.0.1:8545')
    const balanceWei = await provider.getBalance(address.value)
    balance.value = (Number(balanceWei) / 1e18).toFixed(6)
  } catch (error) {
    console.error('获取余额失败:', error)
    balance.value = '0.0'
  }
}

// 获取链名称
async function fetchChainName() {
  try {
    const chainIdHex = await getEth().request({ method: 'eth_chainId' }) as string
    const chainId = parseInt(chainIdHex, 16)
    
    const chainNames: Record<number, string> = {
      1: '以太坊主网',
      5: 'Goerli测试网',
      11155111: 'Sepolia测试网',
      31337: 'Hardhat本地测试网',
      1337: 'Ganache本地测试网'
    }
    
    chainName.value = chainNames[chainId] || `未知网络 (${chainId})`
  } catch (error) {
    console.error('获取链信息失败:', error)
  }
}

// 监听账户变化
function handleAccountsChanged(accounts: string[]) {
  if (accounts.length > 0) {
    address.value = getAddress(accounts[0])
    fetchBalance()
  } else {
    address.value = null
    balance.value = '0.0'
  }
}

// 监听链变化
function handleChainChanged() {
  fetchBalance()
  fetchChainName()
}

onMounted(() => {
  // 尝试静默连接已授权的钱包
  if (hasWallet()) {
    getEth().request({ method: 'eth_accounts' }).then((accounts: string[]) => {
      if (accounts.length > 0) {
        address.value = getAddress(accounts[0])
        fetchBalance()
        fetchChainName()
      }
    }).catch(() => {})
    
    // 添加事件监听
    getEth().on('accountsChanged', handleAccountsChanged)
    getEth().on('chainChanged', handleChainChanged)
  }
})

onUnmounted(() => {
  if (hasWallet()) {
    getEth().removeListener('accountsChanged', handleAccountsChanged)
    getEth().removeListener('chainChanged', handleChainChanged)
  }
})

// 计算USD价值（模拟）
const usdValue = computed(() => {
  const ethPrice = 3500 // 假设 ETH 价格
  return (Number(balance.value) * ethPrice).toFixed(2)
})

</script>

<template>
  <div class="wallet-container">
    <!-- 顶部栏 -->
    <div class="header">
      <div class="network-select">
        <span class="network-icon"></span>
        <span>{{ chainName }}</span>
        <svg class="dropdown-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M6 9l6 6 6-6"/>
        </svg>
      </div>
      
      <div class="account-info" v-if="isConnected">
        <div class="account-icon"></div>
        <div class="account-details">
          <div class="account-name">Account 1</div>
          <div class="account-address">{{ shortAddress }}</div>
        </div>
        <div class="account-actions">
          <svg class="dropdown-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M6 9l6 6 6-6"/>
          </svg>
        </div>
      </div>
      
      <button 
        v-else 
        class="connect-btn" 
        @click="connectWallet"
        :disabled="isConnecting"
      >
        <span v-if="isConnecting">连接中...</span>
        <span v-else>连接钱包</span>
      </button>
    </div>

    <!-- 余额卡片 -->
    <div class="balance-card">
      <div class="balance-eth">
        {{ balance }} ETH
      </div>
      <div class="balance-usd">
        ${{ usdValue }} USD
      </div>
    </div>

    <!-- 功能按钮 -->
    <div class="action-buttons">
      <button class="action-btn">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="10"/>
          <path d="M8 15s1.5-2 4-2 4 2 4 2"/>
          <path d="M9 9h6"/>
        </svg>
        <span>买入和卖出</span>
      </button>
      <button class="action-btn">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M21 12V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6"/>
          <path d="M15 18H9"/>
          <path d="M12 15V3"/>
        </svg>
        <span>发送</span>
      </button>
      <button class="action-btn">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M12 3v18"/>
          <path d="M3 12h18"/>
        </svg>
        <span>兑换</span>
      </button>
      <button class="action-btn">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M12 19V5"/>
          <path d="M5 12h14"/>
        </svg>
        <span>跨链桥</span>
      </button>
      <button class="action-btn">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="10"/>
          <path d="M12 8v8"/>
          <path d="M8 12h8"/>
        </svg>
        <span>Portfolio</span>
      </button>
    </div>

    <!-- 标签页 -->
    <div class="tabs">
      <button class="tab active">代币</button>
      <button class="tab">收藏品</button>
      <button class="tab">活动</button>
    </div>

    <!-- 内容区域 -->
    <div class="content">
      <div class="welcome-card">
        <div class="welcome-content">
          <h3>从 ETH 开始您的旅程</h3>
          <p>将一些 ETH 添加到您的钱包并开始使用 Web3</p>
          <button class="buy-btn">购买 ETH</button>
        </div>
        <div class="welcome-illustration"></div>
      </div>

      <div class="empty-state">
        <p>您没有任何交易</p>
      </div>
    </div>

    <!-- 底部 -->
    <div class="footer">
      <a href="#" class="support-link">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="10"/>
          <path d="M8 15s1.5-2 4-2 4 2 4 2"/>
          <path d="M9 9h6"/>
        </svg>
        MetaMask 支持
      </a>
    </div>

    <!-- 测试账户信息 -->
    <div class="info-panel">
      <h4>测试账户信息</h4>
      <div class="account-list">
        <div class="account-item">
          <div class="label">账户1 公钥:</div>
          <div class="value">0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266</div>
          <div class="label">账户1 私钥:</div>
          <div class="value">0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80</div>
        </div>
        <div class="account-item">
          <div class="label">账户2 公钥:</div>
          <div class="value">0x70997970c51812dc3a010c7d01b50e0d17dc79c8</div>
          <div class="label">账户2 私钥:</div>
          <div class="value">0x59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d</div>
        </div>
        <div class="account-item">
          <div class="label">账户3 公钥:</div>
          <div class="value">0x3c44cdddb6a900fa2b585dd299e03d12fa4293bc</div>
          <div class="label">账户3 私钥:</div>
          <div class="value">0x5de4111afa1a4b94908f83103eb1f1706367c2e68ca870fc3fb9a804cdab365a</div>
        </div>
      </div>
      <p class="tip">使用这些账户导入到 MetaMask，连接到 http://127.0.0.1:8545 即可看到余额</p>
    </div>
  </div>
</template>

<style scoped>
.wallet-container {
  min-height: 100vh;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
  padding: 20px;
  font-family: system-ui, -apple-system, sans-serif;
  max-width: 420px;
  margin: 0 auto;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
}

.network-select {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #fff;
  font-size: 14px;
  background: rgba(255, 255, 255, 0.1);
  padding: 8px 12px;
  border-radius: 20px;
  cursor: pointer;
}

.network-icon {
  width: 12px;
  height: 12px;
  background: #22c55e;
  border-radius: 50%;
}

.dropdown-arrow {
  width: 16px;
  height: 16px;
}

.account-info {
  display: flex;
  align-items: center;
  gap: 10px;
  color: #fff;
}

.account-icon {
  width: 36px;
  height: 36px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 50%;
}

.account-details {
  display: flex;
  flex-direction: column;
}

.account-name {
  font-weight: 600;
  font-size: 14px;
}

.account-address {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.7);
}

.account-actions {
  position: relative;
}

.connect-btn {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 20px;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s;
}

.connect-btn:hover:not(:disabled) {
  transform: translateY(-2px);
}

.connect-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.balance-card {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  padding: 30px;
  text-align: center;
  margin-bottom: 30px;
  backdrop-filter: blur(10px);
}

.balance-eth {
  font-size: 36px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 8px;
}

.balance-usd {
  font-size: 18px;
  color: rgba(255, 255, 255, 0.7);
}

.action-buttons {
  display: flex;
  justify-content: space-around;
  margin-bottom: 30px;
  flex-wrap: wrap;
  gap: 15px;
}

.action-btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  background: rgba(255, 255, 255, 0.05);
  border: none;
  color: #fff;
  padding: 15px 20px;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.2s;
  min-width: 70px;
}

.action-btn:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-2px);
}

.action-btn svg {
  width: 24px;
  height: 24px;
}

.action-btn span {
  font-size: 12px;
}

.tabs {
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
}

.tab {
  background: none;
  border: none;
  color: rgba(255, 255, 255, 0.7);
  font-size: 16px;
  font-weight: 500;
  padding-bottom: 8px;
  cursor: pointer;
  border-bottom: 2px solid transparent;
  transition: all 0.2s;
}

.tab.active {
  color: #fff;
  border-bottom-color: #667eea;
}

.content {
  background: rgba(255, 255, 255, 0.03);
  border-radius: 16px;
  padding: 20px;
  min-height: 300px;
}

.welcome-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%);
  border-radius: 12px;
  padding: 25px;
  margin-bottom: 30px;
}

.welcome-content {
  flex: 1;
}

.welcome-content h3 {
  color: #fff;
  font-size: 18px;
  margin: 0 0 10px 0;
}

.welcome-content p {
  color: rgba(255, 255, 255, 0.8);
  font-size: 14px;
  margin: 0 0 15px 0;
}

.buy-btn {
  background: #fff;
  color: #0ea5e9;
  border: none;
  padding: 10px 20px;
  border-radius: 20px;
  font-weight: 600;
  cursor: pointer;
}

.welcome-illustration {
  width: 100px;
  height: 100px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
}

.empty-state {
  text-align: center;
  padding: 40px 0;
}

.empty-state p {
  color: rgba(255, 255, 255, 0.5);
  font-size: 14px;
}

.footer {
  text-align: center;
  margin-top: 20px;
}

.support-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #0ea5e9;
  text-decoration: none;
  font-size: 14px;
}

.support-link svg {
  width: 16px;
  height: 16px;
}

.info-panel {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  padding: 15px;
  margin-top: 30px;
  color: #fff;
}

.info-panel h4 {
  margin: 0 0 15px 0;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.8);
}

.account-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.account-item {
  background: rgba(255, 255, 255, 0.05);
  padding: 10px;
  border-radius: 8px;
}

.account-item .label {
  font-size: 11px;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 4px;
}

.account-item .value {
  font-size: 12px;
  font-family: monospace;
  color: #fff;
  word-break: break-all;
  margin-bottom: 8px;
}

.account-item .value:last-child {
  margin-bottom: 0;
}

.info-panel .tip {
  font-size: 11px;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 15px;
  text-align: center;
}
</style>
