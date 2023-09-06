<script setup lang="ts">
import { Button, Card, CardBody, CardFooter, Image, Spinner, Switch } from '@echoui/vue'
import { useDark, useToggle } from '@vueuse/core'
import MoonFilledIcon from '../icons/moon.vue'
import SunFilledIcon from '../icons/sun.vue'

const isDark = useDark()
const toggleDark = useToggle(isDark)

const isSelected = computed({
  get () { return isDark.value },
  set (value) { toggleDark(value) }
})
</script>

<template>
  <div class="hidden lg:flex flex-col relative z-20 w-1/2">
    <Switch v-model:is-selected="isSelected" size="lg" class="absolute -top-[220px] -right-[40px] animate-[levitate_13s_ease_infinite_1s_reverse]">
      <template #startContent>
        <SunFilledIcon :size="16" />
      </template>

      <template #endContent>
        <MoonFilledIcon :size="16" />
      </template>
    </Switch>

    <Card
      is-footer-blurred
      class="absolute -top-[260px] right-[100px] h-[120px] animate-[levitate_12s_ease_infinite_1s] z-0 max-w-fit"
    >
      <Image
        alt="Professional camera"
        class="object-cover -translate-y-6"
        :height="120"
        src="/images/card-example-6.webp"
        :width="120"
      />
      <CardFooter class="before:bg-black/10 border-white/20 border-1 overflow-hidden justify-between py-2 absolute before:rounded-xl rounded-xl bottom-1 w-[calc(100%_-_8px)] shadow-lg ml-1 z-10">
        <div class="text-xs font-semibold text-white/80">
          Camera
        </div>
        <div class="text-xs font-semibold text-white/80">
          $525
        </div>
      </CardFooter>
    </Card>

    <MarketingFloatingTabs />

    <DemosUserTwitterCard class="absolute left-[80px] -top-[80px] animate-[levitate_16s_ease_infinite] border-none" />

    <Card
      class="absolute right-[110px] -top-[60px] animate-[levitate_18s_ease_infinite] z-10 max-w-fit border-none"
      shadow="lg"
    >
      <CardBody>
        <div class="bg-[#11181c] dark:bg-[#ecedee] w-[60px] h-[60px] rounded-lg flex items-center justify-center">
          <EchouiLogo :size="60" />
        </div>
      </CardBody>
    </Card>

    <Card
      class="absolute right-[10px] top-[30px] animate-[levitate_16s_ease_infinite] z-10 max-w-fit border-none"
      shadow="lg"
    >
      <CardBody>
        <Spinner color="secondary" size="lg" />
      </CardBody>
    </Card>

    <Card
      is-footer-blurred
      radius="lg"
      class="absolute right-[60px] top-[100px] animate-[levitate_12s_ease_infinite_1s] z-0 max-w-fit"
    >
      <Image
        alt="Woman listing to music"
        class="object-cover"
        :height="200"
        src="/images/hero-card.webp"
        :width="200"
      />
      <CardFooter class="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <p class="text-tiny text-white/80">
          Available soon.
        </p>
        <Button class="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm">
          Notify me
        </Button>
      </CardFooter>
    </Card>
  </div>
</template>
