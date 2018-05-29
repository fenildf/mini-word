
module.exports.sayHello = sayHello
exports.sayGoodbye = sayGoodbye

// common.js  注意这里是：``,不是单引号'',否则原样输出
function sayHello(name) {
  console.log(`Hello ${name} !`)
}
function sayGoodbye(name) {
  console.log(`Goodbye ${name} !`)
 
}
