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

populateSelect();

// function validateDate() {
//   const inputDate = document.getElementById('start-date').value;
//   const dateArray = inputDate.split('/');
//   if (dateArray[0] < 1 || dateArray[0] > 31) {
//     alert("o dia deve estar entre 1 e 31")
//   }
//   if (dateArray[1] < 1 || dateArray[1] > 12) {
//     alert("o mês deve estar entre 1 e 12")
//   }
//   if (dateArray[2] < 0) {
//     alert("o ano não pode ser negativo")
//   }
// }

function createDivContent() {
  const parent = document.getElementById('abstract');
  const inputs = document.querySelectorAll('input');
  for (let index = 0; index < inputs.length; index += 1) {
    if (inputs[index].type === "radio" && inputs[index].checked) {
      let paragraph = document.createElement('p');
      paragraph.innerText = `${inputs[index].id}: ${inputs[index].value} checked`;
      parent.appendChild(paragraph);
    } else if (inputs[index].type !== "radio") {
      let paragraph = document.createElement('p');
      paragraph.innerText = `${inputs[index].id}: ${inputs[index].value}`;
      parent.appendChild(paragraph);
    }
    console.log(inputs[index]);
  }
  const select = document.querySelector('select');
  paragraph = document.createElement('p');
  paragraph.innerText = `Estado: ${select.value}`;
  parent.appendChild(paragraph);
  const textarea = document.querySelector('textarea');
  paragraph = document.createElement('p');
  paragraph.innerText = `Resumo do currículum: ${textarea.value}`;
  parent.appendChild(paragraph);
  console.log(inputs);
}

document.getElementById('start-date').DatePickerX.init({
  mondayFirst: true,
  format: 'dd/mm/yyyy',
  minDate: new Date(1800, 01, 01),
  maxDate: new Date(),
  weekDayLabels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'],
  shortMonthLabels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
  singleMonthLabels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
  todayButtonLabel: 'Hoje',
  clearButtonLabel: 'Apagar',
  titleFormatDay: 'dd de MM de yyyy',
  titleFormatMonth: 'MM yyyy',
  titleFormatYear: 'yyyy'
});

// Bootstrap validation
(function () {
  'use strict'
  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')
  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
        form.classList.add('was-validated')
      }, false)
    })
});


document.getElementById("submit").addEventListener("click", function(event){
  createDivContent();
});
