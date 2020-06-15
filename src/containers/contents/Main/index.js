import React, {Component} from "react"
import {Layout} from "antd";
import {bindActionCreators} from "redux";
import {_setValue} from "../../../stores/actions/add";
import {connect} from "react-redux";

const { Content} = Layout;

class Main extends Component {

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
    render(){
        const {result} = this.state
        return(
            <Content style={{margin: '0 16px'}}>
                <h1>Hello world!</h1>
                <form>
                    <input type="number" defaultValue={0} ref={(el) => this.elements.firstValue = el}/>
                    <input type="number" defaultValue={0} ref={(el) => this.elements.secondValue = el}/>
                    <button type="button" className="plus" onClick={this.onPlus}>+</button>
                    <button type="button" className="subtract" onClick={this.onSubtract}>-</button>
                    <button type="button" className="multiple" onClick={this.onMultiple}>*</button>
                    <button type="button" className="divide" onClick={this.onDivide}>/</button>
                    <p className='result'>{result}</p>
                    <h1> redux :{this.props.state.mathReducer.result}</h1>
                </form>

            </Content>
        )
    }
    onPlus() {
        const firstValue = parseInt(this.elements.firstValue.value, 10)
        const secondValue = parseInt(this.elements.secondValue.value, 10)
        const resultPlus = this.plus(firstValue, secondValue)
        this.setState({
            result: resultPlus,
        });
        this.props._setValue(resultPlus)
    }

    plus(firstValue, secondValue) {
        return firstValue + secondValue
    }

    onSubtract() {
        const firstValue = parseInt(this.elements.firstValue.value, 10)
        const secondValue = parseInt(this.elements.secondValue.value, 10)
        const resultSubtract = this.subtract(firstValue, secondValue)
        this.setState({
            result: resultSubtract,
        });
        this.props._setValue(resultSubtract)

    }

    subtract(firstValue, secondValue) {
        return firstValue - secondValue
    }

    onMultiple() {
        const firstValue = parseInt(this.elements.firstValue.value, 10)
        const secondValue = parseInt(this.elements.secondValue.value, 10)
        const resultMultiple = this.multiple(firstValue, secondValue)
        this.setState({
            result: resultMultiple,
        });
        this.props._setValue(resultMultiple)
    }

    multiple(firstValue, secondValue) {
        return firstValue * secondValue
    }

    onDivide() {
        const firstValue = parseInt(this.elements.firstValue.value, 10)
        const secondValue = parseInt(this.elements.secondValue.value, 10)
        const resultDivide = this.divide(firstValue, secondValue)
        this.setState({
            result: resultDivide,
        });
        this.props._setValue(resultDivide)

    }

    divide(firstValue, secondValue) {
        if (secondValue === 0) {
            return 0;
        } else {
            return firstValue / secondValue
        }
    }

}
const mapStatetoProps = (state) => {
    return {state};
}
const mapDispatchtoProps = (dispatch) => bindActionCreators({
    _setValue
}, dispatch)
export default connect(mapStatetoProps, mapDispatchtoProps)(Main);


