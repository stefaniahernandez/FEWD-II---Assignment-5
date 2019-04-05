/*eslint-env browser*/

var $ = function (id) {
    "use strict";
    return window.document.getElementById(id);
};

/*
function init() {
    "use strict";
    document.getElementById("calculator").addEventListener("click", init {
        enter($("result"));
    });
}*/

function init() {
    "use strict";
    var test = window.document.getElementById("calculator");
    test.addEventListener("click", function () {
        enter($("result"));
    });
}

window.addEventListener("load", init);

function enter() {
    "use strict";
    document.getElementById("result");
}

function calculate() {
    "use strict";
    document.getElementById("result").addEventListener("click", calculate {
                                                       
                                                       })
}
