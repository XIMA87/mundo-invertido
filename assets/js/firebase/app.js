  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDwru_afEyY3eNjsMp9Uj7hwD97nDAdVOg",
    authDomain: "mundo-invertido-3b39d.firebaseapp.com",
    projectId: "mundo-invertido-3b39d",
    storageBucket: "mundo-invertido-3b39d.appspot.com",
    messagingSenderId: "412369454000",
    appId: "1:412369454000:web:ee934012c8db71186f0c75",
    measurementId: "G-S1LQWVKLQV"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  export default app;