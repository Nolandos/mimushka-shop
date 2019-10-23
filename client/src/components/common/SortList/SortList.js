import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './SortList.scss';
import { setSortFilter } from '../../../redux/filtersReducer';

const SortList = () => {
    const dispatch = useDispatch();
    const sortFilter = useSelector(({ filters }) => filters.SORT_FILTER);

    const [links, setActive] = useState({
        'A-Z': sortFilter === 'A-Z' ? 'active' : '',
        'Z-A': sortFilter === 'Z-A' ? 'active' : '',
        'Price: Low to High': sortFilter === 'Price: Low to High' ? 'active' : '',
        'Price: High to Low': sortFilter === 'Price: High to Low' ? 'active' : '',
    })

    const sortBy = (e, option) => {
        Object.keys(links).forEach(link => setActive(links[link] = ''));
        setActive({...links, [option]: 'active'})
        dispatch(setSortFilter(option)); 
    }
    
    return (
        <div className="sort-list">
            <p className="sort-list__name">Sortuj: </p>
            <ul className="sort-list__options">
                <li onClick= { e => sortBy(e, 'A-Z')} className={`sort-list__option ${links["A-Z"]}`}>Nazwa A-Z</li>
                <li onClick= { e => sortBy(e, 'Z-A')} className={`sort-list__option ${links["Z-A"]}`}>Nazwa Z-A</li>
                <li onClick= { e => sortBy(e, 'Price: Low to High')} className={`sort-list__option ${links["Price: Low to High"]}`}>Cena rosnąco</li>
                <li onClick= { e => sortBy(e, 'Price: High to Low')} className={`sort-list__option ${links["Price: High to Low"]}`}>Cena malejąco</li>
            </ul>
        </div>
    );
};

export default SortList;