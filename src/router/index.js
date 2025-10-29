import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BeforeMeal from '../views/BeforeMeal.vue'
import TableBasics from '../views/TableBasics.vue'
import OrderingAlcohol from '../views/OrderingAlcohol.vue'
import ConversationNetworking from '../views/ConversationNetworking.vue'
import PayingFollowup from '../views/PayingFollowup.vue'
import Survey from '../views/Survey.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/before-meal', component: BeforeMeal },
  { path: '/table-basics', component: TableBasics },
  { path: '/ordering-alcohol', component: OrderingAlcohol },
  { path: '/conversation-networking', component: ConversationNetworking },
  { path: '/paying-followup', component: PayingFollowup },
  { path: '/survey', component: Survey },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

// Handle 404s for GitHub Pages
router.beforeEach((to, from, next) => {
  if (to.matched.length === 0) {
    next({ path: '/' })
  } else {
    next()
  }
})

export default router