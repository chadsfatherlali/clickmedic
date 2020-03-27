import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/storage'
import 'firebase/firebase-firestore'
import Vue from 'vue'

let firebaseApp

if (!firebase.apps.length) {
  const firebaseConfig = {
    apiKey: "AIzaSyCCaczpRHd4fwPvpYBtVt2ooJzN055P0KQ",
    authDomain: "clickmedic-ecuador.firebaseapp.com",
    databaseURL: "https://clickmedic-ecuador.firebaseio.com",
    projectId: "clickmedic-ecuador",
    storageBucket: "clickmedic-ecuador.appspot.com",
    messagingSenderId: "941604872608",
    appId: "1:941604872608:web:5ba57312ea85d642b844c5",
    measurementId: "G-V73663HBC9"
  }

  firebaseApp = firebase.initializeApp(firebaseConfig)
}

else {
  firebaseApp = firebase.app();
}

declare module 'vue/types/vue' {
  interface Vue {
    $firebase(): any
  }
}
  
Vue.prototype.$firebase = firebase
