<template>
    <div id="material-kit">
        <div :class="{'nav-open': NavbarStore.showNavbar}">
            <router-view name="header"/>
            <div>
                <router-view name="body"/>
            </div>
            <router-view name="footer"/>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        findLocale() {
            let locale = this.$cookie.get("locale");
            this.navigatorStore.locale =
                navigator.languages && navigator.languages.length
                    ? navigator.languages[0]
                    : navigator.language;
            if (typeof this.navigatorStore.locale === "string") {
                this.navigatorStore.locale = this.navigatorStore.locale.substr(
                    0,
                    2
                );
            }
            if (locale != null) this.$i18n.locale = locale;
            else if (typeof this.navigatorStore.locale === "string") {
                this.$i18n.locale = this.navigatorStore.locale;
            } else {
                this.$i18n.locale = "ko";
            }
        }
    },
    mounted() {
        this.findLocale();
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
</style>
