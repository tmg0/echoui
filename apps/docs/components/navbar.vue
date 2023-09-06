<script setup lang="ts">
import { Button, Link, Navbar as EchoUINavbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuToggle } from '@echoui/vue'

const menus = [
  { label: 'Docs', path: '/docs/guide' },
  { label: 'Components', path: '/docs/components' },
  { label: 'Blog', path: '/blog' },
  { label: 'Figma', path: '/figma' }
]

const route = useRoute()
const router = useRouter()
const isMenuOpen = ref(false)

watch(() => route.path, () => {
  isMenuOpen.value = false
})

const isActive = (path: string) => {
  return route.path.includes(path)
}

const onNavi = (path: string) => {
  router.push({ path })
}
</script>

<template>
  <EchoUINavbar v-model:is-menu-open="isMenuOpen" max-width="xl">
    <NavbarContent class="hidden sm:flex gap-4" justify="center">
      <NavbarItem>
        <NavbarBrand>
          <div class="flex items-center gap-1 cursor-pointer" @click="onNavi('/')">
            <EchouiLogo :size="36" :padding="3" />
            <div class="font-sans text-2xl font-extralight text-inherit ">
              EchoUI
            </div>
          </div>
        </NavbarBrand>
      </NavbarItem>

      <NavbarItem>
        <Button radius="full" class="text-xs h-6 w-[74px] py-1 min-w-fit sm:flex gap-0.5 bg-default-400/20 dark:bg-default-500/20">
          v0.0.1
        </Button>
      </NavbarItem>

      <NavbarItem v-for="(item, index) in menus" :key="item.path" :is-active="index === 1" class="hidden lg:flex">
        <Link :color="isActive(item.path) ? undefined : 'foreground'" class="font-normal" @click="onNavi(item.path)">
          {{ item.label }}
        </Link>
      </NavbarItem>
    </NavbarContent>
    <NavbarContent justify="end">
      <NavbarItem>
        <IconsSocialGithub />
      </NavbarItem>
      <NavbarItem>
        <ThemeSwitch />
      </NavbarItem>
      <NavbarItem class="hidden lg:flex">
        <Button variant="flat">
          <IconsSearch :size="18" />
          <span class="text-default-500">Quick Search...</span>
        </Button>
      </NavbarItem>
      <NavbarItem>
        <Button variant="flat">
          <IconsHeart filled class="text-danger" />
          <span class="text-default-500">Sponsor</span>
        </Button>
      </NavbarItem>

      <NavbarMenuToggle class="hidden sm:flex lg:hidden ml-4" />
    </NavbarContent>

    <NavbarMenu>
      <DocsSidebar />
    </NavbarMenu>
  </EchoUINavbar>
</template>
