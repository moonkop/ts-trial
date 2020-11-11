interface Trade5 {
    tid: string;
    props: string[]
    price: number;
    orders?: {
        oid: string;
        title: string;
    }[]
}
let trade51: Trade5 = {
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
let trade52: Trade5 = {
    tid: '123',
    props: ['456', '567'],
    price: 345
}
function getAllTitles(trade: Trade5) {
    return trade.orders?.map(item => item.title).join(',')||''
}
