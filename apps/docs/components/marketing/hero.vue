<script setup lang="ts">
import { Button } from '@echoui/vue'
import { ArrowRightIcon } from '@echoui/shared-icons'
import { title, subtitle } from '../primitives'

const router = useRouter()
const onNav = () => { router.push('/docs/guide') }
</script>

<template>
  <section class="flex relative overflow-hidden lg:overflow-visible w-full flex-nowrap justify-between items-center h-[calc(100vh_-_64px)] 2xl:h-[calc(84vh_-_64px)]">
    <div class="flex relative z-20 flex-col gap-6 w-full lg:w-1/2 xl:mt-10">
      <div class="text-center leading-8 md:leading-10 md:text-left">
        <div class="inline-block">
          <h1 :class="title()">
            Make
          </h1>
          <h1 :class="title({ color: 'violet' })">
            beautiful
          </h1>
        </div>
        <h1 :class="title()">
          websites regardless of your design experience.
        </h1>
      </div>

      <h2 :class="subtitle({ fullWidth: true, class: 'text-center md:text-left' })">
        Beautiful, fast and modern Vue UI library.
      </h2>

      <div class="flex flex-col md:flex-row items-center gap-4">
        <Button
          class="w-full md:w-auto"
          color="primary"
          radius="full"
          size="lg"
          :on-click="() => onNav()"
        >
          Get Started
          <ArrowRightIcon :stroke-width="2" class="group-data-[hover=true]:translate-x-0.5 outline-none transition-transform" />
        </Button>
        <Button
          full-width
          is-external
          class="w-full md:w-auto"
          radius="full"
          size="lg"
          variant="bordered"
        >
          <IconsSocialGithub />
          Github
        </Button>
      </div>
    </div>
  </section>
</template>
