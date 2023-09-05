<script setup lang="ts">
import { Avatar, Button, Card, CardHeader, CardBody, CardFooter } from '@echoui/vue'
const isFollowed = ref(false)
const toggleFollowedState = () => { isFollowed.value = !isFollowed.value }
</script>

<template>
  <Card class="max-w-[300px]">
    <CardHeader class="justify-between">
      <div class="flex gap-5">
        <Avatar
          is-bordered
          alt="Zoey Lang"
          radius="full"
          size="md"
          src="/avatars/avatar-1.webp"
        />
        <div class="flex flex-col items-start justify-center">
          <h4 class="text-sm font-semibold leading-none text-default-600">
            Zoey Lang
          </h4>
          <h5 class="text-sm tracking-tight text-default-400">
            @zoeylang
          </h5>
        </div>
      </div>
      <Button
        :class="isFollowed ? 'bg-transparent text-foreground border-default-200' : ''"
        color="primary"
        radius="full"
        size="sm"
        :variant="isFollowed ? 'bordered' : 'solid'"
        :on-click="toggleFollowedState"
      >
        {{ isFollowed ? "Unfollow" : "Follow" }}
      </Button>
    </CardHeader>
    <CardBody class="px-3 py-0">
      <div class="text-sm pl-px text-default-400">
        Full-stack developer, @getnextui lover she/her&nbsp;
        <span aria-label="confetti" role="img">
          🎉
        </span>
      </div>
    </CardBody>
    <CardFooter class="gap-3">
      <div class="flex gap-1">
        <div class="font-semibold text-default-400 text-sm">
          4
        </div>
        <div class=" text-default-400 text-sm">
          Following
        </div>
      </div>
      <div class="flex gap-1">
        <div class="font-semibold text-default-400 text-sm">
          97.1K
        </div>
        <div class="text-default-400 text-sm">
          Followers
        </div>
      </div>
    </CardFooter>
  </Card>
</template>
