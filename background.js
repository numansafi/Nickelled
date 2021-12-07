// Ensure user is not signed in
let user_signed_in = false;

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.message === "is_user_signed_in") {
    sendResponse({
      message: "success",
      payload: user_signed_in,
    });
  } else if (request.message === "sign_out") {
    user_signed_in = false;
    chrome.storage.local.set({ signedIn: true });
    sendResponse({ message: "success" });
  } else if (request.message === "sign_in") {
    user_signed_in = true;
    chrome.storage.local.set({ signedIn: true });
    sendResponse({ message: "success" });
  }

  return true;
});
