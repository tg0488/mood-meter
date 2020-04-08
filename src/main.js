import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import firebase from 'firebase';
import store from './store/index'

Vue.config.productionTip = false;
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAJZG6oQR9eNXHzwHr2RXO_ur8mGkVkZjQ",
    authDomain: "insert-name-here-3dd28.firebaseapp.com",
    databaseURL: "https://insert-name-here-3dd28.firebaseio.com",
    projectId: "insert-name-here-3dd28",
    storageBucket: "insert-name-here-3dd28.appspot.com",
    messagingSenderId: "1088259086028",
    appId: "1:1088259086028:web:84bbcd51422fbd06121469",
    measurementId: "G-6REVBK8VDV"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

new Vue({
  store,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app');
