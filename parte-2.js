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
console.log(allLessons);