const priceFilter = (option, products) => {

    switch (option.PRICE_FILTER) {
        case 'Price: under25':
            return products.filter(product => product.price <= 25);
        case 'Price: 25-50':
            return products.filter(product => product.price > 25 && product.price <= 50 );
        case 'Price: 50-100':
            return products.filter(product => product.price > 50 && product.price <= 100);
        case 'Price: 100-150':
        let filters = products.filter(product => product.price > 100 && product.price <= 150);
            return filters;
        case 'Price: above150':
            return products.filter(product => product.price > 150);
        default:
            return products;
    }
}

export default priceFilter;