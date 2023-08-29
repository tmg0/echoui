<script setup lang="ts">
import { Button, Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@echoui/vue'
</script>

<template>
  <div>
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
            Features
          </NavbarItem>
          <NavbarItem is-active>
            Customers
          </NavbarItem>
          <NavbarItem>
            Integrations
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem class="hidden lg:flex">
            Login
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
