import { createApp } from "vue"
import { createRouter, createWebHistory } from "vue-router"
import "normalize.css"
import './scss/app.scss'
import routes from "./router/routes"
import App from "./App.vue"

/* Font Awesome Library
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCog } from "@fortawesome/free-solid-svg-icons";
library.add(faCog);
 */

const route = createRouter({
    history: createWebHistory(),
    routes,
})

createApp(App)
    .use(route)
    //.component("font-awesome-icon", FontAwesomeIcon)
    .mount("#app")
