

var eLem = document.getElementById("elem");

eLem.addEventListener("click", mathFunction, false);




function mathFunction() {

  const k = document.getElementById("k-in").value;
  const ro = document.getElementById("ro-in").value;
  const dp = document.getElementById("dp-in").value;
  const y = Math.sqrt(9.81 * ro * dp);
  const G = k * y

  document.getElementById("demo").innerHTML = "Расход воздуха G =" + " " + G + " " + "кг/с.";

  ;
}

