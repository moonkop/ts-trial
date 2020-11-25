let str='hhh'
let obj={
    [str]:'123'
}
//可索引的属性(可变属性)





interface TradeDict{
    [key:string]:Trade7;
}

//遇到复杂运算的时候需要请出type 关键字 
//interface 不能做复杂的类型运算
type FakeOrder0 = {
    [key in KeysOfOrder2]: string;
}
type FakeOrder1 = {
    [key in keyof Order72]: string;
}
type FakeOrder2 = {
    [key in keyof typeof order]: string;
}
type FakeOrder3 = {
    [key in 'oid' | 'title' | 'price']: string;
}


type FakeOrder4 = {
    [key in 'oid' | 'title' | 'price']: Order72[key];
}

