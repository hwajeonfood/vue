<template>
    <div id="wrapper">
        <h2>{{$t("card-container.title")}}</h2>
        <div class="auto-center">
            <store-card
                class="fit-content"
                v-for="content in contents"
                :content="content"
                :key="content.id"
                @clickButton="showStoreModal"
            />
        </div>
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

.auto-center {
    width: fit-content;
    margin: auto;
    text-align: center;
}

.fit-content {
    width: fit-content;
    display: contents;
}
</style>
