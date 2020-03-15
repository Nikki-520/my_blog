import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _c49df65e = () => interopDefault(import('..\\pages\\About\\index.vue' /* webpackChunkName: "pages_About_index" */))
const _d65b4756 = () => interopDefault(import('..\\pages\\catalogue\\index.vue' /* webpackChunkName: "pages_catalogue_index" */))
const _22579338 = () => interopDefault(import('..\\pages\\category\\index.vue' /* webpackChunkName: "pages_category_index" */))
const _e1d79514 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))
const _c5a6f4b6 = () => interopDefault(import('..\\pages\\_blog.vue' /* webpackChunkName: "pages__blog" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/About",
    component: _c49df65e,
    name: "About"
  }, {
    path: "/catalogue",
    component: _d65b4756,
    name: "catalogue"
  }, {
    path: "/category",
    component: _22579338,
    name: "category"
  }, {
    path: "/",
    component: _e1d79514,
    name: "index"
  }, {
    path: "/:blog",
    component: _c5a6f4b6,
    name: "blog"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
