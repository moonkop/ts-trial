import React from 'react';
import { connect } from 'react-redux';
import { TradeManagementReducerState, tradeManagementStore } from './state';
import { Tabs } from 'antd';
import { StoreStates } from '../../types/reducer';
import {
    reloadTradeList,
     updateUnLockedTrades,
} from './services';
import { TradeCard } from './tradeCard/tradeCard';

import './tradeList.scss';

import EmptyPage from 'components/emptyPage';

const TabPane = Tabs.TabPane;

interface TradeListState {

}

interface TradeListProps {

}

interface TradeListInjectedProps extends TradeManagementReducerState {

}



function changeRefundStatus (value: number) {
    tradeManagementStore.dispatch({ refund_status: value });
    reloadTradeList();
}

class TradeList extends React.Component<TradeListProps, TradeListState> {
    get injected () {
        return this.props as TradeListInjectedProps;
    }

    componentDidMount () {
        reloadTradeList();
        const unLockedTradesByTid = getUnLockedTradesByTid();
        updateUnLockedTrades(unLockedTradesByTid);
    }
    render () {
        const {unLockedTradesByTid ,trades} = this.injected;
        return <div className='trade-list' id='tradeList'>
            <div className="trade-list-cards">
                {trades.map((trade, index) => {
                    return <TradeCard
                        trade={trade}
                        key={trade.tid}
                        index={index}
                        activeTabKey={this.injected.currentTabKey}
                        updateTradeField={ this.updateTradeField }
                        unLockedTrade={ unLockedTradesByTid[trade.tid] }
                        contentText="复制"
                    >
                    </TradeCard>;
                })}
                {this.injected.trades.length == 0 && !this.injected.isLoading && <EmptyPage text={'当前没有订单'}/>}
            </div>
        </div>;
    }
}

export const TradeManagementTradeList = connect((store: StoreStates) => {
    return store.tradeManagement;
})(TradeList);
