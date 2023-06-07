import AOS from 'aos';
export function isWebp() {
   function testWebp(callback) {
      let webP = new Image();
      webP.onload = webP.onerror = function () {
         callback(webP.height == 2);
      };
      webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
   }
   testWebp(function (support) {
      let className = support === true ? 'webp' : 'no-webp';
      document.documentElement.classList.add(className)
   });
}
// This is the funtion you need to copy
const text = `Hello, I'm Lena`;
let index = 0;
const speed = 100; // Скорость печати (задержка между символами)

export function typeText() {
   if (index < text.length) {
      document.getElementById('typing-text').textContent += text.charAt(index);

      index++;
      setTimeout(typeText, speed);
   }
}
export function init() {
   AOS.init()
};

typeText();
// AOS.init();
init()



















