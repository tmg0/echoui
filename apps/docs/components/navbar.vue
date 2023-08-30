<script setup lang="ts">
import { Button, Link, Navbar as EchoUINavbar, NavbarBrand, NavbarContent, NavbarItem } from '@echoui/vue'
</script>

<template>
  <EchoUINavbar max-width="xl">
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

      <NavbarItem class="hidden lg:flex">
        <Link color="foreground" href="#" class="font-normal">
          Docs
        </Link>
      </NavbarItem>
      <NavbarItem is-active class="hidden lg:flex">
        <Link href="#" aria-current="page" class="font-normal">
          Components
        </Link>
      </NavbarItem>
      <NavbarItem class="hidden lg:flex">
        <Link color="foreground" href="#" class="font-normal">
          Blog
        </Link>
      </NavbarItem>
      <NavbarItem class="hidden lg:flex">
        <Link color="foreground" href="#" class="font-normal">
          Figma
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
    </NavbarContent>
  </EchoUINavbar>
</template>
