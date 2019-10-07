const sortByFilter = (option, products) => {
    
    switch (option.SORT_FILTER) {
        case 'A-Z':
            return products.sort((a,b) => (a.name > b.name)? 1 : ((b.name > a.name) ? -1: 0));
        case 'Z-A':
            return products.sort((a,b) => (a.name < b.name)? 1 : ((b.name < a.name) ? -1: 0));
        case 'Price: Low to High':
            return products.sort((a,b) => (a.price > b.price)? 1 : ((b.price > a.price) ? -1: 0));
        case 'Price: High to Low':
            return products.sort((a,b) => (a.price < b.price)? 1 : ((b.price < a.price) ? -1: 0));
        default:
            return products;
    }
}

export default sortByFilter;