import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MaterialTable from 'material-table';
import tableIcons from './TableIcons';

import { removeSingleProcutRequest } from '../../../redux/productsReducer';

const ProductsList = () => {
  const dispatch = useDispatch();
  const products = useSelector(({products}) => products.data);

  const removeProdtuct = (id) => {
    dispatch(removeSingleProcutRequest(id));
  }

  useEffect(() => {
    setState({...state, data: products} )
  }, [products]);

    const [state, setState] = React.useState({
        columns: [
          { title: 'Name', field: 'name' },
          { title: 'Price', field: 'price', type: 'numeric' },
          { title: 'additionalInfo', field: 'additionalInfo' },
          { title: 'description', field: 'description' },
        ],
        data: products
      });
      console.log(products)
      console.log(<MaterialTable 
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
      }} />);
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
            onClick: (e, data) => test(data.id)
          }
        ]}
        />
    );
};

export default ProductsList;