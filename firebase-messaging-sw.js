
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDdJU15wu-o9vxBoxrEjVDuDobX5Laddz8",
    authDomain: "notificationidm.firebaseapp.com",
    projectId: "notificationidm",
    storageBucket: "notificationidm.appspot.com",
    messagingSenderId: "907785559629",
    appId: "1:907785559629:web:69a6786819eaa563318604",
    measurementId: "G-RNEH6ZGNW8"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
