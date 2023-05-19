const { body } = document;

function changeBackground(number) {
  let prevBackground = body.className;
  // reset background
  body.className = "";
  body.className = "";

  switch (number) {
    case 1:
      prevBackground === "background-1"
        ? false
        : body.classList.add("background-1");

      break;
    case 2:
      prevBackground === "background-2"
        ? false
        : body.classList.add("background-2");
      break;
    case 3:
      prevBackground === "background-3"
        ? false
        : body.classList.add("background-3");
      break;
  }
}
