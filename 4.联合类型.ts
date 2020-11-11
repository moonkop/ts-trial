enum TradeStatus {
  WAIT_BUYER_PAY = 'WAIT_BUYER_PAY',
  PAY_PENDING = 'PAY_PENDING',
  TRADE_NO_CREATE_PAY = 'TRADE_NO_CREATE_PAY',
  WAIT_SELLER_SEND_GOODS = 'WAIT_SELLER_SEND_GOODS',
  PAID_FORBID_CONSIGN = 'PAID_FORBID_CONSIGN',
  SELLER_CONSIGNED_PART = 'SELLER_CONSIGNED_PART',
  WAIT_BUYER_CONFIRM_GOODS = 'WAIT_BUYER_CONFIRM_GOODS',
  TRADE_BUYER_SIGNED = 'TRADE_BUYER_SIGNED',
  TRADE_FINISHED = 'TRADE_FINISHED',
  TRADE_CLOSED = 'TRADE_CLOSED',
  TRADE_CLOSED_BY_TAOBAO = 'TRADE_CLOSED_BY_TAOBAO',
}

export type TradeStatusUnion =  'WAIT_BUYER_PAY'  | 'PAY_PENDING'  | 'TRADE_NO_CREATE_PAY'  | 'WAIT_SELLER_SEND_GOODS'  | 'PAID_FORBID_CONSIGN'  | 'SELLER_CONSIGNED_PART'  | 'WAIT_BUYER_CONFIRM_GOODS'  | 'TRADE_BUYER_SIGNED'  | 'TRADE_FINISHED'  | 'TRADE_CLOSED' | 'TRADE_CLOSED_BY_TAOBAO'


interface Trade2 {
  tid: string;
  props: string[]
  price: number;
  status: TradeStatusUnion;
  orders: {
    oid: string;
    title: string;
    status: TradeStatusUnion;
  }[]
}

let trade1: Trade2 = {
  tid: '123123',
  props: ['231'],
  price: 123.4,
  status: "WAIT_BUYER_CONFIRM_GOODS",
  orders: [
    {
      oid: '123234234',
      title: '一个商品',
      status: "WAIT_BUYER_CONFIRM_GOODS",
    },
    {
      oid: '123234234',
      title: '两个商品',
      status: TradeStatus.WAIT_BUYER_CONFIRM_GOODS,
    }
  ]
}