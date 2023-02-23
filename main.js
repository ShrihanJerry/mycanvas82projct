var mouseevent=""
canvas=document.getElementById("mycanvas")
color="black"
widthofline=1
ctx=canvas.getContext("2d")
var lastpositionofx, lastpositionofy
canvas.addEventListener("mousedown",my_mousedown)
function my_mousedown(e){
    mouseevent="mousedown"
    color=document.getElementById("color").value
    widthofline=document.getElementById("width").value
}
canvas.addEventListener("mousemove",my_mousemove)
function my_mousemove(e){
    currentpositionofmousex=e.clientX-canvas.offsetLeft
    currentpositionofmousey=e.clientY-canvas.offsetTop
    if (mouseevent=="mousedown") {
        ctx.beginPath()
        ctx.strokeStyle=color
        ctx.lineWidth=widthofline
        ctx.moveTo(lastpositionofx, lastpositionofy)
        ctx.arc(currentpositionofmousex, currentpositionofmousey, 10, 0, 2*Math.PI )
        ctx.stroke() 
    }
    lastpositionofx=currentpositionofmousex
    lastpositionofy=currentpositionofmousey
}
canvas.addEventListener("mouseleave", my_mouseleave)
function my_mouseleave(e){
    mouseevent="mouseleave"
}
canvas.addEventListener("mouseup", my_mouseup)
function my_mouseup(e){
    mouseevent="mouseup"
}
function clearcanvas(){
    ctx.clearRect(0,0,ctx.canvas.width, ctx.canvas.height)
}