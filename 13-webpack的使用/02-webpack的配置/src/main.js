
//commonJS模块化
const {add,mul} = require('./js/aaa.js')
console.log(add(20,30));
console.log(mul(20,30));

//ES6模块化
import{name,age} from './js/info.js'
console.log(name);
console.log(age);