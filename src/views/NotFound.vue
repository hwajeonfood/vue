<template>
    <div class="wrapper">
        <div class="section page-header header-filter" :style="headerStyle">
            <div class="container">
                <div class="md-layout">
                    <div
                        class="md-layout-item md-size-33 md-small-size-66 md-xsmall-size-100 md-medium-size-40 mx-auto"
                    >
                        <login-card header-color="red">
                            <h4 slot="title" class="card-title">{{$t("not-found.title")}}</h4>
                            <h6 slot="buttons" class="white">{{$t("not-found.subtitle")}}</h6>
                            <h2 slot="buttons" class="md-just-icon md-simple md-white white">
                                <i style="font-weight: bold" class="far fa-grin-tongue-wink"></i>
                            </h2>
                            <p slot="inputs" class="md-form-group description">
                                <br>
                                {{$t("not-found.error-description")}}
                            </p>
                            <md-button
                                @click="goHome"
                                slot="footer"
                                class="md-simple md-success md-lg"
                            >
                                <i class="fas fa-home"></i>
                                {{$t("not-found.go-home-button")}}
                            </md-button>
                        </login-card>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { LoginCard } from "@/components";

export default {
    components: {
        LoginCard
    },
    bodyClass: "not-found-page",
    props: {
        header: {
            type: String,
            default: require("@/assets/img/hwajeon0.jpg")
        }
    },
    computed: {
        headerStyle() {
            return {
                backgroundImage: `url(${this.header})`
            };
        }
    },
    methods: {
        goHome() {
            this.$router.push("/");
        }
    }
};
</script>

<style lang="css" scoped>
.white {
    color: white;
}
</style>
