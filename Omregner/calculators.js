//Normal Calculators
function convert(s, t, u, v) {
    var convFrom = bigDecimal.round($(u).find(":selected").val(), 35);
    var convTo = bigDecimal.round($(v).find(":selected").val(), 35);
    var valFrom = bigDecimal.round(document.getElementById(s).value, 35)
    var temp = bigDecimal.multiply(convFrom, valFrom);
    var temp2 = bigDecimal.divide(temp, convTo);
    document.getElementById(t).value = bigDecimal.round(temp2, 20);
}

//Area
function areaSquare() {
    document.getElementById("arSqOut").value = bigDecimal.multiply(document.getElementById("arSqIn").value, document.getElementById("arSqIn").value);
}

function areaRectangle() {
    document.getElementById("arReOut").value = bigDecimal.multiply(document.getElementById("arReInA").value, document.getElementById("arReInB").value);
}

function areaTriangle() {
    var temp = bigDecimal.multiply(document.getElementById("arTriHi").value, document.getElementById("arTriGr").value);
    document.getElementById("arTriOut").value = bigDecimal.divide(temp, 2);
}

function areaCircle() {
    console.log(document.getElementById("arCirIn").value);
    console.log($(".radDim").find(":selected").val());
    if ($(".radDim").find(":selected").val() == 1) {
        var temp = bigDecimal.multiply(document.getElementById("arCirIn").value, document.getElementById("arCirIn").value);
        document.getElementById("arCirOut").value = bigDecimal.multiply(Math.PI, temp);
    }
    if ($(".radDim").find(":selected").val() == 0.5) {
        var r = bigDecimal.divide(document.getElementById("arCirIn").value, 2);
        var temp = bigDecimal.multiply(r, r);
        document.getElementById("arCirOut").value = bigDecimal.multiply(Math.PI, temp);
    }
}

function areaDegLen(s, t) {
    if ($(".degLen").find(":selected").val() == 1) {
        document.getElementById(s).style.display = "table";
        document.getElementById(t).style.display = "none";
    } else if ($(".degLen").find(":selected").val() == 2) {
        document.getElementById(t).style.display = "table";
        document.getElementById(s).style.display = "none";
    } else {
        document.getElementById(s).style.display = "none";
        document.getElementById(t).style.display = "none";
    }
}

function areaParaSid() {
    document.getElementById("arParOut").value = bigDecimal.multiply(document.getElementById("arParSidGr").value, document.getElementById("arParSidHi").value);
}

function areaParAng() {
    var temp = bigDecimal.multiply(document.getElementById("arParAngAIn").value, document.getElementById("arParAngBIn").value);
    var temp2 = bigDecimalMath.sin(document.getElementById("arParAngIn").value)
    document.getElementById("arParOut").value = document.getElementById("arParAngAIn").value * document.getElementById("arParAngBIn").value * Math.abs(Math.sin(document.getElementById("arParAngIn").value * (Math.PI / 180)));
}

function diagAngCir() {
    if ($(".diagAngCir").find(":selected").val() == 1) {
        document.getElementById("rumDiagArea").style.display = "table";
        document.getElementById("rumAngArea").style.display = "none";
        document.getElementById("rumCirArea").style.display = "none";
    } else if ($(".diagAngCir").find(":selected").val() == 2) {
        document.getElementById("rumDiagArea").style.display = "none";
        document.getElementById("rumAngArea").style.display = "table";
        document.getElementById("rumCirArea").style.display = "none";
    } else if ($(".diagAngCir").find(":selected").val() == 3) {
        document.getElementById("rumDiagArea").style.display = "none";
        document.getElementById("rumAngArea").style.display = "none";
        document.getElementById("rumCirArea").style.display = "table";
    } else {
        document.getElementById("rumDiagArea").style.display = "none";
        document.getElementById("rumAngArea").style.display = "none";
        document.getElementById("rumCirArea").style.display = "none";
    }
}

function areaRumpDig() {
    var temp = bigDecimal.multiply(document.getElementById("arRumpDig1In").value, document.getElementById("arRumpDig2In").value);
    document.getElementById("arRumpOut").value = bigDecimal.divide(temp, 2);
}

