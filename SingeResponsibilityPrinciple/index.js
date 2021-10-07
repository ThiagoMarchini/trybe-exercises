/* Apoio para a função `getGradeLetter`, lembraremos disso mais a frente */
const GRADE_DICT = {
  9: 'A',
  8: 'B',
  7: 'C',
  6: 'D',
  1: 'E',
  };
  
  const gradeKeys = Object.keys(GRADE_DICT);
  
  /* Função menor para remover o uso excessivo de `if{}else`s */
  const getGradeLetter = (gradeNumber) => {
    let letterGrade = 'F';
  
    for (let i = 0; i < gradeKeys.length; i += 1) {
      if (gradeNumber >= gradeKeys[i]) {
        letterGrade = GRADE_DICT[gradeKeys[i]];
        break;
      }
    }
  
    return letterGrade;
  };
  
  /* Coletar notas */
  const getLetterGrades = ({ name, grade }) => ({
    name,
    grade,
    letterGrade: getGradeLetter(grade) });
  
  /* "Converter" */
  const percentageGradesIntoLetters = ({ name, disciplines, school }) => ({
    name,
    school,
    disciplines: disciplines.map(getLetterGrades) });
  
  /* Exemplo de execução */
  // ...
  
  /*
    Vamos exportar também nossa nova função de `Coletar notas` para testes
  */
  module.exports = {
    getGradeLetter,
    getLetterGrades,
    percentageGradesIntoLetters,
  };