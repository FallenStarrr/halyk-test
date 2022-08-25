import { createRouter, createWebHistory} from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import StartComp from './components/StartComp.vue'

export default createRouter({
  history: createWebHistory(),
        routes: [
          {path: '/', component: HelloWorld},
          {path: '/start', component: StartComp}
        ]
})