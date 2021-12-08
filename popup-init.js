// Check to see if user is signed in
function init() {
  chrome.runtime.sendMessage(
    { message: "is_user_signed_in" },
    function (response) {
      // response.payload will be true or false sent from background.js
      if (response.message === "success" && response.payload) {
        // if user is signed in, show them the sign out page
        window.location.replace("./sign_out.html");
      }
    }
  );
}

init();
