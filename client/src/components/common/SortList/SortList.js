import React from 'react';
import './SortList.scss';

const SortList = () => {
    return (
        <div className="sort-list">
            <p className="sort-list__name">Sortuj: </p>
            <ul className="sort-list__options">
                <li className="sort-list__option">Nazwa A-Z</li>
                <li className="sort-list__option">Nazwa Z-A</li>
                <li className="sort-list__option">Cena rosnąco</li>
                <li className="sort-list__option">Cena malejąco</li>
            </ul>
        </div>
    );
};

export default SortList;