import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './SortList.scss';
import { setSortFilter } from '../../../redux/filtersReducer';

const SortList = () => {
    const dispatch = useDispatch();

    const sortBy = option => {
        dispatch(setSortFilter(option)); 
    }

    return (
        <div className="sort-list">
            <p className="sort-list__name">Sortuj: </p>
            <ul className="sort-list__options">
                <li onClick= {() => sortBy('A-Z')} className="sort-list__option">Nazwa A-Z</li>
                <li onClick= {() => sortBy('Z-A')} className="sort-list__option">Nazwa Z-A</li>
                <li onClick= {() => sortBy('Price: Low to High')} className="sort-list__option">Cena rosnąco</li>
                <li onClick= {() => sortBy('Price: High to Low')} className="sort-list__option">Cena malejąco</li>
            </ul>
        </div>
    );
};

export default SortList;