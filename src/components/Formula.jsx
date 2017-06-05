import React from 'react';
import { forbidExtraProps } from 'airbnb-prop-types';

import TextBox from './TextBox';
import FormuaTabs from './FormulaTabs';

const propTypes = forbidExtraProps({
});

export const defaultProps = {
};


export default class Formula extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {
  }

  /**
   *
   *
   * @param {any} nextProps
   *
   * @memberof Formula
   */
  componentWillReceiveProps() {
  }

  /**
   *
   *
   * @param {any} nextProps
   * @param {any} nextState
   *
   * @memberof Formula
   */
  // shouldComponentUpdate() {
  // }

  /**
   *
   *
   * @param {any} prevProps
   * @param {any} prevState
   *
   * @memberof Formula
   */
  componentDidUpdate() {
  }

  render() {
    return (
      <div>
        <TextBox />
        <FormuaTabs />
      </div>
    );
  }
}

Formula.propTypes = propTypes;
Formula.defaultProps = defaultProps;
