import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      description: '',
      attr1: '0',
      attr2: '0',
      attr3: '0',
      image: '',
      rarity: 'normal',
      trunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      saveCards: [],
    };
  }

  handleChange = ({ target }) => {
    const { name, value, checked, type } = target;
    this.setState({
      [name]: type === 'checkbox' ? checked : value,
    }, this.validationForm);
  };

  // Concluído com ajuda do Pedro Fideles - Turma 19A
  validationForm = () => {
    const { name, description, image, rarity, attr1, attr2, attr3 } = this.state;
    const minValue = 90;
    const maxValue = 210;

    // Faltava a conversão de string para number;
    const atributo1 = parseInt(attr1, 10);
    const atributo2 = parseInt(attr2, 10);
    const atributo3 = parseInt(attr3, 10);

    if (
      name && description && image && rarity
      && (atributo1 + atributo2 + atributo3) <= maxValue
      && atributo1 >= 0 && atributo1 <= minValue
      && atributo2 >= 0 && atributo2 <= minValue
      && atributo3 >= 0 && atributo3 <= minValue
    ) this.setState({ isSaveButtonDisabled: false });
    else this.setState({ isSaveButtonDisabled: true });
  }

  // Concluído com ajuda do Pedro Fideles - Turma 19A
  // As chaves estavam com o nome errado, por isso os teste falharam
  saveButton = () => {
    this.setState((prevState) => ({
      name: '',
      description: '',
      attr1: '0',
      attr2: '0',
      attr3: '0',
      image: '',
      rarity: 'normal',
      trunfo: false,
      saveCards: [
        ...prevState.saveCards,
        {
          name: prevState.name,
          description: prevState.description,
          attr1: prevState.attr1,
          attr2: prevState.attr2,
          attr3: prevState.attr3,
          image: prevState.image,
          rarity: prevState.rarity,
          trunfo: prevState.trunfo,
        },
      ],
    }), () => this.validateSuperTrunfo());
  }

  // Requisito 7 - Concluído com ajuda do Danillo - Turma 19A
  validateSuperTrunfo = () => {
    const { saveCards } = this.state;
    const validation = saveCards.some((card) => card.trunfo);
    this.setState({ hasTrunfo: validation });
  }

  render() {
    /* const { saveCards } = this.state; */
    const {
      name,
      description,
      attr1,
      attr2,
      attr3,
      image,
      rarity,
      trunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      saveCards,
    } = this.state;

    return (
      <div>
        <h1>Tryunfo</h1>
        <main>
          <Form
            /* { ...this.state } */
            cardName={ name }
            cardDescription={ description }
            cardAttr1={ attr1 }
            cardAttr2={ attr2 }
            cardAttr3={ attr3 }
            cardImage={ image }
            cardRare={ rarity }
            cardTrunfo={ trunfo }
            onInputChange={ this.handleChange }
            isSaveButtonDisabled={ isSaveButtonDisabled }
            onSaveButtonClick={ this.saveButton }
            hasTrunfo={ hasTrunfo }
          />

          <aside>
            <h2>Preview</h2>
            <Card
              /* { ...this.state } */
              saveCards={ saveCards }
              cardName={ name }
              cardDescription={ description }
              cardAttr1={ attr1 }
              cardAttr2={ attr2 }
              cardAttr3={ attr3 }
              cardImage={ image }
              cardRare={ rarity }
              cardTrunfo={ trunfo }
            />
          </aside>
        </main>
      </div>
    );
  }
}

export default App;
