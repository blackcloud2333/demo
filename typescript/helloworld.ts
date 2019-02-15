let myObj = {
    size:10,
    label:"szie 10 Object"
}
//核心原则之一是对值所具有的结构进行检查
// 接口的作用是为这些雷鸣命名和你的代码或或第三方代码定义契约

interface labelValue {
    label:string
}
function printLabel(labelledObj:LabeledValue) {
    console.log(labelledObj.label)
}
printLabel(myObj)
// 类型的检查器不会检查属性的顺序，只要对应的属性存在并且类型值是对的就可以了
// 可选属性
// 接口里的属性不全是必须的，只是再某些条件下存在或者根本不存在，可选属性是函数窜入的对象当中只有部分属性赋值了。
interface SquraeConfig {
    color?: string;
    width?: number;
}
function createSquare(config:SquraeConfig):{
    color:string;
    area:number;
} {
  let newSquare = {
      color:'white',
      area:100
  }
  if (config.color) {
      newSquare.color = config.color;

  }
  if (config.width) {
      newSquare.area = config.width*config.width
  }
  return newSquare
}
let mySquare = createSquare({color:"black"})

interface SearchFunc {
    (source:string,subString:string):boolean;
}
interface StringArray {
    [index:number]:string
}
let myArray:StringArray
myArray = ["BOB","Fred"]
let myStr:string = MyArray[0]
// 用索引类型去引导的时候
// 索引签名其实就是根据x类型的索引可以得到y类型的返回值
// 数字索引的返回值，必须是字符串索引返回值的子类型
//如果存在字符串返回值，那么要求所有的返回值，都必须和字符串索引的返回值一致
interface NumberDictionary {
    [index:string]:number;
    length:number;
    name:string
}
interface ColckInterface {
    currentTime:Date;
}
class Clock implements ClockInterface {
    currentTime:Date;
    constructor(h:number,m:number) {

    }
}
// 类的接口里面的类型是怎么确定的？Date类型是常规意义上的Date对象类型吗？

//接口描述了类 的公共部分，而不是公共私有两部分，他不会帮你检查某些私有成员
//应该直接操作类的静态部分
interface ClockConstructor {
    new (hour:number,minute:number):ClockInterface;
}
interface ClockInterface {
    tick();
}
function createClock(ctor:ClockConstructor,hour:number,minute:number):ClockInterface {
    return new octor(hour,minute)
}
// 接口也可以互相继承，这可以让我们能够从一个接口里复制成员到另一个几口里，专业可以把接口分割到可充用的模块里面

interface Shape {
    color:string
}
interface Square extends Shape {
    sideLength:number
}
let square = <Square>{};

square.color= 'blue';
square.sideLength = 10;


interface penStroke {
    pendWidth:number;
}
interface Square extends shape,PenStroke{
    slideLength:number
}
let square = <Square>{}
square.color = 'red'
//一个对象可以同时，可以为函数和对象使用，并且带有额外的属性
interface Counter  {
    (start:number):string;
    interval:number;
    reset():void;
}
function getCounter():Counter {
     let counter= <Counter> function ((start:number)) {};
     counter.interval = 123;
     counter.reset = function () {}
     return counter
}
let c = getCounter()
c(10)
c.reset()
c.interval


//类当中是可以
class Greeter {
    gretting:string;
    constructor(message:string){
        this.gretting = message
    }
    greet() {
        return "hello"+this.gretting
    }
}
let greet = new Greeter('world')
