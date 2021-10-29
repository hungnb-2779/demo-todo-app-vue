import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import FormInputBinding from "@/components/FormInputBinding";
import TransitionAnimation from "@/components/TransitionAnimation";
import Mixin from "@/components/Mixin";
import CustomDirective from "@/components/CustomDirective";
import Filter from "@/components/Filter";
import TodoApp from "@/components/app/index";
import ListUser from "@/components/app/ListUser";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "HelloWorld",
      component: HelloWorld
    },
    {
      path: "/form-input-binding",
      name: "FormInputBinding",
      component: FormInputBinding
    },
    {
      path: "/transition-animation",
      name: "TransitionAnimation",
      component: TransitionAnimation
    },
    {
      path: "/mixin",
      name: "Mixin",
      component: Mixin
    },
    {
      path: "/custom-directive",
      name: "CustomDirective",
      component: CustomDirective
    },
    {
      path: "/filter",
      name: "Filter",
      component: Filter
    }
    ,
    {
      path: "/todoApp",
      name: "TodoApp",
      component: TodoApp
    }
    ,
    {
      path: "/listUser",
      name: "ListUser",
      component: ListUser
    }
  ]
});
