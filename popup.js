var target = [
"https://www.youtube.com/watch?v=Jf2INoGxgw4",
"https://youtube.com/shorts/axZJjrh1PJY",
];
var maxclick=1;
function tampilkanUrl(){
  if(maxclick<=0)
    return;
  maxclick--;
  var url = target[Math.floor(Math.random()*target.length)];
  window.open(url);
}
document.body.addEventListener("click",tampilkanUrl);
