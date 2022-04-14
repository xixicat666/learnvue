//1、直接导入export定义的变量  单个
import {name,age,add,Person} from './aaa.js'

console.log(name)
console.log(age)
console.log(add(1,2))
const p = new Person()
p.run()

//2、导入export default定义的变量（以为是唯一，所以可以自定义名称,大括号也可以省略）
import addr from './aaa.js'

console.log(addr)

//3、统一全部导入
import * as info from './aaa.js'

console.log(info.name)
console.log(info.add(1,2))
const p1 = new info.Person()
p1.run()
