setIdleTimeout(10000, function () {
  swal.fire({
    title: "Wow!",
    text: "Message!",
    type: "success",
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
