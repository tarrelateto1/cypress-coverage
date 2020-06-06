import React, { Component } from 'react';

class App extends Component {

  constructor() {
    super()
    this.state = {
      result: null,
    }
    this.elements = {}
    this.onPlus = this.onPlus.bind(this);
    this.onSubtract = this.onSubtract.bind(this);
    this.onMultiple = this.onMultiple.bind(this);
    this.onDivide = this.onDivide.bind(this);
  }

  render() {
    const { result } = this.state
    return (<div>
      <h1>Hello World!</h1>
        <form>
          <input type="number" defaultValue={ 0 } ref={ (el) => this.elements.firstValue = el }/>
          <input type="number" defaultValue={ 0 } ref={ (el) => this.elements.secondValue = el }/>
          <button type="button"  className="plus" onClick={ this.onPlus }>+</button>
          <button type="button" className="subtract" onClick={ this.onSubtract }>-</button>
          <button type="button" className="multiple" onClick={ this.onMultiple }>*</button>
          <button type="button" className="divide" onClick={ this.onDivide }>/</button>
          <p className='result'>{ result }</p>
        </form>
        </div>
    );
  }

  onPlus() {
    const firstValue = parseInt(this.elements.firstValue.value, 10)
    const secondValue = parseInt(this.elements.secondValue.value, 10)
    const resultPlus = this.plus(firstValue, secondValue)
    this.setState({
      result: resultPlus,
    });
  }

  plus(firstValue, secondValue) {
    return firstValue + secondValue
  }
  onSubtract(){
    const firstValue = parseInt(this.elements.firstValue.value, 10)
    const secondValue = parseInt(this.elements.secondValue.value, 10)
    const resultPlus = this.subtract(firstValue, secondValue)
    this.setState({
      result: resultPlus,
    });
  }
subtract(firstValue, secondValue){
  return firstValue - secondValue
}
  onMultiple(){
    const firstValue = parseInt(this.elements.firstValue.value, 10)
    const secondValue = parseInt(this.elements.secondValue.value, 10)
    const resultPlus = this.multiple(firstValue, secondValue)
    this.setState({
      result: resultPlus,
    });
  }

  multiple(firstValue, secondValue){
    return firstValue * secondValue
  }
  onDivide(){
    const firstValue = parseInt(this.elements.firstValue.value, 10)
    const secondValue = parseInt(this.elements.secondValue.value, 10)
    const resultPlus = this.divide(firstValue, secondValue)
    this.setState({
      result: resultPlus,
    });
  }
  divide(firstValue, secondValue){
    if(secondValue===0){
      return 0;
    } else{
      return firstValue/secondValue
    }
  }

}

export default App;
