// 编程范式：命令式编程/声明式编程
// 编程范式：面向对象编程（第一公民：对象）/函数式编程（第一公民：函数）
// filter/map/reduce
// filter中的回调函数有一个要求：必须返回一个boolean值
// true：当返回true时，函数内部会自动将这次返回的n加入到新的数组中
// false：但返回false时，函数会自动过滤这次的n

const nums = [10,20,40,80,110,130];

let total2 = nums.filter(n => n<100).map(n => n*2).reduce((pre,n) => pre+n);
console.log(total2)

let total1 = nums.filter(function(n){
  return n < 100;
}).map(function(n){
  return n * 2;
}).reduce(function(preValue,n){
  return preValue + n;
},0)
console.log(total1)

//1、filter函数的使用
// 10 20 40 80
let new1Number = nums.filter(function(n){
  return n < 100;
})
console.log(new1Number)

//2、map函数的使用
//20 40 80 160
let new2Number = new1Number.map(function(n){
  return n * 2;
})
console.log(new2Number)

//3、reduce函数的使用
//300
let total = new2Number.reduce(function(preValue,n){
  return preValue + n;
},0)
console.log(total)