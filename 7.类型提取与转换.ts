
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

