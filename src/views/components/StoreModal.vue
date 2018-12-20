<template>
    <div id="wrapper">
        <keyboard-event @keyup="keyboardEvent"></keyboard-event>
        <modal>
            <template slot="header">
                <h4 class="modal-title">{{store}}</h4>
                <md-button
                    class="md-simple md-just-icon md-round modal-default-button"
                    @click="closeModal"
                >
                    <md-icon>clear</md-icon>
                </md-button>
            </template>

            <template slot="body" ref="bodyContainer">
                <div v-if="isLoading">
                    <div ref="loader"/>
                </div>
                <md-content class="md-scrollbar scroll_modal" v-else>
                    <div class="title">
                        <h3>{{store}} 입니다! 어서오세요!</h3>
                    </div>
                    <div class="md-layout-item md-size-85 mx-auto md-small-size-90">
                        <md-card class="md-card-nav-tabs">
                            <md-card-content>
                                <md-button class="md-success md-lg">설명나오는 곳 :
                                    <br>
                                    {{description}}
                                </md-button>
                            </md-card-content>
                        </md-card>
                    </div>

                    <div class="title">
                        <h3>메뉴판 / 식당 내부</h3>
                    </div>
                    <div class="md-layout">
                        <div class="md-layout-item md-size-85 mx-auto md-small-size-90">
                            <md-card>
                                <carousel
                                    :per-page="1"
                                    loop
                                    :speed="700"
                                    autoplay
                                    :autoplay-timeout="5000"
                                    :mouse-drag="false"
                                    navigationEnabled
                                    navigationNextLabel="<i class='material-icons'>keyboard_arrow_right</i>"
                                    navigationPrevLabel="<i class='material-icons'>keyboard_arrow_left</i>"
                                >
                                    <slide v-for="(image, idx) in images" :key="idx">
                                        <div class="carousel-caption">
                                            <h4>
                                                <md-icon>location_on</md-icon>
                                                {{image_descriptions[idx]}}
                                            </h4>
                                        </div>
                                        <img
                                            :src="images[0]"
                                            :alt="image_descriptions[idx]"
                                            width="100px"
                                            height="500px"
                                        >
                                    </slide>
                                </carousel>
                            </md-card>
                        </div>
                    </div>

                    <div class="title">
                        <h3>예약을 원하세요?</h3>
                    </div>
                    <div class="md-layout">
                        <div class="md-layout-item md-size-85 mx-auto md-small-size-90">
                            <md-card>
                                <date-pick v-model="date" :hasInputElement="false"></date-pick>
                            </md-card>
                        </div>
                    </div>
                </md-content>
            </template>

            <template slot="footer">
                <md-button class="md-simple md-primary md-raised">Nice Button</md-button>
                <md-button class="md-simple md-danger md-raised" @click="closeModal">Close</md-button>
            </template>
        </modal>
    </div>
</template>

<script>
import Vue from "vue";
import Loading from "vue-loading-overlay";
import Modal from "@/components/Modal";
import DatePick from "vue-date-pick";
import "vue-date-pick/dist/vueDatePick.css";
import KeyboardEvent from "./KeyBoardEvent";

Vue.use(Loading);

export default {
    components: {
        Modal,
        DatePick,
        KeyboardEvent
    },
    methods: {
        closeModal() {
            this.$router.push("/");
        },
        keyboardEvent(e) {
            const ESC_KEY = 27;
            if (e.which == ESC_KEY) {
                this.closeModal();
            }
        }
    },
    data() {
        return {
            date: (() => {
                var today = new Date();
                var dd = today.getDate();
                var mm = today.getMonth() + 1; //January is 0!
                var yyyy = today.getFullYear();

                if (dd < 10) {
                    dd = "0" + dd;
                }

                if (mm < 10) {
                    mm = "0" + mm;
                }
                return `${yyyy}-${mm}-${dd}`;
            })(),
            isLoading: true,
            store: "무엇을 먹을까?",
            description: "",
            id: "",
            images: [],
            image_descriptions: []
        };
    },
    mounted() {
        this.$bus.$on("close_modal", () => {
            this.closeModal();
        });

        let loader = this.$loading.show({
            loader: "dots",
            container: this.$refs.loader
        });

        // ajax, load db with $route.params.id
        // `/store/${this.$route.params.id}`
        this.$http
            .get(
                `https://jsonplaceholder.typicode.com/todos/${
                    this.$route.params.id
                }`
            )
            .then(result => {
                this.id = result.data["id"];
                this.store = result.data["userId"] + " store";
                this.description = result.data["title"];
                this.images = [
                    "http://img.etnews.com/news/article/2016/01/25/article_25154943153177.jpg",
                    "http://cfile203.uf.daum.net/image/21065A42564A9FCD15006E",
                    "http://cfile214.uf.daum.net/image/236FF744564A9F63168B06"
                ];
                this.image_descriptions = [
                    "그림1의 설명이당",
                    "그림 2는 무엇인가",
                    "3번째가 끝"
                ];

                loader.hide();
                this.isLoading = false;
            });
    }
};
</script>

<style lang="scss">
.scroll_modal {
    max-height: calc(100vh - 300px);
    overflow-y: auto;
}

.carousel_size {
    max-height: calc(400px);
}
</style>
