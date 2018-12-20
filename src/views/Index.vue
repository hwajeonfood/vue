<template>
    <div class="wrapper">
        <parallax class="page-header header-filter" :style="headerStyle">
            <div class="md-layout">
                <div class="md-layout-item">
                    <div class="image-wrapper">
                        <img :src="steam" alt="steam" class="leaf1 z-index-0">
                        <div>
                            <div class="brand md-layout-item md-size-75 mx-auto md-small-size-90">
                                <h1>{{this.$t("index.title")}}</h1>
                            </div>
                            <div class="brand md-layout-item md-size-75 mx-auto md-small-size-90">
                                <md-card>
                                    <md-card-header class="brand">
                                        <md-card-header-text>
                                            <div class="md-title">{{this.$t("index.filter-title")}}</div>
                                            <div
                                                class="md-subhead"
                                            >{{this.$t("index.filter-subtitle")}}</div>
                                        </md-card-header-text>
                                    </md-card-header>

                                    <br>
                                    <loading
                                        :active.sync="isLoading"
                                        :is-full-page="true"
                                        loader="dots"
                                    ></loading>
                                    <md-button
                                        v-if="!isLoading"
                                        v-for="(foodType, idx) in category"
                                        :key="idx"
                                        @click="toggleCategory(idx)"
                                        :class="{'md-primary':foodType.isSelected, 'md-default': !foodType.isSelected}"
                                    >{{foodType.name}}</md-button>
                                </md-card>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </parallax>

        <router-view name="store_modal"></router-view>

        <div class="main main-raised">
            <div class="section section-basic">
                <div class="container">
                    <card-container :contents="contents"/>
                </div>
            </div>
        </div>
        <on-sign-in/>
    </div>
</template>

<script>
import CardContainer from "./components/CardContainer";
import Loading from "vue-loading-overlay";
import OnSignIn from "./components/OnSignIn";

