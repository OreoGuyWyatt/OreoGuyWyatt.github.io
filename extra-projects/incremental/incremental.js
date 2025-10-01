// function setCookie(name, value) {
    
//   document.cookie = `${name}=${value};`;
// };

// function getCookie(wname) {
//   let name = wname + "=";
//   let decodedCookie = decodeURIComponent(document.cookie);
//   let ca = decodedCookie.split(';');
//   for (let i = 0; i < ca.length; i++) {
//     let c = ca[i];
//     while (c.charAt(0) == ' ') {
//       c = c.substring(1);
//     }
//     if (c.indexOf(name) == 0) {
//       return c.substring(name.length, c.length);
//     }
//   }
//   return "";

// }
// function checkCookie() {
//   let ss = getCookie("currentNum");
//   if (ss === "") {
//     setCookie("currentNum", total);
//   }
// }
    var total = 100;
    var adder = 1;
    var mult = 1;
    var uhhhh = 0;
    var bought = false;
    
    var grandpa = 0;
    var grandpaA = 5;
    var firstTimeG = true;
    var grandpaVal = 1;
    show();
    
    function add(){
      uhhhh = adder * mult
      total += uhhhh;
      show();
    }
    function show(){
      document.getElementById("total").innerHTML = ("total: " + total);
      document.getElementById("addVal").innerHTML = ("adder: " + adder);
      document.getElementById("addMult").innerHTML = ("multiplier: " + mult);
      document.getElementById("grandpas").innerHTML = ("grandpas: " + grandpa);
      

    }
    function buy(up, value, cost){
      if (up === "add" && total >= parseInt(cost)) {
        adder += parseInt(value);
        bought = true;
        upgrade.style.display = 'none';
      }
      else if (up === "mult" && total >= parseInt(cost)){
        mult += parseInt(value);
        bought = true;
        multiplier.style.display = 'none';
      }
      else if(up === "grandpa" && total >= parseInt(cost)){
        grandpa += parseInt(value);
        bought = true;
        timingcheck ("grandpas", firstTimeG);
        firstTimeG = false;
      }
      else {
        alert("not enough money");
        bought = false;

      }
      if (bought === true){
        total -= parseInt(cost);
      }
      show();
      
      }

      function timingcheck(thing, firstTime){
        if (thing === "grandpas" && firstTime === true){

        const grandpaTime = setInterval(gPaTimer, 2000);
        }


      }
      function gPaTimer(){
        var gp = grandpaVal * grandpa;
        total += gp;
        show();
      }
    


