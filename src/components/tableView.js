import React from "react";
import Item from "./item";
import Form from "./form";
import { deleteItem, sort } from "../store/actions";
import { connect } from "react-redux";
import "./tableView.css";

class TableView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            chooseItem: null,
            changingItem: false,
            index: null,
        };
    }
    componentDidMount() {
        this.props.sort("id");
    }
    changeForm(item, index) {
        this.setState({
            chooseItem: item,
            changingItem: !this.state.changingItem,
            index: index,
        });
    }
    deleteItem(id) {
        this.props.deleteItem(id);
    }
    render() {
        return (
            <React.Fragment>
                {this.state.changingItem ? (
                    <Form item={this.state.chooseItem} index={this.state.index} whichForm={true} submit={this.changeForm.bind(this)} />
                ) : null}
                <table>
                    <thead>
                        <tr key="head">
                            <td key="id">id</td>
                            <td key="name">name</td>
                            <td key="amount">amount</td>
                            <td key="price">price</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.itemsArr.map((item, i) => {
                            return (
                                <Item
                                    searchName={this.props.searchName}
                                    item={item}
                                    changeForm={this.changeForm.bind(this)}
                                    deleteItem={this.deleteItem.bind(this)}
                                    index={i}
                                />
                            );
                        })}
                    </tbody>
                </table>
            </React.Fragment>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sort: (type) => dispatch(sort(type)),
        deleteItem: (id) => dispatch(deleteItem(id)),
    };
};

export default connect(null, mapDispatchToProps)(TableView);
