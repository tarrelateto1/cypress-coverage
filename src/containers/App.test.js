import React from 'react'
import App from './App'
import { shallow, mount } from 'enzyme'
describe('test plus',()=>{
it('Should display calculator page correctly', () => {
  const calculator = shallow(<App />)

  const form = calculator.find('form')
  expect(form.length).toBe(1)
  expect(form.find('input').length).toBe(2)
  expect(form.find('button').length).toBe(4)
  expect(form.find('p.result').length).toBe(1)
});

it('Should display result for plus correctly', () => {
  const calculator = mount(<App />)
  // กำหนดค่า 1 และ 2
  const form = calculator.find('form')
  form.childAt(0).instance().value = 1
  form.childAt(1).instance().value = 2
  // กดปุ่มบวก
  form.find('button.plus').simulate('click')
  // ผลการบวกต้องเป็น 3
  expect(form.find('p.result').text()).toEqual('3')
});

it('Should return the correct from plus', () => {
  const calculator = new App()

  const result = calculator.plus(1, 2)
  expect(result).toEqual(3)
});
});
describe('test subtract',()=>{
  it('Should display calculator page correctly', () => {
    const calculator = shallow(<App />)
  
    const form = calculator.find('form')
    expect(form.length).toBe(1)
    expect(form.find('input').length).toBe(2)
    expect(form.find('button').length).toBe(4)
    expect(form.find('p.result').length).toBe(1)
  });
  
  it('Should display result for subtract correctly', () => {
    const calculator = mount(<App />)
    // กำหนดค่า 1 และ 2
    const form = calculator.find('form')
    form.childAt(0).instance().value = 10
    form.childAt(1).instance().value = 5
    // กดปุ่มบวก
    form.find('button.subtract').simulate('click')
    // ผลการบวกต้องเป็น 3
    expect(form.find('p.result').text()).toEqual('5')
  });
  
  it('Should return the correct from subtract', () => {
    const calculator = new App()
  
    const result = calculator.subtract(10, 8)
    expect(result).toEqual(2)
  });
  });
  describe('test multiple',()=>{
    it('Should display calculator page correctly', () => {
      const calculator = shallow(<App />)
    
      const form = calculator.find('form')
      expect(form.length).toBe(1)
      expect(form.find('input').length).toBe(2)
      expect(form.find('button').length).toBe(4)
      expect(form.find('p.result').length).toBe(1)
    });
    
    it('Should display result for multiple correctly', () => {
      const calculator = mount(<App />)
      // กำหนดค่า 1 และ 2
      const form = calculator.find('form')
      form.childAt(0).instance().value = 9
      form.childAt(1).instance().value = 10
      // กดปุ่มบวก
      form.find('button.multiple').simulate('click')
      // ผลการบวกต้องเป็น 3
      expect(form.find('p.result').text()).toEqual('90')
    });
    
    it('Should return the correct from multiple', () => {
      const calculator = new App()
    
      const result = calculator.multiple(9, 10)
      expect(result).toEqual(90)
    });
    });
    describe('test devide',()=>{
      it('Should display calculator page correctly', () => {
        const calculator = shallow(<App />)
      
        const form = calculator.find('form')
        expect(form.length).toBe(1)
        expect(form.find('input').length).toBe(2)
        expect(form.find('button').length).toBe(4)
        expect(form.find('p.result').length).toBe(1)
      });
      
      it('Should display result for divide correctly', () => {
        const calculator = mount(<App />)
        // กำหนดค่า 1 และ 2
        const form = calculator.find('form')
        form.childAt(0).instance().value = 4
        form.childAt(1).instance().value = 2
        // กดปุ่มบวก
        form.find('button.divide').simulate('click')
        // ผลการบวกต้องเป็น 3
        expect(form.find('p.result').text()).toEqual('2')
      });
      
      it('Should return the correct from divide', () => {
        const calculator = new App()
      
        const result = calculator.divide(9, 3)
        expect(result).toEqual(3)
      });
      });