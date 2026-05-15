import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import { routes } from './routes'
import './assets/global.css'

export const createApp = ViteSSG(App, { routes })
