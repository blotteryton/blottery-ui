import React from 'react';

import './InfoTable.scss';

const InfoTable = () => {
    return (
        <div className="info-table">
            <div className="info-table__item">
                <span className="info-table__title">Создатель:</span>
                <span className="info-table__value info-table__value--accent">LigaTeam</span>
            </div>
            <div className="info-table__item">
                <span className="info-table__title">Предметы:</span>
                <span className="info-table__value">4 402</span>
            </div>
            <div className="info-table__item">
                <span className="info-table__title">Владельцы:</span>
                <span className="info-table__value">3 723</span>
            </div>
            <div className="info-table__item">
                <span className="info-table__title">Общий объем:</span>
                <span className="info-table__value">25.1K TON</span>
            </div>
            <div className="info-table__item">
                <span className="info-table__title">Минимальная стоимость:</span>
                <span className="info-table__value">0.0040 TON</span>
            </div>
        </div>
    );
}

export default InfoTable;