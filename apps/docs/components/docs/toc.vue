<script setup lang="ts">
import { Link } from '@echoui/vue'

defineProps<{
  headings: any[]
}>()
</script>

<template>
  <div>
    <div class="text-sm mb-4">
      On this page
    </div>

    <ul class="flex flex-col gap-1 scrollbar-hide lg:overflow-y-scroll lg:max-h-[calc(100vh_-_64px)]">
      <ul v-for="h1 in headings" :key="h1.id" class="flex flex-col gap-1 w-full tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2">
        <div class="flex items-center gap-1 cursor-pointer">
          <span class="flex items-center gap-1">
            <span class="capitalize text-default-300 text-sm">{{ h1.text }}</span>
          </span>
        </div>

        <div class="flex flex-col gap-1 items-start">
          <li v-for="h2 in h1.children" :key="h2.id" class="ml-2 h-6 flex items-center">
            <Link
              color="foreground"
              class="capitalize ml-2 text-default-300 cursor-pointer text-sm"
            >
              {{ h2.text }}
            </Link>
          </li>
        </div>
      </ul>
    </ul>
  </div>
</template>
