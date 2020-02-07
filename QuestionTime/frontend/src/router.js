import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Question from "./views/Question.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/question/:slug",
      name: "question",
      component: Question,
      props: true
    }
  ]
});
