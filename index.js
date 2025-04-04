var exitbutton = document.getElementById("exitbutton")
var close = document.getElementById("close")

exitbutton.addEventListener("click",function()
{
    close.remove()
})

var menubar = document.getElementById("menubar")
var sidebar = document.getElementById("sidebar")
var cancel = document.getElementById("cancel")

menubar.addEventListener("click",function()
{
    sidebar.style.left="0"
})

cancel.addEventListener("click",function()
{
    sidebar.style.left="-50%"
})

var blackheart = document.querySelectorAll(".blackheart")
var redheart = document.querySelectorAll(".redheart")

blackheart.forEach(function(blackheart,index)
{
    blackheart.addEventListener("click",function()
    {
        blackheart.style.display="none"
        redheart[index].style.display="block"
    })
})

redheart.forEach(function(redheart,index)
{
    redheart.addEventListener("click",function()
    {
        redheart.style.display="none"
        blackheart[index].style.display="block"
    })
})

var arrival = document.getElementById("new")
var most = document.getElementById("most")
var newarrival = document.getElementById("newarrival")
var mostwanted = document.getElementById("mostwanted")

arrival.addEventListener("click",function()
{
    newarrival.scrollIntoView({behavior:"smooth"})
})

most.addEventListener("click",function()
{
    mostwanted.scrollIntoView({behavior:"smooth"})
})

var arrival = document.getElementById("news")
var most = document.getElementById("mosts")
var newarrival = document.getElementById("newarrival")
var mostwanted = document.getElementById("mostwanted")

arrival.addEventListener("click",function()
{
    newarrival.scrollIntoView({behavior:"smooth"})
})

most.addEventListener("click",function()
{
    mostwanted.scrollIntoView({behavior:"smooth"})
})