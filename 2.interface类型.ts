interface Trade {
    tid: string;
    props: string[]
    price: number;
    orders: Order[]
}
interface Order {
    oid: string;
    title: string;
}




interface Trade {
    tid: string;
    props: string[]
    price: number;
    orders: {
        oid: string;
        title: string;
    }[]
}


let stu: Trade = {
    tid: '123123123123',
    price: 234.4,
    props: ['很好用'],
    orders: [
        {
            oid: '234234',
            title: '我是一个提示'
        },
        {
            oid: '234223434',
            title: 'aaa'
        }
    ]
}


let stu2:  {
    tid: string;
    props: string[]
    price: number;
    orders: {
        oid: string;
        title: string;
    }[]
} = {
    tid: '123123123123',
    price: 234.4,
    props: ['很好用'],
    orders: [
        {
            oid: '234234',
            title: '我是一个提示'
        },
        {
            oid: '234223434',
            title: 'aaa'
        }
    ]
}


let titles =stu.orders.map(item=>item.title)
