<template>
    <md-toolbar
        id="toolbar"
        md-elevation="0"
        class="md-transparent md-absolute z-index-over-content"
        :class="extraNavClasses"
        :color-on-scroll="colorOnScroll"
    >
        <div class="md-toolbar-row md-collapse-lateral">
            <div class="md-toolbar-section-start">
                <h3 class="md-title">화전 회식</h3>
            </div>
            <div class="md-toolbar-section-end">
                <md-button
                    class="md-just-icon md-simple md-toolbar-toggle"
                    :class="{toggled: toggledClass}"
                    @click="toggleNavbarMobile()"
                >
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </md-button>

                <div class="md-collapse">
                    <div class="md-collapse-wrapper">
                        <mobile-menu nav-mobile-section-start="false">
                            <!-- Here you can add your items from the section-start of your toolbar -->
                        </mobile-menu>

                        <md-list>
                            <li class="md-list-item">
                                <a
                                    href="javascript:void(0)"
                                    class="md-list-item-router md-list-item-container md-button-clean dropdown"
                                >
                                    <div class="md-list-item-content">
                                        <drop-down direction="down">
                                            <md-button
                                                slot="title"
                                                class="md-button md-button-link md-white md-simple dropdown-toggle"
                                                data-toggle="dropdown"
                                            >
                                                <i class="material-icons">filter_list</i>
                                                <p>메뉴 분류 선정</p>
                                            </md-button>
                                            <ul class="dropdown-menu dropdown-with-icons">
                                                <li>
                                                    <a href="javascript:void(0);">
                                                        <!-- <i class="material-icons">layers</i> -->
                                                        <p>중국 음식</p>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);">
                                                        <!-- <i class="material-icons">layers</i> -->
                                                        <p>국수</p>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);">
                                                        <!-- <i class="material-icons">layers</i> -->
                                                        <p>술과 고기</p>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);">
                                                        <!-- <i class="material-icons">layers</i> -->
                                                        <p>술과 안주</p>
                                                    </a>
                                                </li>
                                            </ul>
                                        </drop-down>
                                    </div>
                                </a>
                            </li>

                            <md-list-item href="javascript:void(0);" v-if="isSignIn && isManager">
                                <i class="material-icons">web</i>
                                <p class="hidden-lg">상점정보변경/예약확인</p>
                                <md-tooltip md-direction="bottom">상점정보변경/예약확인</md-tooltip>
                            </md-list-item>
                            <md-list-item href="javascript:void(0);" v-else-if="isSIgnIn && isUser">
                                <i class="material-icons">web</i>
                                <p class="hidden-lg">유저 예약확인</p>
                                <md-tooltip md-direction="bottom">유저 예약확인</md-tooltip>
                            </md-list-item>
                            <md-list-item
                                href="javascript:void(0);"
                                @click="signOut"
                                v-if="isSignIn"
                            >
                                <i class="material-icons">exit_to_app</i>
                                <p class="hidden-lg">Sign Out</p>
                                <md-tooltip md-direction="bottom">Sign Out</md-tooltip>
                            </md-list-item>
                            <md-list-item
                                href="javascript:void(0);"
                                @click="showModalSignIn"
                                v-else
                            >
                                <i class="material-icons">account_circle</i>
                                <p class="hidden-lg">SignIn</p>
                                <md-tooltip
                                    md-direction="bottom"
                                >Sign in for Admin(Manage store) or User(to reserve)</md-tooltip>
                            </md-list-item>
                        </md-list>

                        <!--

                        <md-list>
                            

                            <md-list-item
                                href="https://demos.creative-tim.com/vue-material-kit/documentation/"
                                target="_blank"
                                v-if="showDownload"
                            >
                                <i class="material-icons">content_paste</i>
                                <p>Documentation</p>
                            </md-list-item>

                            <md-list-item
                                href="javascript:void(0)"
                                @click="scrollToElement()"
                                v-if="showDownload"
                            >
                                <i class="material-icons">cloud_download</i>
                                <p>Download</p>
                            </md-list-item>

                            <li class="md-list-item" v-else>
                                <a
                                    href="javascript:void(0)"
                                    class="md-list-item-router md-list-item-container md-button-clean dropdown"
                                >
                                    <div class="md-list-item-content">
                                        <drop-down direction="down">
                                            <md-button
                                                slot="title"
                                                class="md-button md-button-link md-white md-simple dropdown-toggle"
                                                data-toggle="dropdown"
                                            >
                                                <i class="material-icons">view_carousel</i>
                                                <p>Examples</p>
                                            </md-button>
                                            <ul class="dropdown-menu dropdown-with-icons">
                                                <li>
                                                    <a href="#/landing">
                                                        <i class="material-icons">view_day</i>
                                                        <p>Landing Page</p>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#/login">
                                                        <i class="material-icons">fingerprint</i>
                                                        <p>Login Page</p>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#/profile">
                                                        <i class="material-icons">account_circle</i>
                                                        <p>Profile Page</p>
                                                    </a>
                                                </li>
                                            </ul>
                                        </drop-down>
                                    </div>
                                </a>
                            </li>

                            <md-list-item href="https://twitter.com/CreativeTim" target="_blank">
                                <i class="fab fa-twitter"></i>
                                <p class="hidden-lg">Twitter</p>
                                <md-tooltip md-direction="bottom">Follow us on Twitter</md-tooltip>
                            </md-list-item>
                            <md-list-item
                                href="https://www.facebook.com/CreativeTim"
                                target="_blank"
                            >
                                <i class="fab fa-facebook-square"></i>
                                <p class="hidden-lg">Facebook</p>
                                <md-tooltip md-direction="bottom">Like us on Facebook</md-tooltip>
                            </md-list-item>
                            <md-list-item
                                href="https://www.instagram.com/CreativeTimOfficial"
                                target="_blank"
                            >
                                <i class="fab fa-instagram"></i>
                                <p class="hidden-lg">Instagram</p>
                                <md-tooltip md-direction="bottom">Follow us on Instagram</md-tooltip>
                            </md-list-item>

                        </md-list>
                        -->
                    </div>
                </div>
            </div>
        </div>
    </md-toolbar>
