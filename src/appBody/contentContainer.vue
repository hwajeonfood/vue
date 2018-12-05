<template>
    <div id="app">
        <b-card
            :title="content.store"
            img-src="https://mp-seoul-image-production-s3.mangoplate.com/added_restaurants/132097_1494413908425789.jpg?fit=around|512:512&crop=512:512;*,*&output-format=jpg&output-quality=80"
            :img-alt="content.store"
            img-top
            tag="article"
            style="max-width: 20rem;"
        >
            <p class="card-text">{{content.description}}</p>
            <b-button @click="$emit('clickButton', content.id)" size="lg" variant="primary">이거는 버튼인디</b-button>
            <!-- <router-link > :href 대신에 </router-link> -->
        </b-card>
    </div>
</template>

<script>
import ContentContainer from "./contentContainer.vue";
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
