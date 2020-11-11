
interface Trade10 {
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

type PartialTrade = Partial<Trade10>

type TidPropsOrdersTrade = Pick<Trade10, 'tid' | 'props' | 'orders'>

type TradeExcludeOrders = Omit<Trade10, 'orders'>

type TradeDict10 = Record<string, Trade10>




function getData2():Promise<{data:number}> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ data: 123 })
        }, 1000);
    })
}

interface DataType {
    code: number,
    data: string
}

async function getData(): Promise<DataType> {
    let data: DataType = await (fetch('./data').then(data => data.json()));
    return data
}
