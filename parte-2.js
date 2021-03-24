const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// 1
const addKeyValue = (object, key, value) => {
  object[key] = value;
  return object;
}
// console.log(addKeyValue(lesson2, 'turno', 'manhã'));

// 2
const listKeys = (object) => Object.keys(object);
// console.log(listKeys(lesson3));

// 3
const size = (object) => Object.keys(object).length;
// console.log(size(lesson2));

// 4
const listValues = (object) => Object.values(object);
// console.log(listValues(lesson3));

//5
lesson2['turno'] = 'noite;'
const allLessons = Object.assign({}, {lesson1}, {lesson2}, {lesson3});
// console.log(allLessons);

// 6
const numbeOfStudents = (object) => allLessons.lesson1.numeroEstudantes + allLessons.lesson2.numeroEstudantes + allLessons.lesson3.numeroEstudantes;
// console.log(numbeOfStudents(allLessons));

// 7
const getValueByNumber = (object, position) => Object.values(object)[position];
// console.log(getValueByNumber(lesson1, 0));

// 8
const verifyPair = (object, key, value) => {
  const entries = Object.entries(object);
  const search = [key, value];
  let boolean = false
  for (let entry of entries) {
    if (entry === search) {
      boolean = true;
    }
  }
  return boolean;
}
// console.log(verifyPair(lesson1, 'turno', 'manhã'));


const verifyPair2 = (object, key, value) => {
  const objectKeys = Object.keys(object);
  const objectValues = Object.values(object);
  const searchKey = objectKeys.indexOf(key);
  if (objectValues[searchKey] === value){
    return true;
  }
  return false;
}
// console.log(verifyPair2(lesson1, 'turno', 'manhã'));

// Bônus
