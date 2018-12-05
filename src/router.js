import Vue from "vue";
import VueRouter from "vue-router";
import Index from "./views/Index.vue";
import Landing from "./views/Landing.vue";
import Login from "./views/Login.vue";
import Profile from "./views/Profile.vue";
import MainNavbar from "./layout/MainNavbar.vue";
import MainFooter from "./layout/MainFooter.vue";

Vue.use(VueRouter);

const mRouter = new VueRouter({
    routes: [
        {
            path: '/store/:id', component: {
                template: `
      <div class="text-center my-3">
        <b-btn 
          v-b-tooltip.hover 
          @click="$router.push('/')"
          :title="'This will be modal for store : '+$route.params.id"> choice : {{$route.params.id}}, reset to click </b-btn>
      </div>
      ` }
        }
    ]
});

const router = new VueRouter({
    routes: [
        {
            path: "/",
            name: "index",
            components: { default: Index, header: MainNavbar, footer: MainFooter },
            props: {
                header: { colorOnScroll: 400 },
                footer: { backgroundColor: "black" }
            }
        },
        {
            path: "/landing",
            name: "landing",
            components: { default: Landing, header: MainNavbar, footer: MainFooter },
            props: {
                header: { colorOnScroll: 200 },
                footer: { backgroundColor: "black" }
            }
        },
        {
            path: "/login",
            name: "login",
            components: { default: Login, header: MainNavbar, footer: MainFooter },
            props: {
                header: { colorOnScroll: 400 }
            }
        },
        {
            path: "/profile",
            name: "profile",
            components: { default: Profile, header: MainNavbar, footer: MainFooter },
            props: {
                header: { colorOnScroll: 400 },
                footer: { backgroundColor: "black" }
            }
        }
    ],
    scrollBehavior: to => {
        if (to.hash) {
            return { selector: to.hash };
        } else {
            return { x: 0, y: 0 };
        }
    }
})

export default router;