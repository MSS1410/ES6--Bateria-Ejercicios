//7.1 Dado el siguiente array, haz una suma de todos las notas de los examenes de
//los alumnos usando la función .reduce().

const exams = [
  { name: 'Yuyu Cabeza Crack', score: 5 },
  { name: 'Maria Aranda Jimenez', score: 1 },
  { name: 'Cristóbal Martínez Lorenzo', score: 6 },
  { name: 'Mercedez Regrera Brito', score: 7 },
  { name: 'Pamela Anderson', score: 3 },
  { name: 'Enrique Perez Lijó', score: 6 },
  { name: 'Pedro Benitez Pacheco', score: 8 },
  { name: 'Ayumi Hamasaki', score: 4 },
  { name: 'Robert Kiyosaki', score: 2 },
  { name: 'Keanu Reeves', score: 10 }
]

const sumaNotas = exams.reduce((acc, exam) => acc + exam.score, 0)

//7.2 Dado el mismo array, haz una suma de todos las notas de los examenes de los
//alumnos que esten aprobados usando la función .reduce().

// condición ? valor_si_verdadero : valor_si_falso

const sumaAprobados = exams.reduce((acc, exam) => {
  if (exam.score >= 5) {
    return acc + exam.score
  } else {
    return acc
  }
}, 0)

//7.3 Dado el mismo array, haz la media de las notas de todos los examenes .reduce().

const suma2Notas = exams.reduce((acc, exam) => acc + exam.score, 0)
const mediaNotas = suma2Notas / exam.lenght