export default {
    components: {
        CardContainer,
        Loading,
        OnSignIn
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
            isLoading: true,
            headerStyle: {
                backgroundImage: `url(${require("@/assets/img/hwajeon" +
                    Math.floor(Math.random() * 3) +
                    ".jpg")})`
            },
            receivedContents: [],
            category: [],
            contents: []
        };
    },
    methods: {
        toggleCategory(idx) {
            this.category[idx].isSelected = !this.category[idx].isSelected;
            this.filterContents();
        },
        filterContents() {
            // todo: rdbms 로 쿼리 날리면 좋겠지만???(좋은가) 나중에 양이 많아지면 하도록 하자
            const selectedCategory = this.category.filter(c => c.isSelected);
            this.contents = this.receivedContents.filter(store => {
                for (let c of selectedCategory) {
                    if (store.foodType.indexOf(c.name.toUpperCase()) > -1) {
                        return true;
                    }
                }
                return false;
            });
            this.$cookie.set(
                "storedCategory",
                JSON.stringify(this.category),
                365
            );
        },
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
        }
    },
    mounted() {
        this.leafActive();
        window.addEventListener("resize", this.leafActive);
        this.$http
            .get("https://jsonplaceholder.typicode.com/users")
            .then(result => {
                this.category = result.data.map(obj => ({
                    name: obj.username,
                    isSelected: false
                }));
                this.receivedContents = [
                    {
                        id: 1,
                        store_name: "항공반점",
                        description: "짜장면먹으세요",
                        location: "어디어디 앞",
                        foodType: ["BRET", "ANTONETTE"],
                        thumbnail: require("@/assets/img/hangkongbanjum.jpg"),
                        images: [
                            require("@/assets/img/menu.jpg"),
                            require("@/assets/img/hangkongbanjum.jpg"),
                            require("@/assets/img/bokumbab.jpg"),
                            require("@/assets/img/temp_jjm.jpg")
                        ]
                    },
                    {
                        id: 2,
                        store_name: "항공반점2",
                        description: "보끔밥 마싯어",
                        location: "항공반점알지",
                        foodType: ["BRET", "SAMANTHA", "KARIANNE"],
                        thumbnail: require("@/assets/img/bokumbab.jpg"),
                        images: [
                            require("@/assets/img/menu.jpg"),
                            require("@/assets/img/hangkongbanjum.jpg"),
                            require("@/assets/img/bokumbab.jpg"),
                            require("@/assets/img/temp_jjm.jpg")
                        ]
                    },
                    {
                        id: 3,
                        store_name: "칼멘 레오폴드 사만사 카리아네",
                        description: "그 외 다른거 이런식으로 추가한다",
                        location: "어디어디 ",
                        foodType: [
                            "KAMREN",
                            "LEOPOLDO_CORKERY",
                            "SAMANTHA",
                            "KARIANNE"
                        ],
                        thumbnail: require("@/assets/img/temp_bdjg.jpg"),
                        images: [
                            require("@/assets/img/menu.jpg"),
                            require("@/assets/img/hangkongbanjum.jpg"),
                            require("@/assets/img/bokumbab.jpg"),
                            require("@/assets/img/temp_jjm.jpg")
                        ]
                    },
                    {
                        id: 4,
                        store_name: "모리아",
                        description: "그 외 다른거 이런식으로 추가한다",
                        location: "거 외 그 그곳",
                        foodType: ["MORIAH.STANTON"],
                        thumbnail: require("@/assets/img/temp_gc.jpg"),
                        images: [
                            require("@/assets/img/menu.jpg"),
                            require("@/assets/img/hangkongbanjum.jpg"),
                            require("@/assets/img/bokumbab.jpg"),
                            require("@/assets/img/temp_jjm.jpg")
                        ]
                    },
                    {
                        id: 5,
                        store_name: "씨유등등~",
                        description: "그 외 다른거 이런식으로 추가한다",
                        location: "학교에서 10분거리",
                        foodType: ["ELWYN.SKILES", "MAXIME_NIENOW", "DELPHINE"],
                        thumbnail: require("@/assets/img/temp_jjm.jpg"),
                        images: [
                            require("@/assets/img/menu.jpg"),
                            require("@/assets/img/hangkongbanjum.jpg"),
                            require("@/assets/img/bokumbab.jpg"),
                            require("@/assets/img/temp_jjm.jpg")
                        ]
                    },
                    {
                        id: 6,
                        store_name: "라면머거라",
                        description: "그 외 다른거 이런식으로 추가한다",
                        location: "뛰면 3분",
                        foodType: [
                            "ELWYN.SKILES",
                            "KAMREN",
                            "LEOPOLDO_CORKERY",
                            "DELPHINE"
                        ],
                        thumbnail: require("@/assets/img/temp_rm.jpg"),
                        images: [
                            require("@/assets/img/menu.jpg"),
                            require("@/assets/img/hangkongbanjum.jpg"),
                            require("@/assets/img/bokumbab.jpg"),
                            require("@/assets/img/temp_jjm.jpg")
                        ]
                    },
                    {
                        id: 7,
                        store_name: "삼겹사알",
                        description: "그 외 다른거 이런식으로 추가한다",
                        location: "응 그냥와",
                        foodType: ["ELWYN.SKILES", "KAMREN", "DELPHINE"],
                        thumbnail: require("@/assets/img/temp_sgs.jpg"),
                        images: [
                            require("@/assets/img/menu.jpg"),
                            require("@/assets/img/hangkongbanjum.jpg"),
                            require("@/assets/img/bokumbab.jpg"),
                            require("@/assets/img/temp_jjm.jpg")
                        ]
                    }
                ];

                // using cookie, to filtering
                const storedCategory = JSON.parse(
                    this.$cookie.get("storedCategory")
                );
                if (
                    storedCategory != null &&
                    typeof storedCategory.length !== "undefined" &&
                    storedCategory.length != 0
                ) {
                    storedCategory.forEach((sc, idx) => {
                        if (sc.isSelected) {
                            this.category[idx].isSelected = true;
                        }
                    });
                } else {
                    this.category.forEach(c => {
                        c.isSelected = true;
                    });
                }
                this.filterContents();
                this.isLoading = false;
            });
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

.z-index-0 {
    z-index: 0;
}

.opacity-50 {
    background-color: white;
    opacity: 0.5;
}

.leaf1 {
    position: absolute;
    transform: rotate(0deg);
    right: auto;
    width: 20%;
    top: -50vh;
    left: 200px;
}
</style>
