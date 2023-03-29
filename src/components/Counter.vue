<script setup lang="ts">
const { counter, inc} = useCounter()
</script>

<template>
    <div @click="inc">inc: {{ counter }}</div>
</template>