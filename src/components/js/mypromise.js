var fs = require('fs')
// fs.readFile('../data/1.txt', 'utf-8', (err, data) => {
//   if (err) {
//     console.log(err)
//   } else {
//     console.log(data)
//   }
// })
// fs.readFile('../data/2.txt', 'utf-8', (err, data) => {
//   if (err) {
//     console.log(err)
//   } else {
//     console.log(data)
//   }
// })
// fs.readFile('../data/3.txt', 'utf-8', (err, data) => {
//   if (err) {
//     console.log(err)
//   } else {
//     console.log(data)
//   }
// })

// 1.promise构造函数需要传入一个参数，这个参数是一个函数
// 2.这个函数参数 又有  两个参数，这两个参数又是两个回调函数
// 一个是操作成功的回调
// 一个是操作失败的回调
function createPromise (filename) {
  return new Promise((resolve, reject) => {
    fs.readFile(`../data/${filename}`, 'utf-8', (err, data) => {
      if (err) {
        // 调用失败的回调
        reject(err)
      } else {
        // 调用成功的回调
        resolve(data)
      }
    })
  })
}

var p1 = createPromise('1.txt')
var p2 = createPromise('2.txt')
var p3 = createPromise('3.txt')

// 调用 promise对象,promise通过.then或.catch进行调用
p1
  .then((data) => {
    console.log(data)
    // 返回一个promise对象
    return p2
  })
  .then((data) => {
    console.log(data)
    // 返回一个promise对象
    return p3
  })
  .then((data) => {
    console.log(data)
  })
  .catch((err) => {
    console.log(err)
  })
