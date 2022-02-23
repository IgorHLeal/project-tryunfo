import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <div>
        <h1>Adicionar nova carta</h1>
        <form className="form">
          <label htmlFor="name-input">
            Nome
            <input
              type="text"
              data-testid="name-input"
            />
          </label>

          <label htmlFor="description-input">
            Descrição
            <input
              type="textarea"
              data-testid="description-input"
            />
          </label>

          <label htmlFor="attr1-input">
            Atrr01
            <input
              type="number"
              data-testid="attr1-input"
            />
          </label>

          <label htmlFor="attr2-input">
            Atrr02
            <input
              type="number"
              data-testid="attr2-input"
            />
          </label>

          <label htmlFor="attr3-input">
            Atrr03
            <input
              type="number"
              data-testid="attr3-input"
            />
          </label>

          <label htmlFor="image-input">
            <input
              type="text"
              data-testid="image-input"
            />
          </label>

          <label htmlFor="rare-input">
            Raridade
            <select
              data-testid="rare-input"
            >
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito raro</option>
            </select>
          </label>

          <label htmlFor="trunfo-input">
            <input
              type="checkbox"
              data-testid="trunfo-input"
            />
          </label>

          <button
            type="submit"
            data-testid="save-button"
          >
            Salvar
          </button>
        </form>

      </div>
    );
  }
}

export default Form;
