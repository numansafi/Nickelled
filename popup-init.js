// Check to see if user is signed in
function init() {
  chrome.runtime.sendMessage(
    { message: "is_user_signed_in" },
    function (response) {
      if (response.message === "success" && response.payload) {
        window.location.replace("./sign_out.html");
      }
    }
  );
}

init();
