<script setup lang="ts">
import { Button } from '@/components/ui/button'
import TopNavigation from '@/components/TopNavigation.vue'
import SideDrawer from '@/components/SideDrawer.vue'
</script>

<template>
  <div class="">
    <div class="flex flex-row h-screen min-w-screen">
      <SideDrawer class="bg-white h-full" />
      <main
        role="main"
        class="pt-1 px-2 bg-background flex-grow overflow-y-auto h-screen"
      >
        <div class="mx-1 mb-2 md:mx-3 md:mb-4 lg:mx-[40px] lg:mb-[33px]">
          <TopNavigation />
          <router-view></router-view>
        </div>
      </main>
    </div>
  </div>
  <!-- <Button>hey</Button>
  <img src="https://controller.ligowave.com/static/img/main-logo.svg" /> -->
</template>
