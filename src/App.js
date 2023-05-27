import { useState } from 'react';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Calculator />
    </div>
  );
}

const Calculator = () => {
  const [exp, setExp] = useState('');
  const [res, serRes] = useState('0');
  const [solved, setSolved] = useState(false);
  const operators = ['*', '/', '+', '-'];

  const clear = () => {
    setExp('');
    serRes('0');
  }

  const op = (operator) => {
    let clearExp = exp;

    if (solved) {
      clearExp = res;
      setSolved(false);
    }

    if (operator !== '-') {
      clearExp = clearExp.replace(/[*/+-]+$/, '');
    } else if (operator === '-' && clearExp.endsWith('-')) {
      return;
    }

    setExp(clearExp + operator);
    serRes(operator);
  }

  const n = (digit) => {
    let clearExp = exp;
    let clearRes = res;

    if (solved) {
      clearExp = '';
      clearRes = '';
      setSolved(false);
    }

    if (digit === '0' && clearExp === '0') {
      return;
    }

    if (operators.includes(res) || clearRes === '0') {
      clearRes = '';
    }

    if (digit === '.') {
      if (clearRes.includes('.')) {
        return;
      }

      if (clearRes === '') {
        clearRes = '0';
      }

      if (clearExp === '' || /[*/+-]$/.test(clearExp)) {
        clearExp += '0';
      }
    }

    setExp(clearExp + digit);
    serRes(clearRes + digit);
  }

  const solve = () => {
    let clearExp = exp;

    clearExp = clearExp.replace(/[*/+-]+$/, '');

    const answer = eval(clearExp).toString();

    setExp(clearExp + '=' + answer);
    serRes(answer);
    setSolved(true);
  }

  return (
    <div className='calculator'>
      <div className='exp'>{exp}</div>
      <div className='res' id='display'>{res}</div>
      <div className='ac'>
        <button onClick={clear} id='clear'>AC</button>
      </div>
      <div className='divide'>
        <button onClick={() => op('/')} id='divide'>/</button>
      </div>
      <div className='multiply'>
        <button onClick={() => op('*')} id='multiply'>X</button>
      </div>
      <div className='n7'>
        <button onClick={() => n('7')} id='seven'>7</button>
      </div>
      <div className='n8'>
        <button onClick={() => n('8')} id='eight'>8</button>
      </div>
      <div className='n9'>
        <button onClick={() => n('9')} id='nine'>9</button>
      </div>
      <div className='subtract'>
        <button onClick={() => op('-')} id='subtract'>-</button>
      </div>
      <div className='n4'>
        <button onClick={() => n('4')} id='four'>4</button>
      </div>
      <div className='n5'>
        <button onClick={() => n('5')} id='five'>5</button>
      </div>
      <div className='n6'>
        <button onClick={() => n('6')} id='six'>6</button>
      </div>
      <div className='add'>
        <button onClick={() => op('+')} id='add'>+</button>
      </div>
      <div className='n1'>
        <button onClick={() => n('1')} id='one'>1</button>
      </div>
      <div className='n2'>
        <button onClick={() => n('2')} id='two'>2</button>
      </div>
      <div className='n3'>
        <button onClick={() => n('3')} id='three'>3</button>
      </div>
      <div className='equals'>
        <button onClick={solve} id='equals'>=</button>
      </div>
      <div className='n0'>
        <button onClick={() => n('0')} id='zero'>0</button>
      </div>
      <div className='decimal'>
        <button onClick={() => n('.')} id='decimal'>.</button>
      </div>
    </div>
  );
}

export default App;