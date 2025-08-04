// HACKER TERMINAL TYPING GREETING
const lines = [
  "🚀 New Age Developer | Ethical Hacker 👾",
  "• Python & Java Enthusiast",
  "• Web & Database Pro",
  "• Cybersecurity | PenTesting Addict",
  "Welcome to my digital playground!"
];
let j = 0, k = 0, isDeleting = false, txt = '', current = '';

function typeHackerGreeting() {
  const headerP = document.getElementById('typed-greeting');
  if (j < lines.length) {
    current = lines[j];
    txt = current.substring(0, k) + (k % 2 === 0 ? '_' : '');
    headerP.textContent = txt;
    if (!isDeleting && k < current.length) {
      k++;
      setTimeout(typeHackerGreeting, 44);
    } else if (isDeleting && k > 0) {
      k--;
      setTimeout(typeHackerGreeting, 22);
    } else if (!isDeleting && k === current.length) {
      isDeleting = true;
      setTimeout(typeHackerGreeting, 650);
    } else if (isDeleting && k === 0) {
      isDeleting = false;
      j++;
      setTimeout(typeHackerGreeting, 220);
    }
  }
}

window.onload = () => {
  typeHackerGreeting();
};

// Dynamic year
document.addEventListener('DOMContentLoaded', function () {
  const yearEl = document.getElementById('year');
  if(yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});
