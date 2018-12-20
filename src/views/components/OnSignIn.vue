<template>
    <div id="google-signin-button"></div>
</template>

<script>
import GAPI from "@/plugins/gapi";

export default {
    mounted() {
        gapi.signin2.render("google-signin-button", {
            scope: "profile email",
            width: 240,
            height: 50,
            longtitle: true,
            theme: "dark",
            onsuccess: this.onSignIn,
            onfailure: this.onFailure
        });
    },
    methods: {
        onSignIn(user) {
            const profile = user.getBasicProfile();
            console.log("Logged in as: " + user.getBasicProfile().getName());
        },
        onFailure() {
            console.log(error);
        }
    }
};
</script>