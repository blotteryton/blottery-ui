import React from 'react';

import './InfoTable.scss';

export default function InfoTable(props) {
    return (
        <div className="info-table">
            {props.creator ? (<div className="info-table__item">
                <span className="info-table__title">Создатель:</span>
                <span className="info-table__value info-table__value--accent">{props.creator}</span>
            </div>) : null}
            {props.items ? (<div className="info-table__item">
                <span className="info-table__title">Предметы:</span>
                <span className="info-table__value">{props.items}</span>
            </div>) : null}
            {props.owners ? (<div className="info-table__item">
                <span className="info-table__title">Владельцы:</span>
                <span className="info-table__value">{props.owners}</span>
            </div>) : null}
            {props.total_cash ? (<div className="info-table__item">
                <span className="info-table__title">Общий объем:</span>
                <span className="info-table__value">{props.total_cash}K TON</span>
            </div>) : null}
            {props.floor_price ? (<div className="info-table__item">
                <span className="info-table__title">Минимальная стоимость:</span>
                <span className="info-table__value">{props.floor_price} TON</span>
            </div>) : null}
        </div>
    );
}