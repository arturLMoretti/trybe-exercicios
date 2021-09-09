const products = ['Arroz', 'Feijão', 'Alface', 'Tomate'];
const prices = [2.99, 3.99, 1.5, 2];

const productList = products.map((product,index) => {
  return {[`${product}`]: prices[index]};
})

console.log(productList);