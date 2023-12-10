<script lang="ts" setup>
import { drawerMenu } from '@/config/drawerMenu'
import DrawerNavLink from './DrawerNavLink.vue'
import { Info } from '@/config/iconPaths'
</script>

<template>
  <aside class="hidden sm:block lg:min-w-[270px]">
    <div class="w-full h-full flex-col">
      <ul
        class="flex flex-col justify-between overflow-hidden h-full pb-[10px]"
      >
        <div class="top mt-10">
          <img
            class="mx-auto"
            src="https://controller.ligowave.com/static/img/main-logo.svg"
          />
          <ul class="flex flex-col gap-y-3 mt-[3px] text-[#131313]/60 pt-10">
            <li
              v-for="item in drawerMenu"
              :key="item.id"
              class="text-base font-normal"
            >
              <DrawerNavLink
                :title="item.name"
                :href="item.href"
                :icon="item.icon"
              />
            </li>
          </ul>
        </div>
        <div>
          <div class="text-[#131313]/60 text-base font-normal">
            <DrawerNavLink title="About Infinity" href="/about" :icon="Info" />
          </div>
        </div>
      </ul>
    </div>
  </aside>
</template>
