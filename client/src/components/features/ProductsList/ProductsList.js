import React, { useEffect, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import MaterialTable from 'material-table';
import tableIcons from '../../../utils/Material-UI/TableIcons';
import { ProductsListTableTranslate } from '../../../utils/Material-UI/TableTranslations'; 
import { HtmlBox } from '../../index';

import { removeSingleProcutRequest } from '../../../redux/productsReducer';

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
    setState({...state, data: products} )
  }, [products]);

    const [state, setState] = useState({
        columns: [
          { title: 'Nazwa', field: 'name' },
          { title: 'Cena', field: 'price', type: 'numeric' },
          { title: 'Informacja', field: 'additionalInfo' },
          { 
            title: 'Opis', 
            field: 'description', 
            render: rowData => <HtmlBox>{ rowData.description }</HtmlBox>
          },
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