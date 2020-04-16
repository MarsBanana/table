import React from "react";
import Controls from "./containers/controls";
import Table from "./containers/tableC";
import Form from "./components/form";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            isAddOn: false,
            searchedName: "",
        };
    }
    changeAdd() {
        this.setState({ isAddOn: !this.state.isAddOn });
    }
    searchName(name) {
        this.setState({ searchedName: name });
    }
    render() {
        const itemTemp = {
            id: "id",
            name: "name",
            amount: "amount",
            price: "price",
        };
        return (
            <React.Fragment>
                {this.state.isAddOn ? <Form item={itemTemp} submit={this.changeAdd.bind(this)} /> : null}
                <Controls searchName={this.searchName.bind(this)} changeAdd={this.changeAdd.bind(this)} />
                <Table searchedName={this.state.searchedName} searchName={this.searchName.bind(this)} />
            </React.Fragment>
        );
    }
}

export default App;
