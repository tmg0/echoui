<script setup lang="ts">
import { Tabs, Tab } from '@echoui/vue'

const sizes = ['sm', 'md', 'lg']
const colors = ['default', 'primary', 'secondary', 'success', 'warning', 'danger']
const variants = ['solid', 'underlined', 'bordered', 'light']

const tabs = [
  {
    id: 'photos',
    label: 'Photos',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    id: 'music',
    label: 'Music',
    content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
  },
  {
    id: 'videos',
    label: 'Videos',
    content: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  }
]
</script>

<template>
  <NuxtLayout name="mdx">
    <template #title>
      Tabs
    </template>
    <template #description>
      Tabs organize content into multiple sections and allow users to navigate between them.
    </template>

    <div class="flex flex-col gap-4">
      <div>
        <Tabs default-selected-key="photos">
          <Tab v-for="item in tabs" :key="item.id" :title="item.label">
            <div class="p-5 bg-content1 rounded-[14px]">
              {{ item.content }}
            </div>
          </Tab>
        </Tabs>
      </div>

      <div>
        <Tabs default-selected-key="photos" is-disabled>
          <Tab v-for="item in tabs" :key="item.id" :title="item.label" />
        </Tabs>
      </div>

      <div>
        <Tabs default-selected-key="photos">
          <Tab v-for="(item, index) in tabs" :key="item.id" :title="item.label" :is-disabled="index === 1" />
        </Tabs>
      </div>

      <div class="flex flex-wrap gap-4">
        <Tabs v-for="size in sizes" :key="size" :size="size" default-selected-key="photos">
          <Tab v-for="(item, index) in tabs" :key="item.id" :title="item.label" :is-disabled="index === 1" />
        </Tabs>
      </div>

      <div class="flex flex-wrap gap-4">
        <Tabs v-for="color in colors" :key="color" :size="color" default-selected-key="photos">
          <Tab v-for="(item, index) in tabs" :key="item.id" :title="item.label" :is-disabled="index === 1" />
        </Tabs>
      </div>

      <div class="flex flex-wrap gap-4">
        <Tabs v-for="variant in variants" :key="variant" :variant="variant" default-selected-key="photos">
          <Tab v-for="(item, index) in tabs" :key="item.id" :title="item.label" :is-disabled="index === 1" />
        </Tabs>
      </div>
    </div>
  </NuxtLayout>
</template>
