import { regulateId } from "../localstorage/handleStorage";

const ADD = "ADD";
const DELETE = "DELETE";
const CHANGE = "CHANGE";
const SORT = "SORT";
const REVERSE = "REVERSE";

let itemsAmount = regulateId();

export const addItem = (name, amount, price) => ({
    type: ADD,
    id: itemsAmount++,
    name,
    amount,
    price,
});

export const deleteItem = (id) => ({
    type: DELETE,
    id,
});

export const changeItem = (id, name, amount, price, index) => ({
    type: CHANGE,
    id,
    name,
    amount,
    price,
    index,
});

export const sort = (sortType) => ({
    type: SORT,
    sortType,
});

export const reverse = () => ({
    type: REVERSE,
});