</template>

<script>
import EventBus from "@/EventBus.js";

let resizeTimeout;
function resizeThrottler(actualResizeHandler) {
    // ignore resize events as long as an actualResizeHandler execution is in the queue
    if (!resizeTimeout) {
        resizeTimeout = setTimeout(() => {
            resizeTimeout = null;
            actualResizeHandler();

            // The actualResizeHandler will execute at a rate of 15fps
        }, 66);
    }
}

import MobileMenu from "@/layout/MobileMenu";
export default {
    components: {
        MobileMenu
    },
    props: {
        type: {
            type: String,
            default: "white",
            validator(value) {
                return [
                    "white",
                    "default",
                    "primary",
                    "danger",
                    "success",
                    "warning",
                    "info"
                ].includes(value);
            }
        },
        colorOnScroll: {
            type: Number,
            default: 0
        }
    },
    data() {
        return {
            extraNavClasses: "",
            toggledClass: false,
            isSignIn: true,
            isManager: true,
            isUser: false
        };
    },
    computed: {
        showDownload() {
            const excludedRoutes = ["login", "landing", "profile"];
            return excludedRoutes.every(r => r !== this.$route.name);
        }
    },
    methods: {
        signOut() {},
        showModalSignIn() {},
        bodyClick() {
            let bodyClick = document.getElementById("bodyClick");

            if (bodyClick === null) {
                let body = document.querySelector("body");
                let elem = document.createElement("div");
                elem.setAttribute("id", "bodyClick");
                body.appendChild(elem);

                let bodyClick = document.getElementById("bodyClick");
                bodyClick.addEventListener("click", this.toggleNavbarMobile);
            } else {
                bodyClick.remove();
            }
        },
        toggleNavbarMobile() {
            this.NavbarStore.showNavbar = !this.NavbarStore.showNavbar;
            this.toggledClass = !this.toggledClass;
            this.bodyClick();
        },
        handleScroll() {
            let scrollValue =
                document.body.scrollTop || document.documentElement.scrollTop;
            let navbarColor = document.getElementById("toolbar");
            this.currentScrollValue = scrollValue;
            if (this.colorOnScroll > 0 && scrollValue > this.colorOnScroll) {
                this.extraNavClasses = `md-${this.type}`;
                navbarColor.classList.remove("md-transparent");
            } else {
                if (this.extraNavClasses) {
                    this.extraNavClasses = "";
                    navbarColor.classList.add("md-transparent");
                }
            }
        },
        scrollListener() {
            resizeThrottler(this.handleScroll);
        },
        scrollToElement() {
            let element_id = document.getElementById("downloadSection");
            if (element_id) {
                element_id.scrollIntoView({ block: "end", behavior: "smooth" });
            }
        }
    },
    mounted() {
        document.addEventListener("scroll", this.scrollListener);
        EventBus.$on("nav-bar-z-index-on", () => {
            let el = this.$el;
            let className = "z-index-under-content";
            if (this.hasClass(el, className)) this.removeClass(el, className);
            className = "z-index-over-content";
            if (!this.hasClass(el, className)) this.addClass(el, className);
            console.log(this.$el);
        });

        EventBus.$on("nav-bar-z-index-off", () => {
            let el = this.$el;
            let className = "z-index-over-content";
            if (this.hasClass(el, className)) this.removeClass(el, className);
            className = "z-index-under-content";
            if (!this.hasClass(el, className)) this.addClass(el, className);
            console.log(this.$el);
        });
    },
    beforeDestroy() {
        document.removeEventListener("scroll", this.scrollListener);
        EventBus.$off("nav-bar-z-index-on");
        EventBus.$off("nav-bar-z-index-off");
    }
};
</script>

<style lang="scss" scoped>
.z-index-over-content {
    z-index: 4;
}
.z-index-under-content {
    z-index: 3;
}
</style>