function areaRumpAng() {
    document.getElementById("arRumpOut").value = Math.abs(Math.sin(document.getElementById("arRumpAngAIn").value * (Math.PI / 180))) * Math.pow(document.getElementById("arRumpAngSIn").value, 2);
}

function areaRumpCir() {
    var temp = bigDecimal.multiply(document.getElementById("arRumpCirSIn").value, document.getElementById("arRumpCirCIn").value);
    document.getElementById("arRumpOut").value = bigDecimal.multiply(temp, 2);
}

function areaTrapezium() {
    var temp = bigDecimal.add(document.getElementById("arTrap1In").value, document.getElementById("arTrap2In").value);
    var temp2 = bigDecimal.multiply(temp, document.getElementById("arTrapHIn").value);
    document.getElementById("arTrapOut").value = bigDecimal.divide(temp2, 2);
}

//Fuel Consumption
function calFuelCon() {
	var x = bigDecimal.divide(document.getElementById("fuelConLen").value, document.getElementById("fuelConLit").value);
	var y = bigDecimal.round(x,2);
	document.getElementById("fuelConOut").value = y + "km/l";
}


//Density
//Switch options
function switchOptionsDens() {
    var chWeFr = $(".densWeigFrom").find(":selected").val();
    var chVoFr = $(".densVolFrom").find(":selected").val();
    var chWeTo = $(".densWeigTo").find(":selected").val();
    var chVoTo = $(".densVolTo").find(":selected").val();
    $("li.li3 select.densWeigFrom").val(chWeTo);
    $("li.li3 select.densVolFrom").val(chVoTo);
    $("li.li4 select.densWeigTo").val(chWeFr);
    $("li.li4 select.densVolTo").val(chVoFr);
}
//Cal
function convertDens() {
    var convWeFr = $(".densWeigFrom").find(":selected").val();
    var convVoFr = $(".densVolFrom").find(":selected").val();
    var convWeTo = $(".densWeigTo").find(":selected").val();
    var convVoTo = $(".densVolTo").find(":selected").val();
    var constant1 = bigDecimal.divide(convWeFr, convVoFr);
    var constant2 = bigDecimal.divide(convWeTo, convVoTo);
    var temp = bigDecimal.multiply(document.getElementById("inputDens").value, constant1);
    document.getElementById("outputDens").value = bigDecimal.divide(temp, constant2);
}

//Volume Flow
//Switch options
function switchOptionsVolFlow() {
    var chWeFr = $(".volFlowVolFrom").find(":selected").val();
    var chVoFr = $(".volFlowTimeFrom").find(":selected").val();
    var chWeTo = $(".volFlowVolTo").find(":selected").val();
    var chVoTo = $(".volFlowTimeTo").find(":selected").val();
    $("li.li3 select.volFlowVolFrom").val(chWeTo);
    $("li.li3 select.volFlowTimeFrom").val(chVoTo);
    $("li.li4 select.volFlowVolTo").val(chWeFr);
    $("li.li4 select.volFlowTimeTo").val(chVoFr);
}
//Cal
function convertVolFlow() {
    var convFromV = bigDecimal.round($(".volFlowVolFrom").find(":selected").val(), 35);
    var convFromT = bigDecimal.round($(".volFlowTimeFrom").find(":selected").val(), 35);
    var convToV = bigDecimal.round($(".volFlowVolTo").find(":selected").val(), 35);
    var convToT = bigDecimal.round($(".volFlowTimeTo").find(":selected").val(), 35);
    var convVal = bigDecimal.round(document.getElementById("inputVolFlow").value, 35)
    var temp1 = bigDecimal.multiply(convVal, convFromV);
    var temp2 = bigDecimal.divide(temp1, convFromT);
    var temp3 = bigDecimal.multiply(temp2, convToT);
    var temp4 = bigDecimal.divide(temp3, convToV);
    document.getElementById("outputVolFlow").value = temp4;
}

