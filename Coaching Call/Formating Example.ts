// // Function with inconsistent formatting
// function calctax(price){
//     return price*0.15;
// }

// let products2 = [
//   { name: "Product 1", price: 100 },
//   { name: "Product 2", price: 200 },
// ];

// for (let i = 0; i < products2.length; i++) {
//   let tax = calctax(products2[i].price);
//   let total = products2[i].price + tax;
//   console.log("Total for " + products2[i].name + ": $" + total);
// }























// // Consistently formatted utility function
// export const calculateTax = (price: number, rate: number = 0.15): number => {
//   return price * rate;
// };

// // Products array
// const products = [
//   { name: "Product 1", price: 100 },
//   { name: "Product 2", price: 200 },
// ];

// // Reusable function to calculate totals
// export const calculateTotal = (product: { name: string; price: number }) => {
//   const tax = calculateTax(product.price);
//   const total = product.price + tax;
//   console.log(`Total for ${product.name}: $${total.toFixed(2)}`);
// };

// // Iterate over products with reusable function
// products.forEach(calculateTotal);
















// // // cart.js
// // function calculateDiscount(price, discountType) {
// //   if (discountType === "percentage") {
// //     return price * 0.1; // 10% discount
// //   } else if (discountType === "fixed") {
// //     return 10; // $10 discount
// //   } else {
// //     return 0; // No discount
// //   }
// // }

// // const itemPrice = 100;
// // const discount = calculateDiscount(itemPrice, "percentage");
// // console.log("Discount:", discount);








































// // utils/discount.js
// export function calculateDiscount(price, discountType, discountValue = 10) {
//   switch (discountType) {
//     case "percentage":
//       return price * (discountValue / 100); // e.g., 10% discount
//     case "fixed":
//       return discountValue; // e.g., $10 discount
//     default:
//       return 0; // No discount
//   }
// }


// // cart.js
// import { calculateDiscount } from "./utils/discount";

// const itemPrice = 100;
// const discount = calculateDiscount(itemPrice, "percentage", 15); // 15% discount
// console.log("Discount:", discount);

// // checkout.js
// import { calculateDiscount } from "./utils/discount";

// const orderTotal = 250;
// const discount = calculateDiscount(orderTotal, "fixed", 20); // $20 discount
// console.log("Discount:", discount);
