/**
 * 第一题  
 * 
 * 根据
 * 
 * https://open.taobao.com/api.htm?spm=a219a.7386653.1.171.52c84de09KfEjp&docId=52&docType=2
 * 
 * **写出该接口的请求类型和响应类型**
 */

/**
 * 第二题
 */
interface Trade{
    tid:string;
    price:string;
    address:{
        province:string;
        detail:string;
        city:string;
        distinct:string;
        name:string;
        phone:string;
        distinctId:number;
        cityId:number;
    }
}
let trade:Trade={
    tid:'12312312',
    price:'100.1',
    address:{
        distinctId:123,
        cityId:457,
        city:'上海市',
        detail:'新二路55号',
        distinct:'宝山区',
        name:'江大鸽',
        phone:'18650040087',
        province:'上海市',
    }
}

encryptTradeByKeyMap(trade,{city:true,name:true})

/**
 * 通过传入的键值表把对应字段的键值全部替换成四个星号(****)
 *
 * 传入两个参数
 * 第一个参数是需要加密的trade
 * 第二个参数是需要加密的Address中的键值表
 * 调用方式如上 传入的参数可能是不完整的
 * 要注意的是只有string类型的键值是可以加密的 number类型的不能加密
 */
function encryptTradeByKeyMap(trade,keyMap){

}




/**
  * 第二题
  * 通过查阅源码 React.createElement的返回值类型和参数表是什么?
  */



/**
 * 第三题
 */
interface Trade{
    tid:string;
    price:boolean;
    orders?:{
        oid:string,
        price:string,
    }
}
//前面的trade里面没有orders数组 要将后面的trade中的orders数组放到前面的Trade中  **补充该函数内所有的类型定义**
function mergeTrades(oldTrades,newTrades){
    let tradeDict= oldTrades.reduce((prev,next)=>{
        prev[next.tid]=next
        return prev
    },{})
    newTrades.map(newTrade=>{
        if(tradeDict[newTrade.tid]){
            tradeDict[newTrade.tid].orders=newTrade.orders;
        }
    })
}


/**
 * 第四题
 * 
 * 使用ts实现一个选择器组件
 * 
 * SelectTag
 */



/**
 * 第五题
 * 
 * 如下代码试图实现一个事件收发器
 * 
 * 请按注释要求修改/补全下方代码
 * 
 * **/
interface AllEvents {
    showDialog: (??) => ?? ; //**根据下面的调用 补全此处的类型**
    routerChanged: (??) => ??
}

type Events = {
    showDialog:AllEvents['showDialog'][], //**简化此处代码 使用keyof in typeof 等关键字进行类型转换**
    routerChanged:AllEvents['routerChanged'][],
};
const commonEvents:Events = {
    showDialog: [],
    routerChanged   : [],
};

function subscribe(eventName, callback) {  //**补全该方法的类型定义 对callback参数加上类型约束来获得代码提示 (tips:使用泛型函数 这题可能会比较难 搞不出来可以跳过)**
    commonEvents[eventName].push(callback)
}

// **写一个emit(触发)的方法**

// **写一个unsubscribe(取消监听)的方法**

subscribe('loading',(isloading)=>{
    if(isloading){
        //showLoading();
    }else{
        //hideLoading();
    }
})
subscribe('routerChanged',(url,params)=>{
    console.log('路由发生了变化,跳转到了',url,'参数是',params)
})


/**
 * 第六题 
 * 
 * 查阅资料 **如何拿到一个函数的返回值类型** **如何拿到一个函数的参数类型**
 */

 