import React from "react";
import { connect } from "react-redux";
import TableView from "../components/tableView";

class Table extends React.Component {
    getItemByName(name) {
        let result = this.props.itemsArr.slice().findIndex((item) => name === item.name);
        return this.props.itemsArr[result];
    }
    render() {
        if (this.props.searchedName === "") {
            return <TableView itemsArr={this.props.itemsArr} searchName={this.props.searchName} />;
        } else {
            return <TableView itemsArr={[this.getItemByName(this.props.searchedName)]} searchName={this.props.searchName} />;
        }
    }
}

function mapStateToProps(state) {
    return { itemsArr: state };
}

export default connect(mapStateToProps)(Table);
