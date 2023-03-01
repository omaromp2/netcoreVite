import { createApp } from 'vue/dist/vue.esm-bundler'
import Hello from './components/HelloComponent.vue'

createApp()
  .component('Hello', Hello)
  .mount('#app')
