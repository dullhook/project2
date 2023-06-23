// let userconfirmG
// let userconfirmS
// let userconfirmE
// let N0 = 0
// let N1 = 100
// alert('загадай число от 0 до 100')
// do { userconfirmG
// } while(N0!=N1)

// var mainUser = {
//     name: "John",
//     age: 30,
//     work: {
//         salari: 100
//     }
// } as any

// var clone = {} as any
// * clone = {...mainUser, work: {...mainUser.work}}

// for (let key in mainUser) {
//  clone[key] = mainUser[key]
// }

// clone = Object.assign({}, mainUser, {work: {...mainUser.work}})

// clone = JSON.parse(JSON.stringify(mainUser))

// clone = structuredClone(mainUser)



// console.log(mainUser.name)
// console.log(clone.name)
// console.log(clone.work.salari)

// стрелочные функции не имеют своего this

//  const arrow = () => {
//      console.log(this)
//  }
//  arrow()


// let guestlist = `Guests:
// * John
// * Mary
// * Jack
// `
// console.log(guestlist)


// console.log(`Hello\n there`.length)

// let str = `Hello`
// console.log(str.charAt(0)) or str[0]
// console.log(str.charAt(-1)) 

// for (let char of `Hello`) {
//     console.log(char)
// }


// let str = `Hi`
// str[0] = `h` // только чтение
// console.log(str[0]) // не сработает

// let str = `Helllotherexd`
// str = `h` + str[0]
//   console.log(str) // hh

// str = str[0].toLowerCase() + str.slice(1)
// console.log(str) // helllo

// str = str[0].toLowerCase() + str.slice(1, 8) + str[8].toUpperCase() + str.slice(9)
// console.log(str) // helllothErexd

// * Подстрока
// первый метод str.indexOf(substr, pos)

// let str = `Widget with id`

// console.log(str.indexOf(`Widget`))
// console.log(str.indexOf(`Widget with`))
// console.log(str.indexOf(`with`))
// console.log(str.indexOf(`id`))
// console.log(str.indexOf(`with id`))
// console.log(str.indexOf(`d`))

// let index = 0
// while (true) {
//     index = str.indexOf(`id`, index)
//     if (index !=-1) {
//         console.log(`Подстрока "id" найдена на позиции`, index)
//         index++
//     } else {
//         break
//     }
// } // найдено на позиции 1, 12

// let index = str.lastIndexOf(`id`) 
// console.log(`Подстрока "id" найдена на позиции`, index) // 12

// includes, startsWith, endsWith

// console.log('Widget with id'.includes("Widget")) // true
// console.log('Widget with id'.includes("bye")) // false
// console.log('Widget with id'.includes("id")) // true

// console.log('Widget'.startsWith('Wid')) // true
// console.log('Widget'.endsWith('et')) // true

// console.log('Widget'.endsWith('et')?'Строка "Widget" заканчивается на подстроку "et"' : "") // Строка "Widget" заканчивается на подстроку "et"

// let str = `Arma TUSHINO`
// console.log(str.slice(1,3)) = rm

// let str = `Arma TUSHINO`
// console.log(str.slice(-4,-1)) = HIN

// let str = `Arma TUSHINO`
// console.log(str.substring(3,1)) = rm

// let str = `string`
// console.log(str.substr(-2)) = ng

// TODO ^^^ ДОСТАТОЧНО ЗАПОМНИТЬ slice ^^^


// TODO    Правильное сравнение срок - str.localCompare(str2)

// let str = `Ослик Иа-Иа посмотрел на воздух`
// console.log(str.replace('Иа', 'Юю')) // только первое совпадение
// console.log(str.replaceAll('Иа', 'Юю')) // меняет все совпадения
// console.log(str) // строка не изменилась
// str = str.replaceAll('Иа', 'Юю')
// console.log(str) // заменили старую стоку новой

// let str = `Ослик Иа-Иа посмотрел на воздух`
// console.log(str.split(' ')) // ['Ослик', 'Иа-Иа', 'посмотрел', 'на', 'воздух']
// console.log(str.join('_')) // 


// let fruits = ["Яблоко", "Апельсин", "Слива"]
// fruits[3] = "Лимон"
// fruits[fruits.length] = 'Груша'
// fruits.push('Слива')
// const fruits2 = fruits
// fruits2.push('Банан')
// console.log(fruits)

// console.log([1, 2].toString())
// console.log({}.toString()) // object object

// const arr1 = [1, 'adsd',[1,2,['ffgffg',42]],{a:12}]
// const arr2 = [1, 'adsd',[1,2,['ffgffg',42]],{b:20}] 
// console.log(arr1.toString() == arr2.toString()) // true = количество элементов одинаково (подходит для сравнения массивов с примитивными значениями)

// const arr3 = [1, 'adsd',[1,2,['ffgffg',42]],[12,35]] 
// console.log(arr3.toString().split(',')) // самый простой способ сделать сложный массив, состоящий из примитивов, плоским

// let fruits = ["Яблоко", "Апельсин", "Слива"]
// console.log(fruits.at(1)) // апельсин

// let fruits = ["Яблоко", "Апельсин", "Слива"]
// console.log(fruits[3]) // undefined (как и [-1])

// fruits.length = 2
// console.log(fruits) // изменили количество элементов на указаное число, невошедшие = удаляются
// fruits.length = 7 // добавленные элементы будут пустыми
// fruits.length = -1 // ошибка, не может быть меньше нуля
// простой способ очистить массив - arr.length = 0


// * pop & shift - удаляют первый(shift) или последний(pop) элемент массива и возвращают его значение

// function pop(arr: any[]) {
//     const el = arr[arr.length-1] // читаем последий элемент 
//     arr.length = arr.length - 1 // удаляем последний элемент
//     return el // возвращаем последний элемент
// }

// function shift(arr: any[]) {
//     const el = arr[0] // читаем первый элемент 
//     arr = arr.slice(1) // удаляем первый элемент
//     return el // возвращаем первый элемент
// }


// * push & unshift добавляют элементы в начало(unshift) или конец(push) массива и возвращают новую длинну массива

// function push(arr :any[], elements: any[]) {
//     arr = [...arr, ...elements]
//     return arr.length
// }

// function unshift(arr :any[], elements: any[]) {
//     arr = [...elements, ...arr]
//     return arr.length
// }


// let fruits = ["Яблоко", "Апельсин", "Груша"]
// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i])
// } // проходит по значениям, нет доступа к индексам

// let matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ] 
// console.log(matrix[1][1]) //* Обращается к первому элементу первого элемента (вторая строка второй элемент)

// ? Копирование массивов:
// * arr2 = [...arr]