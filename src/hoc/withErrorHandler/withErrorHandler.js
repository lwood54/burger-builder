/***** creating an hoc that we can use to wrap any component and handle errors *****/

import React, { Component } from 'react';

import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Aux/Aux';

// we want to get our wrapped component and AXIOS object so that we can not only
// access the props, but also access the axios instance thtat will contain our error in this case
const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        state = {
            error: null
        };

        componentDidMount() {
            axios.interceptors.request.use(req => {
                this.setState({ error: null });
                return req;
            });
            axios.interceptors.response.use(
                res => res,
                error => {
                    this.setState({ error });
                }
            );
        }

        errorConfirmedHandler = () => {
            this.setState({
                error: null
            });
        };

        render() {
            console.log(this.errorConfirmedHandler);
            return (
                <Aux>
                    <Modal
                        show={this.state.error}
                        modalClosed={this.errorConfirmedHandler}
                    >
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrappedComponent {...this.props} />
                </Aux>
            );
        }
    };
};

export default withErrorHandler;
