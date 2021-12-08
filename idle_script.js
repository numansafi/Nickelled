setIdleTimeout(10000, function () {
  Swal.fire({
    title: "Are you lost?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes",
    cancelButtonText: "No",
  }).then((result) => {
    if (result.isConfirmed) {
      const newURL = "https://help.nickelled.com";
      chrome.tabs.create({ url: newURL });
    }
  });
});

function setIdleTimeout(millis, onIdle) {
  let timeout = 0;
  startTimer();

  function startTimer() {
    timeout = setTimeout(onExpires, millis);
    document.addEventListener("mousemove", onActivity);
    document.addEventListener("keypress", onActivity);
  }

  function onExpires() {
    timeout = 0;
    onIdle();
  }

  function onActivity() {
    if (timeout) clearTimeout(timeout);
    //since the mouse is moving, we turn off our event hooks for 1 second
    document.removeEventListener("mousemove", onActivity);
    document.removeEventListener("keypress", onActivity);
    setTimeout(startTimer, 1000);
  }
}
