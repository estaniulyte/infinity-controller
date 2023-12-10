<script setup lang="ts">
import { Button } from '@/components/ui/button'
</script>

<template>
  <div class="flex justify-between mt-2 mb-4 md:mt-3 md:mb-[44px]">
    search
    <div class="flex space-x-[20px]">
      <Button variant="outline" size="icon">
        not
        <!-- <SvgIcon :path="notification" /> -->
      </Button>
      <Button variant="outline" size="icon">
        <figure>
          <img
            class="rounded-sm"
            width="50"
            src="https://avatars.githubusercontent.com/u/43463977?v=4"
            alt="avatar image"
          />
        </figure>
      </Button>
    </div>
  </div>
</template>
