let a = Number(prompt("1 st Number"));

let b = Number(prompt("2 nd Number"));

let c = Number(prompt("3 rd Number"));

let GreatestNumber = (a>b &&a>c) ? a:(b>c)?b:c;

console.log(GreatestNumber);
