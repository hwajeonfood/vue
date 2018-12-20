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
    beforeMount() {
        let locale = this.$cookie.get("locale");
        this.$bus.store.navigator.locale =
            navigator.languages && navigator.languages.length
                ? navigator.languages[0]
                : navigator.language;
        if (typeof this.$bus.store.navigator.locale === "string") {
            this.$bus.store.navigator.locale = this.$bus.store.navigator.locale.substr(
                0,
                2
            );
            if (this.$bus.store.navigator.locale == "zh")
                this.$bus.store.navigator.locale = "zh_cn";
        }
        if (locale != null) this.$i18n.locale = locale;
        else if (typeof this.$bus.store.navigator.locale === "string") {
            this.$i18n.locale = this.$bus.store.navigator.locale;
        } else {
            this.$i18n.locale = "ko";
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
</style>
