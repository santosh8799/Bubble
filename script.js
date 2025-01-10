//isme ham eventlistionar ka use nahi kar sakte h for event 
// var bubbles = "";
// for(var i=1; i<99; i++){
//     var num = Math.floor(Math.random()*100);

//     var red = Math.floor(Math.random()*256);
//     var green = Math.floor(Math.random()*256);
//     var blue = Math.floor(Math.random()*256);

//     bubbles += `<div style="background-color: rgb( ${red},  ${green}, ${blue});" class="w-20 h-20 rounded-full bg-green-500 flex items-center justify-center text-2xl">${num}</div>`;
// }
// document.querySelector(".bubble").innerHTML=bubbles;

var bubbles ="";
for(var i = 1; i<99; i++){
    var num = Math.floor(Math.random()*100)  //yah hame iteger value deta h. 100 ke ander hi.
    var red = Math.floor(Math.random()*255)
    var green = Math.floor(Math.random()*255)
    var blue = Math.floor(Math.random()*255)
    // console.log(r, g, b)
    bubbles += `<div style = "background-color: rgb(${red}, ${green}, ${blue})" class="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center">
                <h1>${num}</h1>
            </div>`
}
document.querySelector(".bubble").innerHTML = bubbles;