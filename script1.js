//isme ham eventlistionar ka use nahi kar sakte h for event 
var bubbles = "";
for(var i=1; i<99; i++){
    var num = Math.floor(Math.random()*100);

    var red = Math.floor(Math.random()*256);
    var green = Math.floor(Math.random()*256);
    var blue = Math.floor(Math.random()*256);

    bubbles += `<div style="background-color: rgb( ${red},  ${green}, ${blue});" class="w-20 h-20 rounded-full bg-green-500 flex items-center justify-center text-2xl">${num}</div>`;
}
document.querySelector(".bubble").innerHTML=bubbles;
