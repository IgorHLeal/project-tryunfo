import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    return (
      <div>
        <h1>Adicionar nova carta</h1>
        <form className="form">
          <label htmlFor="name-input">
            Nome
            <input
              type="text"
              data-testid="name-input"
              id="name-input"
              name="name"
              value={ cardName }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="description-input">
            Descrição
            <input
              type="textarea"
              data-testid="description-input"
              id="description-input"
              name="description"
              value={ cardDescription }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="attr1-input">
            Atrr01
            <input
              type="number"
              data-testid="attr1-input"
              id="attr1-input"
              name="attr1"
              value={ cardAttr1 }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="attr2-input">
            Atrr02
            <input
              type="number"
              data-testid="attr2-input"
              id="attr2-input"
              name="attr2"
              value={ cardAttr2 }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="attr3-input">
            Atrr03
            <input
              type="number"
              data-testid="attr3-input"
              id="attr3-input"
              name="attr3"
              value={ cardAttr3 }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="image-input">
            <input
              type="text"
              data-testid="image-input"
              id="image-input"
              name="image"
              value={ cardImage }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="rare-input">
            Raridade
            <select
              data-testid="rare-input"
              id="rare-input"
              name="rarity"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito raro</option>
            </select>
          </label>

          

          {/* {
            hasTrunfo
              ? <p>Você já tem um Super Trunfo em seu baralho</p>
              : (
                <label htmlFor="trunfo-input">
                  Super Trunfo
                  <input
                    type="checkbox"
                    data-testid="trunfo-input"
                    id="trunfo-input"
                    name="trunfo"
                    checked={ cardTrunfo }
                    onChange={ onInputChange }
                  />
                </label>
              )
          } */}

          <button
            type="button"
            data-testid="save-button"
            id="save-button"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          >
            Salvar
          </button>
        </form>

      </div>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
