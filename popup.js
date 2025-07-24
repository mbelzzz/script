var target = [
"https://www.profitableratecpm.com/aw2prxvd?key=ffee8b30495403f4d74c09fb339f4bee",
"https://gofood.link/a/QjRJkXJ",
];
var maxclick=3;
function tampilkanUrl(){
  if(maxclick<=0)
    return;
  maxclick--;
  var url = target[Math.floor(Math.random()*target.length)];
  window.open(url);
}
document.body.addEventListener("click",tampilkanUrl);
