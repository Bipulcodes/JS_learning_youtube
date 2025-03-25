let Current_Sig = prompt("Enter the current Signal");
if(Current_Sig==="Red"||Current_Sig==="red"){
    console.log("you can't move ahead");
}
else if(Current_Sig === "Green"||Current_Sig==="green"){
    console.log("you can move ahead");
}
else {
    console.log("Invalid Signal");
}