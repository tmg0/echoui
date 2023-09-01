<script setup lang="ts">
import { Button, Link, Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@echoui/vue'
</script>

<template>
  <div>
    <h1>Navbar</h1>

    <p>
      A responsive navigation header positioned on top side of your page that includes support for branding, links, navigation, collapse menu and more.
    </p>

    <div>
      <Navbar>
        <NavbarBrand>
          <IconsAcmeLogo />
          <p class="font-bold text-inherit">
            ACME
          </p>
        </NavbarBrand>
        <NavbarContent class="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link color="foreground" href="#">
              Features
            </Link>
          </NavbarItem>
          <NavbarItem is-active>
            <Link href="#" aria-current="page">
              Customers
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              Integrations
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem class="hidden lg:flex">
            <Link href="#">
              Login
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Button color="primary" variant="flat">
              Sign Up
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </div>
  </div>
</template>
