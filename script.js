var time = new Date();
document.getElementById("uur").innerHTML = time.getHours();
document.getElementById("minuten").innerHTML = time.getMinutes();
document.getElementById("seconden").innerHTML = time.getSeconds();

function myFunctionBereken() {
    let diameter = document.getElementById("diameter").value;
    let straal = (Math.PI * diameter).toFixed(2);
    let oppervlakte = (0.25 * Math.PI * Math.pow(diameter, 2)).toFixed(2);
    document.getElementById("uitkomst").innerHTML = "De omtrek van de cirkel is " + straal + "<br>De oppervlakte van de cirkel is " + oppervlakte;
}