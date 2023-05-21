import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyAVQunE2NtgDOD8MtW7Tg9JguBagKHEqlY",
  authDomain: "newssite-e7275.firebaseapp.com",
  databaseURL: "https://newssite-e7275-default-rtdb.firebaseio.com",
  projectId: "newssite-e7275",
  storageBucket: "newssite-e7275.appspot.com",
  messagingSenderId: "546783741638",
  appId: "1:546783741638:web:cd4761d3772701b7ee79c7",
  measurementId: "G-0EZEB5T2ZS"
}

// Инициализация приложения Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Экспорт экземпляра Firebase Realtime Database
export const database = firebase.database();
