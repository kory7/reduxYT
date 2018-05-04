import React, { Component } from 'react';
import Value from './Value';
import Control from './Control';
import PropTypes from 'prop-types';
import {connect, bindActionCreator} from 'react-redux';
import * as actions from '../actions';

const propTypes = {
};
const defaultProps = {
};
class Counter extends Component {
    constructor(props) {
        super(props);
    };
    render() {
        return(
            <div>
              <Value number={this.props.number} />
              <Control
                onPlus={this.props.handleIncrement}
                onSubtract={this.props.handleDecrement}
                />
            </div>
        );
    };
};
Counter.propTypes = propTypes;
Counter.defaultProps = defaultProps;

const mapStateToProps = (state) => {
  return {
    number: state.counter.number,
    color: state.ui.color
  };
}

const mapDispatchToProps= (dispatch) => {
  return{
    handleIncrement: () => {dispatch(actions.increment())},
    handleDecrement: () => {dispatch(actions.decrement())},
    handleSetColor: (color) => {dispatch(actions.setColor(color))}
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Counter);
