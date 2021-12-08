// Ensure user is not signed in
let user_signed_in = false;

// function init() {
//   chrome.storage.local.get(["user_signed_in"], function (result) {
//     if (result.user_signed_in === true) {
//       console.log(`user signed in`);
//     } else {
//       console.log(`user not signed in`);
//     }
//   });
// }

// init();

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.message === "is_user_signed_in") {
    sendResponse({
      message: "success",
      payload: user_signed_in,
    });
  } else if (request.message === "sign_out") {
    user_signed_in = false;
    chrome.storage.local.set({ user_signed_in: true });
    sendResponse({ message: "success" });
  } else if (request.message === "sign_in") {
    user_signed_in = true;
    chrome.storage.local.set({ user_signed_in: true });
    sendResponse({ message: "success" });
  }

  return true;
});
