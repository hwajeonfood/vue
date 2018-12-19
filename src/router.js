import Vue from "vue";
import VueRouter from "vue-router";
import MainNavbar from "./layout/MainNavbar.vue";
import MainFooter from "./layout/MainFooter.vue";
import Index from "./views/Index";
import Login from "./views/Login";
import StoreModal from "./views/components/StoreModal"

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: "/",
            name: "index",
            components: {
                header: MainNavbar,
                body: Index,
                footer: MainFooter
            },
            props: {
                header: { colorOnScroll: 400 },
                footer: { backgroundColor: "black" }
            },
            children: [
                {
                    path: "store/:id",
                    components: { store_modal: StoreModal },
                    props: {
                        header: { colorOnScroll: 400 },
                    }
                }
            ]
        },
        {
            path: "/login",
            name: "login",
            components: {
                header: MainNavbar,
                body: Login,
                footer: MainFooter
            },
            props: {
                header: { colorOnScroll: 400 }
            }
        },
    ],
    scrollBehavior: (to, from) => {
        if (to.hash) {
            return { selector: to.hash };
        } else {
            return from;
        }
    }
})

export default router;