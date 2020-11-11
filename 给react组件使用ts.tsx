interface TradeCardState {
    isOpen:boolean;
}

interface TradeCardProps {
    trade: Trade;
    activeTabKey: TradeListTabsKeyEnum;
    index?: number;
    onlyShow?: boolean;
    onSelect?: () => void;
    selectable?: boolean;
    updateTradeField?: (trade: Trade, field: string) => void;
    contentText?: string;
    unLockedTrade?: UnLockedTrade;
}


export class TradeCard extends React.Component<TradeCardProps, TradeCardState> {
    constructor(props) {
        super(props);
        this.state={
            isOpen:false
        }
    }
    render() {
        return <div></div>
    }
}