import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './PriceList.scss';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import { setPriceFilter } from '../../../redux/filtersReducer';

const PriceList = () => {
    const dispatch = useDispatch();
    const priceFilter = useSelector(({ filters }) => filters.PRICE_FILTER);

    const [state, setState] = useState({
        under25: priceFilter === 'Price: under25' ? true : false,
        '25-50': priceFilter === 'Price: 25-50' ? true : false,
        '50-100': priceFilter === 'Price: 50-100' ? true : false,
        '100-150': priceFilter === 'Price: 100-150' ? true : false,
        above150: priceFilter === 'Price: above150' ? true : false,
      });

      const handleChange = name => event => {
        Object.keys(state).forEach(item => setState(state[item] = false));
        setState({ ...state, [name]: event.target.checked });
        if(event.target.checked) dispatch(setPriceFilter(event.target.value));
        else if(!event.target.checked) dispatch(setPriceFilter('none'));
      };

    return (
        <div className="price-list">
            <p className="price-list__name">Ceny: </p>
            <ul className="price-list__options">
                <li className="price-list__option">
                    <FormControlLabel
                        control={
                            <Checkbox checked={state.under25} onChange={handleChange('under25')} value="Price: under25" />
                        }
                        label="poniżej 25 zł"
                    />
                </li>
                <li className="price-list__option">
                    <FormControlLabel
                        control={
                            <Checkbox checked={state['25-50']} onChange={handleChange('25-50')} value="Price: 25-50" />
                        }
                        label="25 zł do 50 zł"
                    />
                </li>
                <li className="price-list__option">
                    <FormControlLabel
                        control={
                            <Checkbox checked={state['50-100']} onChange={handleChange('50-100')} value="Price: 50-100" />
                        }
                        label="50 zł do 100 zł"
                        />
                </li>
                <li className="price-list__option">
                    <FormControlLabel
                        control={
                            <Checkbox checked={state['100-150']} onChange={handleChange('100-150')} value="Price: 100-150" />
                        }
                        label="100 zł do 150 zł"
                    />
                </li>
                <li className="price-list__option">
                    <FormControlLabel
                        control={
                            <Checkbox checked={state.above150} onChange={handleChange('above150')} value="Price: above150" />
                        }
                        label="powyżej 150zł"
                    />
                </li>
            </ul>
        </div>
    )
}

export default PriceList;