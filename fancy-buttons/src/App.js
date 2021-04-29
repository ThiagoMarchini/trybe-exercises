import React from 'react';
import './App.css';

    class App extends React.Component {
      constructor() {
        super();

        this.handleButtonOne = this.handleButtonOne.bind(this);
        this.handleButtonTwo = this.handleButtonTwo.bind(this);
        this.handleButtonThree = this.handleButtonThree.bind(this);
        this.toggleClass1 = this.toggleClass1.bind(this);
        this.toggleClass2 = this.toggleClass2.bind(this);
        this.toggleClass3 = this.toggleClass3.bind(this);

        this.state = {
          clicksBtnOne: 0,
          clicksBtnTwo: 0,
          clicksBtnThree: 0,
          active1: true,
          active2: true,
          active3: true,
        };
      }
      // Solução de troca de classe baseada em: https://stackoverflow.com/questions/42630473/react-toggle-class-onclick
      toggleClass1() {
        const currentState = this.state.active1;
        this.setState({ active1: !currentState });
      }

      toggleClass2() {
        const currentState = this.state.active2;
        this.setState({ active2: !currentState });
      }

      toggleClass3() {
        const currentState = this.state.active3;
        this.setState({ active3: !currentState });
      }

      handleButtonOne() {
        this.setState((prevState) => ({
          clicksBtnOne: prevState.clicksBtnOne + 1,
        }));
        this.toggleClass1();
      }
      
      handleButtonTwo() {
        this.setState((prevState) => ({
          clicksBtnTwo: prevState.clicksBtnTwo + 1,
        }));
        this.toggleClass2();
      }
      
      handleButtonThree() {
        // A única coisa diferente é a desconstrução.
        // Apenas um método diferente de fazer a mesma coisa
        // do que foi feito nas funções anteriores.
        this.setState(({ clicksBtnThree }) => ({
          clicksBtnThree: clicksBtnThree + 1,
        }));
        this.toggleClass3();
      }
      render() {
        return (
          <div>
            <button
              className={this.state.active1 ? 'green' : null}
              onClick={this.handleButtonOne}
            >Botão 1: {this.state.clicksBtnOne}</button>
            <button
              className={this.state.active2 ? 'green' : null}
              onClick={this.handleButtonTwo}>Botão 2: {this.state.clicksBtnTwo}</button>
            <button
              className={this.state.active3 ? 'green' : null}
              onClick={this.handleButtonThree}>Botão 3: {this.state.clicksBtnThree}</button>
          </div>
        );
      }
    }

    export default App;