<template>
    <div class="wrapper">
        <parallax class="page-header header-filter" :style="headerStyle">
            <div class="md-layout">
                <div class="md-layout-item">
                    <div class="image-wrapper">
                        <img :src="steam" alt="steam" class="leaf1">
                        <div class="brand">
                            <h1>화전 회식</h1>
                            <h3>여기는 카테고리 필터가 들어가요.</h3>
                        </div>
                    </div>
                </div>
            </div>
        </parallax>

        <div class="main main-raised">
            <router-view name="store_modal"></router-view>

            <div class="section section-basic">
                <div class="container">
                    <card-container :contents="contents"/>
                </div>
                <div class="container">
                    <card-container :contents="contents"/>
                </div>
                <div class="container">
                    <card-container :contents="contents"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CardContainer from "./components/CardContainer";

export default {
    components: {
        CardContainer
    },
    name: "index",
    bodyClass: "index-page",
    props: {
        steam: {
            type: String,
            default: require("@/assets/img/white_steam.gif")
        }
    },
    data() {
        return {
            firstname: null,
            email: null,
            password: null,
            leafShow: false,
            headerStyle: {
                backgroundImage: `url(${require("@/assets/img/hwajeon" +
                    Math.floor(Math.random() * 3) +
                    ".jpg")})`
            }
        };
    },
    methods: {
        showStoreModal() {},
        leafActive() {
            if (window.innerWidth < 768) {
                this.leafShow = false;
            } else {
                this.leafShow = true;
            }
        }
    },
    computed: {
        signupImage() {
            return {
                backgroundImage: `url(${this.signup})`
            };
        },
        contents() {
            // db처리
            return [
                {
                    id: 1,
                    store_name: "항공반점",
                    description: "짜장면먹으세요"
                },
                {
                    id: 2,
                    store_name: "청춘상회",
                    description: "술드세요 소주랑 맥주"
                },
                {
                    id: 3,
                    store_name: "씨유등등",
                    description: "그 외 다른거 이런식으로 추가한다"
                }
            ];
        }
    },
    mounted() {
        this.leafActive();
        window.addEventListener("resize", this.leafActive);
    },
    beforeDestroy() {
        window.removeEventListener("resize", this.leafActive);
    }
};
</script>

<style lang="scss">
.section-download {
    .md-button + .md-button {
        margin-left: 5px;
    }
}

@media all and (min-width: 991px) {
    .btn-container {
        display: flex;
    }
}
</style>
