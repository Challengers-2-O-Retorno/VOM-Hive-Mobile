
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBxsiP9LeTVzFPsbeIgx8-5noD9XSjnqOI",
  authDomain: "hive-760a5.firebaseapp.com",
  projectId: "hive-760a5",
  storageBucket: "hive-760a5.appspot.com",
  messagingSenderId: "722867016046",
  appId: "1:722867016046:web:93a93642ff3cfa348bb17f",
  measurementId: "G-X8LWRDHVVN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);