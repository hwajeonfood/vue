<template>
    <div id="wrapper">
        <h2>Card 컨테이너 입니다</h2>
        <div>
            <store-card
                v-for="content in contents"
                :content="content"
                :key="content.id"
                @clickButton="showStoreModal"
            />
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
import StoreCard from "./StoreCard.vue";
export default {
    components: {
        StoreCard
    },
    props: ["contents"],
    methods: {
        showStoreModal(contentId) {
            this.$router.push("/store/" + contentId);
        }
    }
};
</script>

<style lang="scss" scoped>
#app {
    float: left;
    width: 70%;
    background-color: salmon;
}

#app div:end {
    content: " ";
    background-color: royalblue;
}
</style>
