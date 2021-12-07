const firebaseConfig = {
  apiKey: "AIzaSyCItGWi4Q5Zn-cw06Spn86_7DE6rRVTtbE",
  authDomain: "nickelled-chrome-extension.firebaseapp.com",
  projectId: "nickelled-chrome-extension",
  storageBucket: "nickelled-chrome-extension.appspot.com",
  messagingSenderId: "189347627734",
  appId: "1:189347627734:web:3474b45ee3468c0757bf77",
};

firebase.initializeApp(firebaseConfig);

// Initialize the FirebaseUI Widget using Firebase.
const ui = new firebaseui.auth.AuthUI(firebase.auth());

const uiConfig = {
  callbacks: {
    signInSuccessWithAuthResult: function (authResult, redirectUrl) {
      chrome.runtime.sendMessage({ message: "sign_in" }, function (response) {
        if (response.message === "success") {
          window.location.replace("./sign_out.html");
        }
      });
      return false;
    },
    // uiShown: function () {
    //   document.getElementById("my_sign_in").style.display = "none";
    //   document.getElementById("wrapper").style.pointerEvents = "none";
    // },
  },
  signInFlow: "popup",
  // signInSuccessUrl: '<url-to-redirect-to-on-success>',
  signInOptions: [
    {
      provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      customParameters: {
        prompt: "select_account",
      },
    },
  ],
  // Terms of service url.
  // tosUrl: '<your-tos-url>',
  // Privacy policy url.
  // privacyPolicyUrl: '<your-privacy-policy-url>'
};

ui.start("#sign_in_options", uiConfig);
