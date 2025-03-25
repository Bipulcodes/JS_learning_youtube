let units = Number(prompt("Enter the number of Units you consumed for whole month"));
let costPerUnit = Number(prompt("Enter the cost per Unit"));
let daysInMonth = Number(prompt("Enter days in a Month"));

const MonthlyBill =units*daysInMonth*costPerUnit;
const AnnualBill = MonthlyBill*12;
const AnnualBillWithDiscount= AnnualBill-AnnualBill*0.2;
console.log(AnnualBillWithDiscount);
