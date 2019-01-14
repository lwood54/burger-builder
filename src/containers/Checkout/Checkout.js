import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from '../ContactData/ContactData';

export class Checkout extends Component {
    state = {
        ingredients: {
            salad: 0,
            meat: 0,
            cheese: 0,
            bacon: 0
        }
    };

    componentDidMount() {
        /////////////// ALTERNATE, I think better, or at least makes more sense, WAY ////////////
        // console.log('INGREDIENTS: ', this.props.location.state.ingredients);
        // const ingredients = { ...this.props.location.state.ingredients };
        // console.log(this.props.location);
        ////// WAY HE SHOWED IN COURSE ////////
        const ingredients = {};
        const query = new URLSearchParams(this.props.location.search);
        for (let param of query.entries()) {
            ingredients[param[0]] = +param[1]; // using + converts string into a number
        }
        this.setState({ ingredients });
    }

    checkoutContinuedHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    };

    checkoutCanceledHandler = () => {
        this.props.history.goBack();
    };
    render() {
        return (
            <div>
                <CheckoutSummary
                    ingredients={this.state.ingredients}
                    checkoutContinued={this.checkoutContinuedHandler}
                    checkoutCanceled={this.checkoutCanceledHandler}
                />
                <Route
                    path={this.props.match.path + '/contact-data'}
                    component={ContactData}
                />
            </div>
        );
    }
}

export default Checkout;