//Temperature
/*
    1 = C
    2 = K
    3 = F
    4 = R
*/
function convertTemperature() {
    //Celsius
    if ($(".temperatureFrom").find(":selected").val() == 1) {
        //celsius
        if ($(".temperatureTo").find(":selected").val() == 1) {
            document.getElementById("outputTemperature").value = document.getElementById("inputTemperature").value;
        }
        //kelvin
        else if ($(".temperatureTo").find(":selected").val() == 2) {
            document.getElementById("outputTemperature").value = bigDecimal.add(document.getElementById("inputTemperature").value, 273.15);
        }
        //farhenheit
        else if ($(".temperatureTo").find(":selected").val() == 3) {
            var temp = bigDecimal.multiply(document.getElementById("inputTemperature").value, 1.8);
            document.getElementById("outputTemperature").value = bigDecimal.add(temp, 32);
        }
        //rankine
        else if ($(".temperatureTo").find(":selected").val() == 4) {
            var constant = bigDecimal.divide(9, 5);
            var temp = bigDecimal.add(document.getElementById("inputTemperature").value, 273.15);
            document.getElementById("outputTemperature").value = bigDecimal.multiply(temp, constant);
        }
    }
    //Kelvin
    else if ($(".temperatureFrom").find(":selected").val() == 2) {
        //celsius
        if ($(".temperatureTo").find(":selected").val() == 1) {
            document.getElementById("outputTemperature").value = bigDecimal.subtract(document.getElementById("inputTemperature").value, 273.15)
        }
        //kelvin
        else if ($(".temperatureTo").find(":selected").val() == 2) {
            document.getElementById("outputTemperature").value = document.getElementById("inputTemperature").value;
        }
        //farhenheit
        else if ($(".temperatureTo").find(":selected").val() == 3) {
            var constant = bigDecimal.divide(9, 5);
            var temp = bigDecimal.multiply(document.getElementById("inputTemperature").value, constant);
            document.getElementById("outputTemperature").value = bigDecimal.subtract(temp, 459.67);
        }
        //rankine
        else if ($(".temperatureTo").find(":selected").val() == 4) {
            var constant = bigDecimal.divide(9, 5);
            document.getElementById("outputTemperature").value = bigDecimal.multiply(document.getElementById("inputTemperature").value, constant);
        }
    }
    //Farhenheit
    else if ($(".temperatureFrom").find(":selected").val() == 3) {
        //celsius
        if ($(".temperatureTo").find(":selected").val() == 1) {
            var constant = bigDecimal.divide(5, 9);
            var temp = bigDecimal.subtract(document.getElementById("inputTemperature").value, 32);
            document.getElementById("outputTemperature").value = bigDecimal.multiply(temp, constant);
        }
        //kelvin
        else if ($(".temperatureTo").find(":selected").val() == 2) {
            var constant = bigDecimal.divide(5, 9);
            var temp = bigDecimal.add(document.getElementById("inputTemperature").value, 459.67);
            document.getElementById("outputTemperature").value = bigDecimal.multiply(temp, constant);
        }
        //farhenheit
        else if ($(".temperatureTo").find(":selected").val() == 3) {
            document.getElementById("outputTemperature").value = document.getElementById("inputTemperature").value;
        }
        //rankine
        else if ($(".temperatureTo").find(":selected").val() == 4) {
            document.getElementById("outputTemperature").value = bigDecimal.add(document.getElementById("inputTemperature").value, 459.67);
        }
    }
    //Rankine
    else if ($(".temperatureFrom").find(":selected").val() == 4) {
        //celsius
        if ($(".temperatureTo").find(":selected").val() == 1) {
            var constant = bigDecimal.divide(5, 9);
            var temp = bigDecimal.subtract(document.getElementById("inputTemperature").value, 491.67);
            document.getElementById("outputTemperature").value = bigDecimal.multiply(temp, constant);
        }
        //kelvin
        else if ($(".temperatureTo").find(":selected").val() == 2) {
            var constant = bigDecimal.divide(5, 9)
            document.getElementById("outputTemperature").value = bigDecimal.multiply(document.getElementById("inputTemperature").value, constant);
        }
        //farhenheit
        else if ($(".temperatureTo").find(":selected").val() == 3) {
            document.getElementById("outputTemperature").value = bigDecimal.subtract(document.getElementById("inputTemperature").value, 459.67);
        }
        //rankine
        else if ($(".temperatureTo").find(":selected").val() == 4) {
            document.getElementById("outputTemperature").value = document.getElementById("inputTemperature").value;
        }
    }
}
