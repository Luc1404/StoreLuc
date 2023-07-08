function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    let arrar = url.split("search=");
    return arrar[1]
}
var textSearch = getParameterByName()

function clickItem1() {

    if (textSearch === "nike") {
        window.location = "/detail.html?id=" + 1
    } else if (textSearch === "puma") {
        window.location = "/detail.html?id=" + 23
    } else if (textSearch === "adidas") {
        window.location = "/detail.html?id=" + 15
    }
}
function clickItem2() {

    if (textSearch === "nike") {
        window.location = "/detail.html?id=" + 2
    } else if (textSearch === "puma") {
        window.location = "/detail.html?id=" + 24
    } else if (textSearch === "adidas") {
        window.location = "/detail.html?id=" + 16
    }
}
function clickItem4() {

    if (textSearch === "nike") {
        window.location = "/detail.html?id=" + 4
    } else if (textSearch === "puma") {
        window.location = "/detail.html?id=" + 25
    } else if (textSearch === "adidas") {
        window.location = "/detail.html?id=" + 17
    }
}
function clickItem5() {

    if (textSearch === "nike") {
        window.location = "/detail.html?id=" + 5
    } else if (textSearch === "puma") {
        window.location = "/detail.html?id=" + 26
    } else if (textSearch === "adidas") {
        window.location = "/detail.html?id=" + 18
    }
}
function clickItem6() {

    if (textSearch === "nike") {
        window.location = "/detail.html?id=" + 6
    } else if (textSearch === "puma") {
        window.location = "/detail.html?id=" + 27
    } else if (textSearch === "adidas") {
        window.location = "/detail.html?id=" + 19
    }
}
function clickItem7() {

    if (textSearch === "nike") {
        window.location = "/detail.html?id=" + 7
    } else if (textSearch === "puma") {
        window.location = "/detail.html?id=" + 28
    } else if (textSearch === "adidas") {
        window.location = "/detail.html?id=" + 20
    }
}

