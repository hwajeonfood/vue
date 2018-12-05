<template>
    <div id="app">
        <navigator/>
        <app-body :contents="contents"/>
        <!-- <router-view v-if="isIntroShow"> : .desing 파일 참고 -->
    </div>
</template>

<script>
import Navigator from "./navigator/index.vue";
import AppBody from "./appBody/index.vue";

export default {
    components: {
        Navigator,
        AppBody
    },
    computed: {
        contents() {
            // db처리
            return [
                {
                    id: 1,
                    store: "항공반점",
                    description: "짜장면먹으세요"
                },
                {
                    id: 2,
                    store: "청춘상회",
                    description: "술드세요 소주랑 맥주"
                },
                {
                    id: 3,
                    store: "씨유등등",
                    description: "그 외 다른거 이런식으로 추가한다"
                }
            ];
        },
        isIntroShow() {
            // router 처리
            return false;
        }
    }
};
</script>

<style lang="scss" scoped>
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 10px;
}

navigator {
    max-width: 100px;
}

app-body {
    max-width: 100px;
}
</style>
