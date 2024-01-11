const { generateUniqueId } = require('../helpers/script.js');

exports.initialTodoTask = [
  { id: generateUniqueId(), text: 'Задача 1', completed: false },
  { id: generateUniqueId(), text: 'Задача 2', completed: true },
  { id: generateUniqueId(), text: 'Задача 3', completed: false },
  { id: generateUniqueId(), text: 'Задача 4', completed: true },
  { id: generateUniqueId(), text: 'Задача 5', completed: true },
  { id: generateUniqueId(), text: 'Задача 6', completed: true },
  { id: generateUniqueId(), text: 'Задача 7', completed: true },
];