if (textSearch === "nike") {
    var item1 = localStorage.getItem(1)
    item1 = JSON.parse(item1)
    document.getElementById("nameItem1").innerHTML = item1.name
    document.getElementById("price1Item1").innerHTML = item1.price1
    document.getElementById("price2Item1").innerHTML = item1.price2
    document.getElementById("imageItem1").src = item1.image
    // var onlick1 = document.getElementById("imageItem1")
    // onlick1.addEventListener("click", clickItem(1) );


    var item2 = localStorage.getItem(2)
    item2 = JSON.parse(item2)
    document.getElementById("nameItem2").innerHTML = item2.name
    document.getElementById("price1Item2").innerHTML = item2.price1
    document.getElementById("price2Item2").innerHTML = item2.price2
    document.getElementById("imageItem2").src = item2.image

    var item4 = localStorage.getItem(4)
    item4 = JSON.parse(item4)
    document.getElementById("nameItem4").innerHTML = item4.name
    document.getElementById("price1Item4").innerHTML = item4.price1
    document.getElementById("price2Item4").innerHTML = item4.price2
    document.getElementById("imageItem4").src = item4.image

    var item5 = localStorage.getItem(5)
    item5 = JSON.parse(item5)
    document.getElementById("nameItem5").innerHTML = item5.name
    document.getElementById("price1Item5").innerHTML = item5.price1
    document.getElementById("price2Item5").innerHTML = item5.price2
    document.getElementById("imageItem5").src = item5.image

    var item6 = localStorage.getItem(6)
    item6 = JSON.parse(item6)
    document.getElementById("nameItem6").innerHTML = item6.name
    document.getElementById("price1Item6").innerHTML = item6.price1
    document.getElementById("price2Item6").innerHTML = item6.price2
    document.getElementById("imageItem6").src = item6.image

    var item7 = localStorage.getItem(7)
    item7 = JSON.parse(item7)
    document.getElementById("nameItem7").innerHTML = item7.name
    document.getElementById("price1Item7").innerHTML = item7.price1
    document.getElementById("price2Item7").innerHTML = item7.price2
    document.getElementById("imageItem7").src = item7.image

}
else if (textSearch === "puma") {
    var item23 = localStorage.getItem(23)
    item23 = JSON.parse(item23)
    document.getElementById("nameItem1").innerHTML = item23.name // Chu y ID
    document.getElementById("price1Item1").innerHTML = item23.price1
    document.getElementById("price2Item1").innerHTML = item23.price2
    document.getElementById("imageItem1").src = item23.image

    var item24 = localStorage.getItem(24)
    item24 = JSON.parse(item24)
    document.getElementById("nameItem2").innerHTML = item24.name
    document.getElementById("price1Item2").innerHTML = item24.price1
    document.getElementById("price2Item2").innerHTML = item24.price2
    document.getElementById("imageItem2").src = item24.image

    var item25 = localStorage.getItem(25)
    item25 = JSON.parse(item25)
    document.getElementById("nameItem4").innerHTML = item25.name
    document.getElementById("price1Item4").innerHTML = item25.price1
    document.getElementById("price2Item4").innerHTML = item25.price2
    document.getElementById("imageItem4").src = item25.image

    var item26 = localStorage.getItem(26)
    item26 = JSON.parse(item26)
    document.getElementById("nameItem5").innerHTML = item26.name
    document.getElementById("price1Item5").innerHTML = item26.price1
    document.getElementById("price2Item5").innerHTML = item26.price2
    document.getElementById("imageItem5").src = item26.image


    var item27 = localStorage.getItem(27)
    item27 = JSON.parse(item27)
    document.getElementById("nameItem6").innerHTML = item27.name
    document.getElementById("price1Item6").innerHTML = item27.price1
    document.getElementById("price2Item6").innerHTML = item27.price2
    document.getElementById("imageItem6").src = item27.image

    var item28 = localStorage.getItem(28)
    item28 = JSON.parse(item28)
    document.getElementById("nameItem7").innerHTML = item28.name
    document.getElementById("price1Item7").innerHTML = item28.price1
    document.getElementById("price2Item7").innerHTML = item28.price2
    document.getElementById("imageItem7").src = item28.image

}
else if (textSearch === "adidas") {
    var item15 = localStorage.getItem(15)
    item15 = JSON.parse(item15)
    document.getElementById("nameItem1").innerHTML = item15.name
    document.getElementById("price1Item1").innerHTML = item15.price1
    document.getElementById("price2Item1").innerHTML = item15.price2
    document.getElementById("imageItem1").src = item15.image

    var item16 = localStorage.getItem(16)
    item16 = JSON.parse(item16)
    document.getElementById("nameItem2").innerHTML = item16.name
    document.getElementById("price1Item2").innerHTML = item16.price1
    document.getElementById("price2Item2").innerHTML = item16.price2
    document.getElementById("imageItem2").src = item16.image

    var item17 = localStorage.getItem(17)
    item17 = JSON.parse(item17)
    document.getElementById("nameItem4").innerHTML = item17.name
    document.getElementById("price1Item4").innerHTML = item17.price1
    document.getElementById("price2Item4").innerHTML = item17.price2
    document.getElementById("imageItem4").src = item17.image

    var item18 = localStorage.getItem(18)
    item18 = JSON.parse(item18)
    document.getElementById("nameItem5").innerHTML = item18.name
    document.getElementById("price1Item5").innerHTML = item18.price1
    document.getElementById("price2Item5").innerHTML = item18.price2
    document.getElementById("imageItem5").src = item18.image

    var item19 = localStorage.getItem(19)
    item19 = JSON.parse(item19)
    document.getElementById("nameItem6").innerHTML = item19.name
    document.getElementById("price1Item6").innerHTML = item19.price1
    document.getElementById("price2Item6").innerHTML = item19.price2
    document.getElementById("imageItem6").src = item19.image

    var item20 = localStorage.getItem(20)
    item20 = JSON.parse(item20)
    document.getElementById("nameItem7").innerHTML = item20.name
    document.getElementById("price1Item7").innerHTML = item20.price1
    document.getElementById("price2Item7").innerHTML = item20.price2
    document.getElementById("imageItem7").src = item20.image

}