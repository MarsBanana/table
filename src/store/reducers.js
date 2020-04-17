const itemsTable = (state = [], action) => {
    switch (action.type) {
        case "ADD":
            return [
                ...state,
                {
                    id: action.id,
                    name: action.name,
                    amount: action.amount,
                    price: action.price,
                },
            ];
        case "DELETE":
            let index = state.findIndex((item) => item.id === action.id);
            return [...state.slice(0, index), ...state.slice(index + 1)];
        case "CHANGE":
            let newState = state.slice();
            newState[action.index] = {
                id: action.id,
                name: action.name,
                amount: action.amount,
                price: action.price,
            };
            return newState;
        case "SORT":
            switch (action.sortType) {
                case "id":
                    return state.slice().sort((a, b) => a.id > b.id);
                case "name":
                    return state.slice().sort((a, b) => a.name > b.name);
                case "amount":
                    return state.slice().sort((a, b) => +a.amount > +b.amount);
                case "price":
                    return state.slice().sort((a, b) => +a.price > +b.price);
                default:
                    return state.slice();
            }
        case "REVERSE":
            return state.slice().reverse();
        default:
            return state.slice();
    }
};

export default itemsTable;
