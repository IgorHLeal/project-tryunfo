import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SuperTrunfo extends Component {
  render() {
    const { checked, onChange, hasTrunfo } = this.props;
    const isThereSuperTrunfo = (
      <label htmlFor="trunfo-input">
        Super Trunfo
        <input
          type="checkbox"
          data-testid="trunfo-input"
          id="trunfo-input"
          name="trunfo"
          checked={ checked }
          onChange={ onChange }
        />
      </label>
    );

    const message = <p>Você já tem um Super Trunfo em seu baralho</p>;

    return hasTrunfo ? message : isThereSuperTrunfo;
  }
}

SuperTrunfo.propTypes = {
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
};

export default SuperTrunfo;
