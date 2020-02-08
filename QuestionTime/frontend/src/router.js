import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Question from "./views/Question.vue";
import QuestionEditor from "./views/QuestionEditor.vue";

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
    },
    {
      path: "/ask",
      name: "question-editor",
      component: QuestionEditor
    }
  ]
});
