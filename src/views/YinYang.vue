<template>
  <div class="space-y-6">
    <h1 class="text-3xl font-bold text-gray-900">阴阳学说</h1>
    
    <div class="bg-white shadow overflow-hidden sm:rounded-lg">
      <div class="px-4 py-5 sm:px-6">
        <h2 class="text-xl font-semibold text-gray-900">阴阳五行基本概念</h2>
      </div>
      <div class="border-t border-gray-200 px-4 py-5 sm:px-6">
        <p class="text-gray-600">
          阴阳五行是中国古代哲学的基本理论，阴阳是对立统一的两面，五行是万物运行的基本规律。五行（金木水火土）之间相生相克，构成了一个完整的循环系统。
        </p>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="bg-white p-6 rounded-lg shadow">
        <h3 class="text-lg font-semibold mb-4">阴阳特性</h3>
        <ul class="space-y-2">
          <li v-for="prop in properties" :key="prop.name" class="flex items-start">
            <span class="font-medium w-24">{{ prop.name }}：</span>
            <span class="text-gray-600">{{ prop.description }}</span>
          </li>
        </ul>
      </div>

      <div class="bg-white p-6 rounded-lg shadow">
        <h3 class="text-lg font-semibold mb-4">阴阳太极图</h3>
        <div class="aspect-square relative flex items-center justify-center">
          <div class="taiji">
            <div class="taiji-dot taiji-dot-white"></div>
            <div class="taiji-dot taiji-dot-black"></div>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-white p-6 rounded-lg shadow">
      <h3 class="text-lg font-semibold mb-4">五行生克关系</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h4 class="font-medium mb-2">相生关系</h4>
          <ul class="space-y-1">
            <li v-for="(relation, index) in wuXingSheng" :key="index" 
                class="flex items-center space-x-2">
              <span :class="relation.fromColor">{{ relation.from }}</span>
              <span class="text-gray-500">生</span>
              <span :class="relation.toColor">{{ relation.to }}</span>
            </li>
          </ul>
        </div>
        <div>
          <h4 class="font-medium mb-2">相克关系</h4>
          <ul class="space-y-1">
            <li v-for="(relation, index) in wuXingKe" :key="index"
                class="flex items-center space-x-2">
              <span :class="relation.fromColor">{{ relation.from }}</span>
              <span class="text-gray-500">克</span>
              <span :class="relation.toColor">{{ relation.to }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="bg-white p-6 rounded-lg shadow">
      <h3 class="text-lg font-semibold mb-4">五行状态</h3>
      <div class="space-y-4">
        <div v-for="(state, index) in wuXingStates" :key="index">
          <h4 class="font-medium mb-2">{{ state.name }}</h4>
          <p class="text-gray-600">{{ state.description }}</p>
        </div>
      </div>
    </div>

    <div class="bg-white p-6 rounded-lg shadow">
      <h3 class="text-lg font-semibold mb-4">四季五行状态</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <a-card v-for="(season, index) in seasons" :key="index" :title="season.name">
          <div class="space-y-2">
            <p v-for="(element, idx) in season.elements" :key="idx"
               :class="element.color">
              {{ element.name }}：{{ element.state }}
            </p>
          </div>
        </a-card>
      </div>
    </div>

    <WuXingDetail />
  </div>
</template>

<script setup>
import WuXingDetail from '../components/WuXingDetail.vue'

const properties = [
  {
    name: '对立性',
    description: '阴阳是相互对立的两个方面'
  },
  {
    name: '统一性',
    description: '阴中有阳，阳中有阴，相互依存'
  },
  {
    name: '转化性',
    description: '阴阳可以相互转化'
  },
  {
    name: '消长性',
    description: '阴阳此消彼长，循环往复'
  }
]

const wuXingSheng = [
  { from: '木', to: '火', fromColor: 'text-green-600', toColor: 'text-red-600' },
  { from: '火', to: '土', fromColor: 'text-red-600', toColor: 'text-yellow-600' },
  { from: '土', to: '金', fromColor: 'text-yellow-600', toColor: 'text-gray-600' },
  { from: '金', to: '水', fromColor: 'text-gray-600', toColor: 'text-blue-600' },
  { from: '水', to: '木', fromColor: 'text-blue-600', toColor: 'text-green-600' }
]

const wuXingKe = [
  { from: '木', to: '土', fromColor: 'text-green-600', toColor: 'text-yellow-600' },
  { from: '土', to: '水', fromColor: 'text-yellow-600', toColor: 'text-blue-600' },
  { from: '水', to: '火', fromColor: 'text-blue-600', toColor: 'text-red-600' },
  { from: '火', to: '金', fromColor: 'text-red-600', toColor: 'text-gray-600' },
  { from: '金', to: '木', fromColor: 'text-gray-600', toColor: 'text-green-600' }
]

const wuXingStates = [
  {
    name: '旺',
    description: '同我者为旺，处于最强盛状态'
  },
  {
    name: '相',
    description: '我生者为相，次于旺状态，具有生发之力'
  },
  {
    name: '休',
    description: '生我者为休，处于休养生息状态'
  },
  {
    name: '囚',
    description: '克我者为囚，受到压制的状态'
  },
  {
    name: '死',
    description: '我克者为死，处于最衰弱状态'
  }
]

const seasons = [
  {
    name: '春季',
    elements: [
      { name: '木', state: '旺', color: 'text-green-600' },
      { name: '火', state: '相', color: 'text-red-600' },
      { name: '水', state: '休', color: 'text-blue-600' },
      { name: '金', state: '囚', color: 'text-gray-600' },
      { name: '土', state: '死', color: 'text-yellow-600' }
    ]
  },
  {
    name: '夏季',
    elements: [
      { name: '火', state: '旺', color: 'text-red-600' },
      { name: '土', state: '相', color: 'text-yellow-600' },
      { name: '木', state: '休', color: 'text-green-600' },
      { name: '水', state: '囚', color: 'text-blue-600' },
      { name: '金', state: '死', color: 'text-gray-600' }
    ]
  },
  {
    name: '秋季',
    elements: [
      { name: '金', state: '旺', color: 'text-gray-600' },
      { name: '水', state: '相', color: 'text-blue-600' },
      { name: '土', state: '休', color: 'text-yellow-600' },
      { name: '火', state: '囚', color: 'text-red-600' },
      { name: '木', state: '死', color: 'text-green-600' }
    ]
  },
  {
    name: '冬季',
    elements: [
      { name: '水', state: '旺', color: 'text-blue-600' },
      { name: '木', state: '相', color: 'text-green-600' },
      { name: '金', state: '休', color: 'text-gray-600' },
      { name: '土', state: '囚', color: 'text-yellow-600' },
      { name: '火', state: '死', color: 'text-red-600' }
    ]
  },
  {
    name: '四季月',
    elements: [
      { name: '土', state: '旺', color: 'text-yellow-600' },
      { name: '金', state: '相', color: 'text-gray-600' },
      { name: '火', state: '休', color: 'text-red-600' },
      { name: '木', state: '囚', color: 'text-green-600' },
      { name: '水', state: '死', color: 'text-blue-600' }
    ]
  }
]
</script>

<style scoped>
.taiji {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: linear-gradient(90deg, #000 50%, #fff 50%);
  position: relative;
  animation: rotate 10s linear infinite;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.taiji::before,
.taiji::after {
  content: '';
  position: absolute;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  left: 50%;
  transform: translateX(-50%);
}

.taiji::before {
  top: 0;
  background: #000;
}

.taiji::after {
  bottom: 0;
  background: #fff;
}

.taiji-dot {
  position: absolute;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
}

.taiji-dot-white {
  background: #fff;
  top: 30px;
}

.taiji-dot-black {
  background: #000;
  bottom: 30px;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

/* 响应式尺寸 */
@media (max-width: 640px) {
  .taiji {
    width: 150px;
    height: 150px;
  }

  .taiji::before,
  .taiji::after {
    width: 75px;
    height: 75px;
  }

  .taiji-dot {
    width: 30px;
    height: 30px;
  }

  .taiji-dot-white {
    top: 22.5px;
  }

  .taiji-dot-black {
    bottom: 22.5px;
  }
}
</style> 