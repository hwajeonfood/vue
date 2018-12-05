<template>
    <div @click="$emit('customClick', item.id)">todo : {{item.id}} : {{item.work}}</div>
</template>

<script>
export default {
    props: ["item"]
};
</script>

<style lang="scss" scoped>
</style>
