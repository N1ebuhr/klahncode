function openCal(s) {
    if (document.getElementById("closeCal").value == "") {
        document.getElementById(s).style.display = "block";
        document.getElementById("closeCal").value = document.getElementById(s).id;
    } else {
        document.getElementById(document.getElementById("closeCal").value).style.display = "none";
        document.getElementById(s).style.display = "block";
        document.getElementById("closeCal").value = document.getElementById(s).id;
    }
}

function switchOptions(s, t) {
    var chFr = $(s).find(":selected").val();
    var chTo = $(t).find(":selected").val();
    $("li.li3 select").val(chTo);
    $("li.li4 select").val(chFr);
}
