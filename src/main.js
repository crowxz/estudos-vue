import Vue from "vue";
import app from "./app.vue";
import router from "./routes/router";

Vue.config.production = false;
new Vue({
    router,
    render: (h) => h(app),
}).$mount("#app");