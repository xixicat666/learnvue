//1、通过对象导出
var name = 'xixi'
var age = 2
export {name,age}

//2、定义时直接导出
export var sex = '女'

//3、导出函数/类
export function add(num1,num2){
  return num1 + num2
}

export class Person{
  run(){
    console.log("run....")
  }
}

//4、默认导出（每个js只能有一个）
var address = '北京市'
export default address