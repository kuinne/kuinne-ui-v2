import { createApp } from 'vue';
import { Theme } from '@kuinne/ui';
import App from './App.vue';
import 'virtual:uno.css';

const app = createApp(App);

app.use(Theme as any);

app.mount('#app');
