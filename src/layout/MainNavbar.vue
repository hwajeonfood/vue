<template>
    <md-toolbar
        id="toolbar"
        md-elevation="0"
        class="md-transparent md-absolute z-index-4"
        :class="extraNavClasses"
        :color-on-scroll="colorOnScroll"
    >
        <div class="md-toolbar-row md-collapse-lateral">
            <div class="md-toolbar-section-start">
                <h3 class="md-title">{{$t("navbar.title")}}</h3>
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
                            <!--
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
                                            <ul
                                                class="dropdown-menu dropdown-with-icons scroll-hidden"
                                            >
                                                <li>
                                                    <a href="javascript:void(0);">
                                                        <i class="material-icons"></i>
                                                        <p>중국 음식</p>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);">
                                                        <i class="material-icons"></i>
                                                        <p>국수</p>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);">
                                                        <i class="material-icons"></i>
                                                        <p>술과 고기</p>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);">
                                                        <i class="material-icons"></i>
                                                        <p>술과 안주</p>
                                                    </a>
                                                </li>
                                            </ul>
                                        </drop-down>
                                    </div>
                                </a>
                            </li>
                            -->
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
                                                <i class="material-icons">language</i>
                                                <p>가 ⇄ A ⇄ あ</p>
                                            </md-button>
                                            <ul
                                                class="dropdown-menu dropdown-with-icons scroll-hidden"
                                            >
                                                <li
                                                    v-for="(locMsg, key) in $i18n.messages"
                                                    :key="key"
                                                >
                                                    <a
                                                        href="javascript:void(0);"
                                                        @click="changeLocale(locMsg['locale-name-short-en'])"
                                                    >
                                                        <i
                                                            class="material-icons color-green strong"
                                                            v-if="locMsg['locale-name-short-en'] == $bus.store.navigator.locale && $bus.store.navigator.locale == $i18n.locale"
                                                        >check</i>
                                                        <i
                                                            class="material-icons strong"
                                                            v-else-if="locMsg['locale-name-short-en'] == $bus.store.navigator.locale"
                                                        >translate</i>
                                                        <i
                                                            class="material-icons color-green strong"
                                                            v-else-if="locMsg['locale-name-short-en'] == $i18n.locale"
                                                        >check</i>
                                                        <i class="material-icons" v-else></i>
                                                        <p>{{locMsg['locale-name']}}</p>
                                                    </a>
                                                </li>
                                            </ul>
                                        </drop-down>
                                    </div>
                                </a>
                            </li>

                            <md-list-item href="javascript:void(0);" v-if="isSignIn && isManager">
                                <i class="material-icons">web</i>
                                <p class="hidden-lg">{{$t("navbar.manage-info")}}</p>
                                <md-tooltip md-direction="bottom">{{$t("navbar.manage-info")}}</md-tooltip>
                            </md-list-item>
                            <md-list-item href="javascript:void(0);" v-else-if="isSIgnIn && isUser">
                                <i class="material-icons">web</i>
                                <p class="hidden-lg">{{$t("navbar.user-reserve-info")}}</p>
                                <md-tooltip md-direction="bottom">{{$t("navbar.user-reserve-info")}}</md-tooltip>
                            </md-list-item>
                            <md-list-item
                                href="javascript:void(0);"
                                @click="signOut"
                                v-if="isSignIn"
                            >
                                <i class="material-icons">exit_to_app</i>
                                <p class="hidden-lg">{{$t("navbar.sign-out")}}</p>
                                <md-tooltip md-direction="bottom">{{$t("navbar.sign-out")}}</md-tooltip>
                            </md-list-item>
                            <md-list-item
                                href="javascript:void(0);"
                                @click="showModalSignIn"
                                v-else
                            >
                                <i class="material-icons">account_circle</i>
                                <p class="hidden-lg">{{$t("navbar.sign-in")}}</p>
                                <md-tooltip
                                    md-direction="bottom"
                                >{{$t("navbar.sign-in-description")}}</md-tooltip>
                            </md-list-item>
                        </md-list>
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
        changeLocale(locale) {
            this.$cookie.set("locale", locale, 30);
            this.$i18n.locale = locale;
        },
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
    },
    beforeDestroy() {
        document.removeEventListener("scroll", this.scrollListener);
    }
};
</script>

<style lang="scss" scoped>
.z-index-4 {
    z-index: 4;
}
.scroll-hidden {
    overflow-y: hidden !important;
}
.color-green {
    color: green;
}
.strong {
    font-weight: bolder;
}
</style>
