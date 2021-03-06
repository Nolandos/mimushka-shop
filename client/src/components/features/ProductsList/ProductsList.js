import React, { useEffect, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import MaterialTable from 'material-table';
import tableIcons from '../../../utils/Material-UI/TableIcons';
import { ProductsListTableTranslate } from '../../../utils/Material-UI/TableTranslations'; 
import { HtmlBox } from '../../index';

import { removeSingleProcutRequest, loadProductsRequest } from '../../../redux/productsReducer';

const ProductsList = () => {
  const dispatch = useDispatch();
  const products = useSelector(({products}) => products.data);
  
  const removeProdtuct = (id) => {
    dispatch(removeSingleProcutRequest(id));
  }

  const test = (id) => {
    setState({...state, currentId: id, redirect: true })
  }
 

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(loadProductsRequest());
      setState({...state, data: products} )
    }
    fetchData();
  },[products.length]);

    const [state, setState] = useState({
        columns: [
          { title: 'Nazwa', field: 'name' },
          { title: 'Cena', field: 'price', type: 'numeric' },
          { title: 'Informacja', field: 'additionalInfo' },
        ],
        data: products,
        redirect: false,
        currentId: ''
      });

      if(state.redirect === true) return <Redirect to={`/admin/dashboard/edit-product/${state.currentId}`} />
      
    return (
        <MaterialTable
          icons={tableIcons}
          title="Lista produktów"
          columns={state.columns}
          data={state.data}
          editable={{
            onRowDelete: oldData =>
              new Promise(resolve => {
                setTimeout(() => {
                  resolve();
                  const data = [...state.data];
                  removeProdtuct(oldData.id);
                  data.splice(data.indexOf(oldData), 1);
                  setState({ ...state, data });
                }, 600);
              }),
          }}
          actions={[
          {
            icon: tableIcons.Edit,
            tooltip: 'Edytuj',
            onClick: (e,data) => test(data.id)
          }
        ]}
        localization={ProductsListTableTranslate}
        />
    );
};

export default ProductsList;