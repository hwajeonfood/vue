<template>
    <div id="app">
        <h1>오른쪽에 나오는 내용</h1>
        <b-card-group>
            <content-container
                v-for="content in contents"
                :content="content"
                :key="content.id"
                @clickButton="showStoreModal"
            />
        </b-card-group>
        <router-view></router-view>
    </div>
</template>

<script>
import ContentContainer from "./contentContainer.vue";
export default {
    components: {
        ContentContainer
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
