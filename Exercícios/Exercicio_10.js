const custo = 10;
const venda = 30;
let unidadesVendidas = 1000;
if (custo < 0 || venda < 0 || unidadesVendidas < 0) {
  console.log("Erro! Valores de Custo, Venda, ou Unidades não podem ser menores que 0.")
}
let lucroBruto = ((venda - custo) * unidadesVendidas);
console.log("Lucro Bruto: "+lucroBruto);
let impostoUnitario = 0.2 * custo;
//console.log(impostoUnitario);
let lucroLiquido = lucroBruto - (impostoUnitario * unidadesVendidas);
console.log("Lucro líquido: "+lucroLiquido);