<template>
  <div class="app">
    {{ message }}
    <Button />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Button } from '@dz-ui/components'

const message = ref("你好啊，戴卓")
</script>

<style scoped lang="less"></style>