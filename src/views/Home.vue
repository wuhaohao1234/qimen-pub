<template>
  <div class="space-y-6">
    <h1 class="text-3xl font-bold text-gray-900">奇门遁甲简介</h1>
    
    <div class="bg-white shadow overflow-hidden sm:rounded-lg">
      <div class="px-4 py-5 sm:px-6">
        <h2 class="text-xl font-semibold text-gray-900">什么是奇门遁甲</h2>
      </div>
      <div class="border-t border-gray-200 px-4 py-5 sm:px-6">
        <p class="text-gray-600">
          奇门遁甲是中国古代术数的一种，是一个完整的预测学体系，包含了天文、地理、阴阳五行等多个领域的知识。
        </p>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <a-card v-for="item in mainComponents" :key="item.title" :title="item.title">
        <p>{{ item.description }}</p>
        <template #actions>
          <router-link :to="item.path">
            <a-button type="primary">了解更多</a-button>
          </router-link>
        </template>
      </a-card>
    </div>
  </div>
</template>

<script setup>
const mainComponents = [
  {
    title: '阴阳学说',
    description: '阴阳学说是中国古代哲学的基本理论之一，是理解奇门遁甲的基础。',
    path: '/yinyang'
  },
  {
    title: '十天干',
    description: '天干是古代纪年纪日的符号，包括甲、乙、丙、丁、戊、己、庚、辛、壬、癸。',
    path: '/tiangan'
  },
  {
    title: '十二地支',
    description: '地支是与天干配合使用的另一套纪年纪日符号，包括子、丑、寅、卯、辰、巳、午、未、申、酉、戌、亥。',
    path: '/dizhi'
  },
  {
    title: '九宫八卦',
    description: '九宫八卦是奇门遁甲的重要组成部分，是预测的基本框架。',
    path: '/jiugong-bagua'
  },
  {
    title: '九星',
    description: '九星包括天蓬、天任、天冲、天辅、天英、天芮、天柱、天心、天禽。',
    path: '/jiuxing'
  },
  {
    title: '八门',
    description: '八门包括休门、生门、伤门、杜门、景门、死门、惊门、开门。',
    path: '/bamen'
  },
  {
    title: '八神',
    description: '八神包括值符、腾蛇、太阴、六合、白虎、玄武、朱雀、九地。',
    path: '/bashen'
  }
]
</script> 