#!/usr/bin/env node

const readline = require("node:readline");
const { stdin: input, stdout: output } = require("node:process");


function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Создаем интерфейс для взаимодействия с пользователем через командную строку
const rl = readline.createInterface({ input, output });

// Загадываем случайное число в диапазоне от 0 до 100
const secretNumber = generateRandomNumber(0, 100);
console.log("Загадано число в диапазоне от 0 до 100");

// Функция для угадывания числа
function guessNumber() {
  rl.question("Введите число: ", (answer) => {
    const num = Number(answer);

    if (isNaN(num)) {
      console.log("Вы ввели не число");
      guessNumber();
    } else if (num === secretNumber) {
      console.log(`Вы угадали! Число было ${secretNumber}`);
      rl.close();
    } else if (num > secretNumber) {
      console.log(`Ваше число больше загаданного. Попробуйте еще раз.`);
      guessNumber();
    } else {
      console.log(`Ваше число меньше загаданного. Попробуйте еще раз.`);
      guessNumber();
    }
  });
}

guessNumber();