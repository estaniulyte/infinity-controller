<script setup lang="ts">
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import SvgIcon from './SvgIcon.vue'
import { Devices, Speed, Phone } from '@/config/iconPaths'
</script>

<template>
  <div class="flex flex-col space-y-4">
    <div><h2 class="text-3xl font-semibold tracking-tight">Dashboard</h2></div>
    <div class="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <!-- <div><h2 class="text-3xl font-semibold tracking-tight">Dashboard</h2></div>
    <div clas="flex flex-row"> -->
      <Card>
        <CardHeader
          class="flex flex-row items-center justify-between space-y-0 pb-4"
        >
          <CardTitle class="font-medium"> Devices </CardTitle>
          <SvgIcon :path="Devices" class="text-[#131313]/20" />
        </CardHeader>
        <CardContent>
          <div class="grid gap-2 grid-cols-3 text-center">
            <div class="text-emerald-500 flex flex-col border-r">
              <div class="text-3xl hover:cursor-pointer">7</div>
              <div class="hover:underline hover:cursor-pointer">active</div>
            </div>
            <div class="text-orange-500 flex flex-col border-r">
              <div class="text-3xl hover:cursor-pointer">3</div>
              <div class="hover:underline hover:cursor-pointer">offline</div>
            </div>
            <div class="flex flex-col">
              <div class="text-3xl hover:cursor-pointer">10</div>
              <div class="hover:underline hover:cursor-pointer">total</div>
            </div>
          </div>
          <!-- <div class="text-2xl font-bold">$45,231.89</div>
        <p class="text-xs text-muted-foreground">+20.1% from last month</p> -->
        </CardContent>
      </Card>
      <Card>
        <CardHeader
          class="flex flex-row items-center justify-between space-y-0 pb-4"
        >
          <CardTitle class="font-medium"> Clients </CardTitle>
          <SvgIcon :path="Phone" class="text-[#131313]/20" />

          <!-- <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            class="h-4 w-4 text-muted-foreground"
          >
            <path
              d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"
            />
          </svg> -->
        </CardHeader>
        <CardContent class="flex flex-col space-y-4">
          <div class="text-2xl font-bold text-emerald-500">5 active</div>
          <p class="text-xs text-muted-foreground">+5 Last hour</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader
          class="flex flex-row items-center justify-between space-y-0 pb-4"
        >
          <CardTitle class="font-medium"> Throughput </CardTitle>
          <SvgIcon :path="Speed" class="text-[#131313]/20" />
          <!-- <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            class="h-4 w-4 text-muted-foreground"
          >
            <path
              d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"
            />
          </svg> -->
        </CardHeader>
        <CardContent class="flex flex-col space-y-4">
          <div class="text-2xl font-bold text-blue-400">300 bps</div>
          <p class="text-xs text-muted-foreground">+20.1% Last hour trend</p>
        </CardContent>
      </Card>
      <!-- </div> -->
    </div>
  </div>
</template>
