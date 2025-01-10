<template>
  <div class="min-h-screen bg-gray-100">
    <nav class="bg-white shadow-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16 items-center">
          <h1 class="text-xl font-semibold">奇门遁甲</h1>
          <a-menu mode="horizontal" :selected-keys="[currentRoute]">
            <a-menu-item key="home">
              <router-link to="/">首页</router-link>
            </a-menu-item>
            <a-menu-item key="yinyang">
              <router-link to="/yinyang">阴阳学说</router-link>
            </a-menu-item>
            <a-menu-item key="tiangan">
              <router-link to="/tiangan">十天干</router-link>
            </a-menu-item>
            <a-menu-item key="dizhi">
              <router-link to="/dizhi">十二地支</router-link>
            </a-menu-item>
            <a-menu-item key="jiugong-bagua">
              <router-link to="/jiugong-bagua">九宫八卦</router-link>
            </a-menu-item>
            <a-menu-item key="jiuxing">
              <router-link to="/jiuxing">九星</router-link>
            </a-menu-item>
            <a-menu-item key="bamen">
              <router-link to="/bamen">八门</router-link>
            </a-menu-item>
            <a-menu-item key="bashen">
              <router-link to="/bashen">八神</router-link>
            </a-menu-item>
          </a-menu>
        </div>
      </div>
    </nav>
    <main class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <router-view></router-view>
    </main>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const currentRoute = computed(() => route.name?.toLowerCase() || 'home')
</script>
