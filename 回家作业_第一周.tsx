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