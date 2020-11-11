
interface Trade7 {
    tid: string;
    props: string[]
    price: number;
    orders: {
        oid: string;
        title: string;
    }[];
    address: {
        name: string,
        tel: string
    }
}
type Address = Trade7['address']

type Order71 = Trade7['orders'][0];

type Keys7 = keyof Trade7;

let key: Keys7 = "price1";

let order = {
    oid: '123',
    price: 234,
    title: '这是一个奇怪的order'
}
type Order72 = typeof order

type KeysOfOrder1 = keyof Order72

type KeysOfOrder2 = keyof typeof order

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

interface TradeDict{
    [key:string]:Trade7;
}