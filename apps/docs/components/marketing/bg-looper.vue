<template>
  <div
    :style="{ backgroundImage: 'url(\'/gradients/looper-pattern.svg\')'}"
    :class="[
      'absolute -top-20 lg:top-10 w-screen h-screen z-0 overflow-hidden',
      'data-[mounted=true]:opacity-100 transition-opacity',
      'bg-left bg-no-repeat',
      'after:content-[\'\'] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:z-[-1]',
      'after:bg-gradient-to-r after:from-transparent after:to-background dark:after:to-black after:z-[-1]'
    ]"
  />
</template>
