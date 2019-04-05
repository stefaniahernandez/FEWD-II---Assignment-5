/*eslint-env browser*/

//STEP 1
/*
function firstButton() {
    "use strict";
    window.alert("I have been clicked.");
}
firstButton();
*/
//STEP 2
/*
var secondButton = document.getElementById("button2");
secondButton.onclick = function () {
    "use strict";
    window.alert("I have been clicked.");
};
*/
//STEP 3
/*
function thirdButton() {
    "use strict";
    document.getElementById("button3").addEventListener("click", thirdButton);
    window.alert("I have been clicked.");
};
*/
//STEP 4
/*
function thirdButton() {
    "use strict";
    document.getElementById("button3").addEventListener("click", thirdButton);
    window.alert("I have been clicked.");
};
*/
//STEP 5
/*
See HTML 
*/
//STEP 6
/*
function google() {
    "use strict";
    document.getElementById("redirect");
    window.alert("Whoops, this link is broken!");
    event.preventDefault();
};
*/
//STEP 7
/*
window.document.getElementById("button4").addEventListener("click", function (e) {
    window.document.getElementById("button4").disable;
    var textType = window.document.getElementById("textBox");
    window.alert(textType);
});
*/
//STEP 8
access.addEventListener("click", function () {
    var output = window.opener.document.getElementById("connect");
})

function popUp() {
    "use strct";
    var button5 = window.document.getElementById("button5");
    button5.addEventListener("click", function () {
        window.open("newpage.html", "", "width=300", "height=300");
        button5.addEventListener("load", function () {
            window.resizeTo(500, 300);
        });
    });
}

window.addEventListener("load", popUp)
//STEP 9

//STEP 10
