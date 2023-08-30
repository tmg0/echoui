<script setup lang="ts">
import { Link } from '@echoui/vue'

const route = useRoute()
const router = useRouter()

const paths = [
  {
    path: '/docs/components',
    children: [
      { path: '/docs/components/button' },
      { path: '/docs/components/navbar' },
      { path: '/docs/components/spinner' },
      { path: '/docs/components/switch' }
    ]
  }
]

const onNav = (path: string) => {
  router.push({ path })
}
</script>

<template>
  <div class="lg:fixed lg:top-20 mt-2 z-0 lg:h-[calc(100vh-121px)]">
    <ul class="flex flex-col gap-4 scrollbar-hide lg:overflow-y-scroll lg:max-h-[calc(100vh_-_64px)] pb-28">
      <ul v-for="section in paths" :key="section.path" class="flex flex-col gap-3 w-full tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2">
        <div class="flex items-center gap-3 cursor-pointer">
          <span class="w-px h-px block ml-0 mr-1" />
          <span class="flex items-center gap-3">
            <span class="capitalize text-base">{{ section.path.split('/').at(-1) }}</span>
          </span>
        </div>

        <div class="flex flex-col gap-3 items-start">
          <li v-for="child in section.children" :key="child.path" class="ml-4">
            <Link
              color="foreground"
              :class="{ 'text-default-300': child.path !== route.path }"
              class="capitalize ml-4  before:content-[''] before:bg-default-300 before:mr-4 before:w-1 before:h-1 before:rounded-full cursor-pointer"
              :on-click="() => onNav(child.path)"
            >
              {{ child.path.split('/').at(-1) }}
            </Link>
          </li>
        </div>
      </ul>
    </ul>
  </div>
</template>
