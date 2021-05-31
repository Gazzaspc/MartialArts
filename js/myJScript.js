////Javascript in here

function resetBlocker() {
    var myBlocker = document.getElementsByClassName("blocker");
    var myHeader = document.getElementById("header");

    for (x of myBlocker) {
        x.style.height = myHeader.offsetHeight + "px";
        //alert("1 " + x.style.height);
        //alert("2 " + myHeader.offsetHeight);
        /*document.getElementById("pSize").innerHTML = myHeader.offsetHeight + " x = " + x.style.height;*/
    }
}

resetBlocker();
window.onresize = resetBlocker;
