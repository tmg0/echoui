<script setup lang="ts">
import { Button, Link, Navbar as EchoUINavbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from '@echoui/vue'

const menuItems = ['Docs', 'Components', 'Blog', 'Figma']

const isMenuOpen = ref(false)
</script>

<template>
  <EchoUINavbar v-model:is-menu-open="isMenuOpen" max-width="xl">
    <NavbarContent class="hidden sm:flex gap-4" justify="center">
      <NavbarItem>
        <NavbarBrand>
          <IconsAcmeLogo />
          <p class="font-bold text-inherit">
            EchoUI
          </p>
        </NavbarBrand>
      </NavbarItem>

      <NavbarItem>
        <Button radius="full" class="text-xs h-6 w-[74px] py-1 min-w-fit sm:flex gap-0.5 bg-default-400/20 dark:bg-default-500/20">
          v0.0.1
        </Button>
      </NavbarItem>

      <NavbarItem v-for="(item, index) in menuItems" :key="item" :is-active="index === 1" class="hidden lg:flex">
        <Link :color="index !== 1 ? 'foreground' : undefined" href="#" class="font-normal">
          {{ item }}
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

      <NavbarMenuToggle class="ml-4" />
    </NavbarContent>

    <NavbarMenu>
      <NavbarMenuItem v-for="(item, index) in menuItems" :key="`${item}-${index}`">
        <Link :color="index === 1 ? 'primary' : undefined" href="#" size="lg" class="w-full font-normal">
          {{ item }}
        </Link>
      </NavbarMenuItem>
    </NavbarMenu>
  </EchoUINavbar>
</template>
