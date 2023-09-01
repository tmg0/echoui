<script setup lang="ts">
import { Spinner } from '@echoui/vue'
</script>

<template>
  <div>
    <h1>Spinner</h1>

    <p>
      Spinner express an unspecified wait time or display the length of a process.
    </p>

    <div>
      <Spinner />
    </div>

    <div class="flex items-center gap-4">
      <Spinner size="sm" />
      <Spinner size="md" />
      <Spinner size="lg" />
    </div>

    <div class="flex gap-4">
      <Spinner color="default" />
      <Spinner color="primary" />
      <Spinner color="secondary" />
      <Spinner color="success" />
      <Spinner color="warning" />
      <Spinner color="danger" />
    </div>

    <div>
      <Spinner label="Loading..." color="warning" />
    </div>

    <div class="flex gap-4">
      <Spinner label="Default" color="default" label-color="foreground" />
      <Spinner label="Primary" color="primary" label-color="primary" />
      <Spinner label="Secondary" color="secondary" label-color="secondary" />
      <Spinner label="Success" color="success" label-color="success" />
      <Spinner label="Warning" color="warning" label-color="warning" />
      <Spinner label="Danger" color="danger" label-color="danger" />
    </div>
  </div>
</template>
