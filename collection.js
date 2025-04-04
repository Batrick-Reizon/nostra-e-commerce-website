var exitbutton = document.getElementById("exitbutton")
var close = document.getElementById("close")

exitbutton.addEventListener("click", function () {
    close.remove()
})

var menubar = document.getElementById("menubar")
var sidebar = document.getElementById("sidebar")
var cancel = document.getElementById("cancel")

menubar.addEventListener("click", function () {
    sidebar.style.left = "0"
})

cancel.addEventListener("click", function () {
    sidebar.style.left = "-50%"
})


var searchbox = document.getElementById("searchbox")
var product = document.querySelectorAll(".product")

searchbox.addEventListener("keyup", function (event) {
    var enteredvalue = event.target.value.toUpperCase()
    for (i = 0; i < product.length; i++) {
        var h1text = product[i].querySelector("h1").textContent.toUpperCase()
        if (h1text.indexOf(enteredvalue) < 0) {
            product[i].style.display = "none"
        }
        else {
            product[i].style.display = "block"
        }
    }
})

document.addEventListener("click", function () {
    var summer = document.getElementById("summercheck")
    var party = document.getElementById("partycheck")
    var beach = document.getElementById("beachcheck")

    var summerproduct = document.querySelectorAll(".summercheck")
    var partyproduct = document.querySelectorAll(".partycheck")
    var beachproduct = document.querySelectorAll(".beachcheck")

    function filteroccasion() 
    {
        if (!summer.checked && !party.checked && !beach.checked) 
        {
            summerproduct.forEach(item => item.style.display = "block")
            partyproduct.forEach(item => item.style.display = "block")
            beachproduct.forEach(item => item.style.display = "block")
            return
        }

        summerproduct.forEach(item => item.style.display = summer.checked ? "block" : "none")
        partyproduct.forEach(item => item.style.display = party.checked ? "block" : "none")
        beachproduct.forEach(item => item.style.display = beach.checked ? "block" : "none")
    }

    summer.addEventListener("change",filteroccasion)
    party.addEventListener("change",filteroccasion)
    beach.addEventListener("change",filteroccasion)

    filteroccasion()

})

document.addEventListener("click",function()
{
    var red = document.getElementById("red")
    var blue = document.getElementById("blue")
    var white = document.getElementById("white")
    var green = document.getElementById("green")

    var redcolor = document.querySelectorAll(".red")
    var bluecolor = document.querySelectorAll(".blue")
    var whitecolor = document.querySelectorAll(".white")
    var greencolor = document.querySelectorAll(".green")

    function filtercolors()
    {
        if (!red.checked && !blue.checked && !white.checked && !green.checked)
        {
            redcolor.forEach(item => item.style.display = "block")
            bluecolor.forEach(item => item.style.display = "block")
            whitecolor.forEach(item => item.style.display = "block")
            greencolor.forEach(item => item.style.display = "block")
            return
        }

        redcolor.forEach(item => item.style.display = red.checked ? "block" : "none")
        bluecolor.forEach(item => item.style.display = blue.checked ? "block" : "none")
        whitecolor.forEach(item => item.style.display = white.checked ? "block" : "none")
        greencolor.forEach(item => item.style.display = green.checked ? "block" : "none")
    }

    red.addEventListener("change",filtercolors)
    blue.addEventListener("change",filtercolors)
    white.addEventListener("change",filtercolors)
    green.addEventListener("change",filtercolors)

    filtercolors()

})

document.addEventListener("click",function()
{
    var news = document.getElementById("new")
    var olds = document.getElementById("old")

    var newmodel = document.querySelectorAll(".new")
    var oldmodel = document.querySelectorAll(".old")

    function filterarrivals()
    {
        if (!news.checked && !olds.checked)
        {
            newmodel.forEach(item => item.style.display = "block")
            oldmodel.forEach(item => item.style.display = "block")
            return
        }
        newmodel.forEach(item => item.style.display = news.checked ? "block" : "none")
        oldmodel.forEach(item => item.style.display = olds.checked ? "block" : "none")
    }
    news.addEventListener("change",filterarrivals)
    olds.addEventListener("change",filterarrivals)

    filterarrivals()
})