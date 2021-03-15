const states = {
  AC: 'Acre',
  AL: 'Alagoas',
  AP: 'Amapá',
  AM: 'Amazonas',
  BA: 'Bahia',
  CE: 'Ceará',
  DF: 'Distrito Federal',
  ES: 'Espírito Santo',
  GO: 'Goiás',
  MA: 'Maranhão',
  MT: 'Mato Grosso',
  MS: 'Mato Grosso do Sul',
  MG: 'Minas Gerais',
  PA: 'Pará',
  PB: 'Paraíba',
  PR: 'Paraná',
  PE: 'Pernambuco',
  PI: 'Piauí',
  RJ: 'Rio de Janeiro',
  RN: 'Rio Grande do Norte',
  RS: 'Rio Grande do Sul',
  RO: 'Rondônia',
  RR: 'Roraima',
  SC: 'Santa Catarina',
  SP: 'São Paulo',
  SE: 'Sergipe',
  TO: 'Tocantins'
}


function populateSelect() {
  const select = document.getElementById('state');
  for (let key in states) {
    const option = document.createElement('option');
    option.text = states[key];
    option.value = key;
    select.appendChild(option);
  }
}

function validateDate() {
  const inputDate = document.getElementById('start-date').value;
  const dateArray = inputDate.split('/');
  if (dateArray[0] < 1 || dateArray[0] > 31) {
    alert("o dia deve estar entre 1 e 31")
  }
  if (dateArray[1] < 1 || dateArray[1] > 12) {
    alert("o mês deve estar entre 1 e 12")
  }
  if (dateArray[2] < 0) {
    alert("o ano não pode ser negativo")
  }
}

populateSelect();

document.getElementById("submit").addEventListener("click", function(event){
  event.preventDefault()
  if (document.getElementById('start-date').value) {
    validateDate();
  }
});
