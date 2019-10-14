import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MaterialTable from 'material-table';
import { ProductSummary } from '../../index';
import tableIcons from './TableIcons';

const ProductsList = () => {
  const products = useSelector(({products}) => products.data);
  console.log(tableIcons);
  const test = (data) => {
    console.log(data);
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
      console.log(state);
    return (
        <MaterialTable
          icons={tableIcons}
          title="Editable Example"
          columns={state.columns}
          data={state.data}
          editable={{
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              test(oldData.id);
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