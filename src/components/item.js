import React from "react";
import "./item.css";

class Item extends React.Component {
    delete(id) {
        this.props.searchName("");
        this.props.deleteItem(id);
    }
    render() {
        if (this.props.item) {
            const { id, name, amount, price } = this.props.item;
            return (
                <React.Fragment>
                    <tr className={this.props.index % 2 !== 0 ? "colored" : null} key={id}>
                        <td key={id + "id"}>{id}</td>
                        <td key={id + "name"}>{name}</td>
                        <td key={id + "amount"}>{amount}</td>
                        <td key={id + "price"}>{price}</td>
                        <td key={id + "change"} className="ch" onClick={() => this.props.changeForm(this.props.item, this.props.index)}>
                            change
                        </td>
                        <td key={id + "delete"} className="del" onClick={() => this.delete(id)}>
                            delete
                        </td>
                    </tr>
                </React.Fragment>
            );
        } else return null;
    }
}

export default Item;
