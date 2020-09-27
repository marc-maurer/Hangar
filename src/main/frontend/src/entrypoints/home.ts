import { createApp } from 'vue';
import $ from 'jquery';
import Home from '@/Home.vue';

$.ajaxSetup(ajaxSettings);

createApp(Home).mount('#home');
