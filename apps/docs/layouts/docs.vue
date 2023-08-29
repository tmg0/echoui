<template>
  <div class="grid grid-cols-12">
    <div class="hidden relative z-10 lg:block lg:col-span-2 mt-8 pr-4" />
    <div class="col-span-12 lg:col-span-10 xl:col-span-8 lg:px-16 mt-10">
      <slot />
    </div>
    <div class="hidden z-10 xl:flex xl:col-span-2 mt-8 pl-4" />
  </div>
</template>
