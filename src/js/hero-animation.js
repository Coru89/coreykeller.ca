const header = document.querySelector("#header");
const cursor = document.querySelector("#cursor");
const texts = ["Hey there, bud.", "What's up pal?", "How's it going?"];

let index = 0;
let i = 0;
let timeout;

const writeText = () => {
  if (i < texts[index].length) {
    header.textContent += texts[index].charAt(i);
    i++;
    timeout = setTimeout(writeText, 50);
  } else {
    timeout = setTimeout(backspace, 2000);
  }
};

const backspace = () => {
  if (header.textContent.length > 0) {
    header.textContent = header.textContent.slice(0, -1);
    timeout = setTimeout(backspace, 50);
  } else {
    index = (index + 1) % texts.length;
    header.textContent = "";
    i = 0;
    timeout = setTimeout(writeText, 1000);
  }
};

// Delay the start of the animation by 1 second (1000 milliseconds)
setTimeout(backspace, 1200);
