<template>
    <div id="wrapper">
        store : {{content.store_name}} / desc : {{content.description}} / id : {{content.id}}
        <md-button
            class="md-primary md-round classic-modal"
            @click="$emit('clickButton', content.id)"
            :title="'click to show modal for this store : '+content.id"
        >click this button to show modal</md-button>
    </div>
</template>

<script>
export default {
    props: ["content"]
};
</script>

<style lang="scss" scoped>
#app {
    min-width: 10rem;
    max-width: 20rem;
    padding: 10px;
    margin: 5px;
}
</style>
