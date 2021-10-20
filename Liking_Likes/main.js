var liketop = 0
var likemid = 0
var likebot = 0
var counttop=9
var countmid=12
var countbot=9
function clickFunction(element) {
    if (element.name === "liketop") {
        liketop++
        console.log("top", liketop)
        updateDisplay1(++counttop+" like(s)")
    }
    if(element.name === "likemid") {
        likemid++
        console.log("Mid:", likemid)
        updateDisplay2(++countmid+" like(s)")
    }
    if(element.name === "likebot") {
        likebot++
        console.log("Bot:", likebot)
        updateDisplay3(++countbot+" like(s)")
    }
}
function updateDisplay1(val1) {
    document.getElementById("counttop").innerHTML = val1;
}
function updateDisplay2(val2) {
    document.getElementById("countmid").innerHTML = val2;
}
function updateDisplay3(val3) {
    document.getElementById("countbot").innerHTML = val3;
}