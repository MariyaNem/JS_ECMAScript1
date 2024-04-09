// 1) Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора, найти минимальное число в массиве, решение задание должно состоять из одной строки

console.log(Math.min(...[1, 5, 7, 9]));



// 2) Напишите функцию createCounter, которая создает счетчик и возвращает объект с двумя методами: increment и decrement. Метод increment должен увеличивать значение счетчика на 1, а метод decrement должен уменьшать значение счетчика на 1. Значение счетчика должно быть доступно только через методы объекта, а не напрямую.


const createCounter = () => {
    let count = 0;
    return {
        increment: () => {
            count++;
        },
        decrement: () => {
            count--;
        },
        getCount: () => {
            return count;
        },
    };
}

const counter = createCounter();
counter.increment();
counter.increment();
counter.decrement();
console.log(counter.getCount());
