<script setup lang="ts">
import { Button, ButtonGroup } from '@echoui/vue'
</script>

<template>
  <div>
    <h1 class="text-4xl font-bold mb-8">
      Button
    </h1>

    <p class="my-4">
      Buttons allow users to perform actions and choose with a single tap.
    </p>

    <div class="flex gap-2 mt-6">
      <Button size="sm">
        <IconsSocialGithub />
        Source
      </Button>
    </div>

    <hr class="my-8 border-default-200">

    <div class="flex flex-col gap-4">
      <div class="flex gap-4 ">
        <Button color="primary">
          Button
        </Button>
      </div>

      <div class="flex gap-4 ">
        <Button color="primary" is-disabled>
          Disabled
        </Button>
      </div>

      <div class="flex gap-4  items-center">
        <Button size="sm">
          Small
        </Button>
        <Button size="md">
          Medium
        </Button>
        <Button size="lg">
          Large
        </Button>
      </div>

      <div class="flex gap-4 ">
        <Button radius="full">
          Full
        </Button>
        <Button radius="lg">
          Large
        </Button>
        <Button radius="md">
          Medium
        </Button>
        <Button radius="sm">
          Small
        </Button>
        <Button radius="none">
          None
        </Button>
      </div>

      <div class="flex gap-4 ">
        <Button>
          Default
        </Button>
        <Button color="primary">
          Primary
        </Button>
        <Button color="secondary">
          Secondary
        </Button>
        <Button color="success">
          Success
        </Button>
        <Button color="warning">
          Warning
        </Button>
        <Button color="danger">
          Danger
        </Button>
      </div>

      <div class="flex gap-4 ">
        <Button color="primary" variant="solid">
          Solid
        </Button>
        <Button color="primary" variant="faded">
          Faded
        </Button>
        <Button color="primary" variant="bordered">
          Bordered
        </Button>
        <Button color="primary" variant="light">
          Light
        </Button>
        <Button color="primary" variant="flat">
          Flat
        </Button>
        <Button color="primary" variant="ghost">
          Ghost
        </Button>
        <Button color="primary" variant="shadow">
          Shadow
        </Button>
      </div>

      <div class="flex gap-4 ">
        <Button color="primary" is-disabled is-loading>
          Loading
        </Button>
      </div>

      <div class="flex gap-4 ">
        <Button is-icon-only color="danger" aria-label="Like">
          <IconsHeart />
        </Button>
      </div>

      <div class="flex gap-4 ">
        <Button radius="full" class="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg">
          Button
        </Button>
      </div>

      <div class="flex gap-4 ">
        <ButtonGroup>
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
      </div>

      <div class="flex gap-4 ">
        <ButtonGroup is-disabled>
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
      </div>
    </div>
  </div>
</template>
