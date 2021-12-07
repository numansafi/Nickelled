const firebaseConfig = {
  apiKey: "AIzaSyCItGWi4Q5Zn-cw06Spn86_7DE6rRVTtbE",
  authDomain: "nickelled-chrome-extension.firebaseapp.com",
  projectId: "nickelled-chrome-extension",
  storageBucket: "nickelled-chrome-extension.appspot.com",
  messagingSenderId: "189347627734",
  appId: "1:189347627734:web:3474b45ee3468c0757bf77",
};

const app = initializeApp(firebaseConfig);

// Initialize the FirebaseUI Widget using Firebase.
const ui = new firebaseui.auth.AuthUI(firebase.auth());

