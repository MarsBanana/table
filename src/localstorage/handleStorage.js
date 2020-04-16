export const loadState = () => {
    try {
        const serializedState = localStorage.getItem("state");
        if (serializedState === null) {
            return [];
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return [];
    }
};

export const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem("state", serializedState);
    } catch (err) {}
};

export const regulateId = () => {
    let state = loadState();
    let arr = [];
    for (let i = 0; i < state.length; i++) {
        arr.push(state[i].id);
    }
    let itemsAmount = Math.max(...arr);
    itemsAmount > 0 ? itemsAmount++ : (itemsAmount = 0);
    return itemsAmount;
};
