<script setup lang="ts">
import { Card, CardFooter, Button, Image, Divider } from '@echoui/vue'
</script>

<template>
  <div>
    <h1>Card</h1>
    <p>
      Card is a container for text, photos, and actions in the context of a single subject.
    </p>

    <Divider class="my-8" />

    <div class="flex flex-col gap-4">
      <div class="flex">
        <Card
          is-footer-blurred
          radius="lg"
          class="border-none"
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
    </div>
  </div>
</template>
