

function result() {


    let tableNum = document.getElementById("tableNum").value
    let range = document.getElementById("range").value

    let empty = ""
    for (i = 1; i <= range; i++) {

        empty += tableNum + "x" + i + "=" + tableNum * i + "<br>"
        document.getElementById("displaydata").innerHTML = empty;
    }
}

function reload() {
    window.location.reload()
}