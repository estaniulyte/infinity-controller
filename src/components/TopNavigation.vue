<script setup lang="ts">
import { Button } from '@/components/ui/button'
import SvgIcon from './SvgIcon.vue'
import { Notifications } from '@/config/iconPaths'
</script>

<template>
  <div class="flex justify-between mt-2 mb-4 md:mt-3 md:mb-7 pb-4 border-b">
    <div></div>
    <div class="flex space-x-4">
      <Button variant="outline" size="icon" class="bg-white">
        <SvgIcon :path="Notifications" class="text-[#131313]/60" />
        <!-- <SvgIcon :path="notification" /> -->
      </Button>
      <Button variant="outline" size="icon" class="bg-white">
        <!-- <figure>
          <img
            class="rounded-sm"
            width="50"
            src="https://avatars.githubusercontent.com/u/43463977?v=4"
            alt="avatar image"
          />
        </figure> -->
        AR
      </Button>
    </div>
  </div>
</template>
