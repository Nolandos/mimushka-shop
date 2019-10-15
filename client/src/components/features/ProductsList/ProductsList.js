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
          { title: 'Nazwa', field: 'name' },
          { title: 'Cena', field: 'price', type: 'numeric' },
          { title: 'Informacja', field: 'additionalInfo' },
          { title: 'Opis', field: 'description' },
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
        localization={{
          header: {
            actions: 'Operacje'
          },
          body: {
            emptyDataSourceMessage: 'Brak produktów.',
            deleteTooltip: 'Usuń',
            editRow: {
              deleteText: 'Czy na pewno chcesz usunąć ten produkt ?',
              saveTooltip: 'Usuń',
              cancelTooltip: 'Anuluj'
            }
          },
          toolbar: {
            searchPlaceholder:'Wyszukaj produkt',
            searchTooltip: 'Wyszukaj'
          },
          pagination: {
            labelDisplayedRows: ' {from}-{to} z {count}',
            firstTooltip: 'Pierwsza strona',
            previousTooltip: 'Poprzednia strona',
            nextTooltip: 'Następna strona',
            lastTooltip: 'Ostatnia strona',
            saveTooltip: 'Zapisz'
          }
        }}
        />
    );
};

export default ProductsList;