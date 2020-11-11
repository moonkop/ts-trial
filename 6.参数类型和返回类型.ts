interface Trade6 {
    tid: string;
    price: number;
}

function getSumPrice(trades: Trade6[]): number {
    let sum = 0
    trades.map(item => sum += item.price)
    return sum;
}
function someFun1({ a, b, trade }: { a: string, b: number, trade: Trade6 }) {
    trade.price = b;
    trade.tid = a;
}