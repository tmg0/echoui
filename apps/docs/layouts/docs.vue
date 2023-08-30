<template>
  <div>
    <main class="relative container mx-auto max-w-7xl z-10 px-6 min-h-[calc(100vh_-_64px_-_108px)] mb-12 flex-grow">
      <div class="grid grid-cols-12">
        <div class="hidden relative z-10 lg:block lg:col-span-2 mt-8 pr-4">
          <DocsSidebar />
        </div>

        <div class="col-span-12 lg:col-span-10 xl:col-span-8 lg:px-16 mt-10">
          <div className="w-full prose prose-neutral">
            <slot />
          </div>

          <footer>
            <slot name="footer" />
          </footer>
        </div>

        <div class="hidden z-10 xl:flex xl:col-span-2 mt-8 pl-4">
          <slot name="toc" />
        </div>
      </div>
    </main>

    <div
      aria-hidden="true"
      className="fixed hidden dark:md:block dark:opacity-70 -bottom-[40%] -left-[20%] z-0"
    >
      <img remove-wrapper alt="docs left background" src="/gradients/docs-left.png">
    </div>

    <div
      aria-hidden="true"
      className="fixed hidden dark:md:block dark:opacity-70 -top-[80%] -right-[60%] 2xl:-top-[60%] 2xl:-right-[45%] z-0 rotate-12"
    >
      <img remove-wrapper alt="docs right background" src="/gradients/docs-right.png">
    </div>
  </div>
</template>
