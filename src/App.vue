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
