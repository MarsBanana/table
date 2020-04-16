import React from "react";
import { sort, reverse } from "../store/actions";
import { connect } from "react-redux";
import "./controls.css";

class Controls extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchedName: "",
        };
    }
    submit(event) {
        event.preventDefault();
        this.props.searchName(this.state.searchedName);
    }
    handleChange(event) {
        this.setState({ searchedName: event.target.value });
    }
    render() {
        return (
            <React.Fragment>
                <section>
                    <form className="control" onSubmit={(e) => this.submit(e)}>
                        <label>
                            <input type="text" placeholder="Search" onChange={(e) => this.handleChange(e)} />
                        </label>
                        <input type="submit" value="Search name" />
                    </form>
                    <input className="control" type="submit" value="Add item" onClick={() => this.props.changeAdd()} />
                    <br />
                    <label className="control">
                        sort by:
                        <select onChange={(event) => this.props.sort(event.target.value)}>
                            <option value="id">id</option>
                            <option value="name">name</option>
                            <option value="amount">amount</option>
                            <option value="price">price</option>
                        </select>
                        <input type="submit" value="Reverse sort" onClick={() => this.props.reverse()} />
                    </label>
                </section>
            </React.Fragment>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sort: (type) => dispatch(sort(type)),
        reverse: () => dispatch(reverse()),
    };
};

export default connect(null, mapDispatchToProps)(Controls);
