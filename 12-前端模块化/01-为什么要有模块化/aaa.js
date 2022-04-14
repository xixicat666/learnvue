
//小明的aaa文件

var modleA = (function(){
  var obj = {}
  var flag = true;
  function sum(num1,num2){
    return num1 + num2;
  }

  obj.flag = flag;
  obj.sum = sum;

  return obj;
})()

//commonJS封装的模块化
/*modleA.exports = {
  flag:flag,
  sum:sum
}*/



