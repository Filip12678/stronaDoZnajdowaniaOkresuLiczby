var fractionToDecimal = function(numerator, denominator) {
    if (denominator == 0) return "0";
    let negative = "";
    if (numerator * denominator < 0) negative = "-";

    numerator = Math.abs(numerator);
    denominator = Math.abs(denominator);

    let integer = Math.floor(numerator/denominator);
    let rest = numerator % denominator;
    let decimal = ".";
    let hash = {};
    while(rest!=0) {
        let curDecimal = Math.floor((rest * 10) / denominator)
        hash[rest] = decimal.length; // save the index
        rest = rest*10 % denominator;
        if (hash[rest] != null) {
            decimal = decimal.substring(0, hash[rest]) + "(" + decimal.substring(hash[rest]) + curDecimal + ")" 
            break;
        } else {
            decimal += ""+curDecimal
        }
    }
    return negative+integer+(decimal=="."?"":decimal);
};




function myFunction() {
	
	var licznik = parseFloat(document.getElementById('licznik').value);
	var mianownik = parseFloat(document.getElementById('mianownik').value);
	
	var okres = fractionToDecimal(licznik, mianownik);
	
	
	document.getElementById("okresUlamka").innerHTML = `= ${okres}`;
	
	//console.log(okres);
	
}