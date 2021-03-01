let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
};

console.log("Bem-vinda, " + info.personagem);

info["recorrente"] = "sim";
console.log(info);

for (let key in info) {
  console.log(key);
}

for (let key in info) {
  console.log(info[key]);
}

let info2 = {
  personagem: "Tio Patinhas",
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: "O último MacPatinhas", 
  recorrente: "Sim"
}

for (let key in info) {
  for (let key2 in info2){
    if (key == key2 && key != "recorrente"){
      console.log(info[key] + " e " + info2[key2]);
    }
    else if (key == key2 && key2 == "recorrente") {
      console.log("Ambos recorrentes");
    }
  }
}
