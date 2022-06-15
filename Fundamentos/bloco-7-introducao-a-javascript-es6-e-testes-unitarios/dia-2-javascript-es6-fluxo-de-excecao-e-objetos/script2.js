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

const addTurno = (object, key, value) => {
    object[key] = value
}
addTurno(lesson2, 'turno', 'noite')

const keysFunction = object => Object.keys(object)

const lengthFunction = object => Object.keys(object).length

const valuesOfObject = object => Object.values(object)

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 })

const numberStudents = () => allLessons.lesson1.numeroEstudantes + allLessons.lesson2.numeroEstudantes + allLessons.lesson3.numeroEstudantes

const getValueByNumber = (object, number) => {
    
}
