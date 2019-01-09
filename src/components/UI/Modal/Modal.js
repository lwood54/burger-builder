import React, { Component } from 'react';
import Aux from '../../../hoc/Aux/Aux';
import Backdrop from '../Backdrop/Backdrop';

import classes from './Modal.module.css';

class Modal extends Component {
    // We could also use PureComponent, but this would do more checks than we need for this
    // application
    // we are testing to see if Modal needs to update, so that we aren't rerendering unecessarily
    // NOTE:  the WRAPPING element controls the updating of the WRAPPED element
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.show !== this.props.show;
    }

    componentWillUpdate() {
        console.log('[Modal] WillUpdate');
    }
    render() {
        return (
            <Aux>
                <Backdrop
                    show={this.props.show}
                    clicked={this.props.modalClosed}
                />
                <div
                    className={classes.Modal}
                    style={{
                        transform: this.props.show
                            ? 'translateY(0)'
                            : 'translateY(-100vh)',
                        opacity: this.props.show ? '1' : '0'
                    }}
                >
                    {this.props.children}
                </div>
            </Aux>
        );
    }
}

export default Modal;
