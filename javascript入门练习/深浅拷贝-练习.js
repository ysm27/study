// 深浅拷贝定义
// 前拷贝只能拷贝一层，如果嵌套数组或者对象，他们指向的地址还是一样的
// 神拷贝
// 1 方式1
//JSON.parse(JSON.stringify()) //弊端1不能处理函数
// 2 手写递归方法


//实现深度克隆---对象/数组

function clone(target) {

    //判断拷贝的数据类型

    //初始化变量result 成为最终克隆的数据

    let result, targetType = checkedType(target)

    if (targetType === 'object') {

      result = {}

    } else if (targetType === 'Array') {

      result = []

    } else {

      return target

    }

    //遍历目标数据//  target {name: 'yang', age:[1, 2]}
    for (let i in target) {
      //获取遍历数据结构的每一项值。
      let value = target[i]
      //判断目标结构里的每一值是否存在对象/数组
      if (checkedType(value) === 'Object' || checkedType(value) ==='Array') { //对象/数组里嵌套了对象/数组 递归调用自己
        result[i] = clone(value) // age
      } else { //获取到value值是基本的数据类型或者是函数。
        result[i] = value; //name
      }
    }

    return result

  }
function yang(target){
  let result = target // clone
  return result
}
let newObj = yang(obj)
    //定义检测数据类型的功能函数
function checkedType(target) {

  return Object.prototype.toString.call(target).slice(8, -1)

}


//{name: 'yang'}
// {
//   key: value
// }
var obj = {name: 'yang'}
for (const key in obj) {
  console.log(key, '******** key打印 *******');
  console.log(obj[key], '******** obj[key打印 *******');
  //obj.name
}