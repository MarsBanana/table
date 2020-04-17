import React from "react";
import { connect } from "react-redux";
import { changeItem, addItem } from "../store/actions";
import "./form.css";
class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.item.id,
            name: props.item.name,
            amount: props.item.amount,
            price: props.item.price,
        };
    }
    handleChange(event) {
        switch (event.target.name) {
            case "name":
                this.setState({ name: event.target.value });
                break;
            case "amount":
                this.setState({ amount: event.target.value });
                break;
            case "price":
                this.setState({ price: event.target.value });
                break;
            default:
                return;
        }
    }
    handleSubmit(event) {
        event.preventDefault();
        const id = this.state.id;
        const name = this.state.name;
        const amount = this.state.amount;
        const price = this.state.price;
        if (this.props.whichForm) {
            this.props.changeItem(id, name, amount, price, this.props.index);
            this.props.submit(null);
        } else {
            this.props.addItem(name, amount, price);
            this.props.submit();
        }
    }
    render() {
        let { name, amount, price } = this.props.item;
        return (
            <form className="form" onSubmit={(e) => this.handleSubmit(e)}>
                <label>
                    <span>name:</span>
                    <input name="name" type="text" defaultValue={name} onChange={(e) => this.handleChange(e)} />
                </label>
                <label>
                    <span>amount:</span>
                    <input name="amount" type="text" defaultValue={amount} onChange={(e) => this.handleChange(e)} />
                </label>
                <label>
                    <span>price:</span>
                    <input name="price" type="text" defaultValue={price} onChange={(e) => this.handleChange(e)} />
                </label>
                <input type="submit" size="20" value="Confirm" />
            </form>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeItem: (id, name, amount, price, index) => dispatch(changeItem(id, name, amount, price, index)),
        addItem: (name, amount, price) => dispatch(addItem(name, amount, price)),
    };
};

export default connect(null, mapDispatchToProps)(Form);
