import Vue from 'vue'
import Router from 'vue-router'
import MSite from "../pages/MSite/MSite"
import Order from "../pages/Order/Order"
import Search from "../pages/Search/Search"
import Profile from "../pages/Profile/Profile"
import Login from "../pages/Login/Login"

Vue.use(Router)

export default new Router({
    mode: "history",
    routes: [{
            path: "/msite",
            name: "MSite",
            component: MSite,
            meta: {
                showFooter: true
            }
        },
        {
            path: "/search",
            name: "Search",
            component: Search,
            meta: {
                showFooter: true
            }

        },
        {
            path: "/order",
            name: "Order",
            component: Order,
            meta: {
                showFooter: true
            }

        },
        {
            path: "/profile",
            name: "Profile",
            component: Profile,
            meta: {
                showFooter: true
            }

        },
        {
            path: "/login",
            name: "Login",
            component: Login
        },
        {
            path: "/",
            redirect: "/msite"
        }
    ]
})