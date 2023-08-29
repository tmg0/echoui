<script setup lang="ts">
import { Navbar, NavbarBrand } from '@echoui/vue'
</script>

<template>
  <div>
    <div>
      <Navbar>
        <NavbarBrand>
          <IconsAcmeLogo />
          <p className="font-bold text-inherit">
            ACME
          </p>
        </NavbarBrand>
      </Navbar>
    </div>
  </div>
</template>
