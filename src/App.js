import { useState } from 'react';
import './App.css';

function App() {
  return (
    <div className='App' id='app'>
      <Calculator />
    </div>
  );
}

const Calculator = () => {
  const [exp, setExp] = useState('');
  const [io, setIO] = useState('0');
  const [solved, setSolved] = useState(false);
  const operators = ['*', '/', '+', '-'];

  const clear = () => {
    setExp('');
    setIO('0');
  }

  const op = (operator) => {
    let wcExp = exp;

    if (solved) {
      wcExp = io;
      setSolved(false);
    }

    if (operator !== '-') {
      wcExp = wcExp.replace(/[*\/+-]+$/, '');
    } else if (operator === '-' && wcExp.endsWith('-')) {
      return;
    }

    setExp(wcExp + operator);
    setIO(operator);
  }

  const n = (digit) => {
    let wcExp = exp;
    let wcIO = io;

    if (solved) {
      wcExp = '';
      wcIO = '';
      setSolved(false);
    }

    if (digit === '0' && wcExp === '0') {
      return;
    }

    if (operators.includes(io)) {
      wcIO = '';
    }

    if (wcIO === '0') {
      wcIO = '';
    }

    if (digit === '.') {
      if (wcIO.includes('.')) {
        return;
      }

      if (wcIO === '') {
        wcIO = '0';
      }

      if (wcExp === '' || /[*\/+-]$/.test(wcExp)) {
        wcExp += '0';
      }
    }

    setExp(wcExp + digit);
    setIO(wcIO + digit);
  }

  const solve = () => {
    let wcExp = exp;

    wcExp = wcExp.replace(/[*\/+-]+$/, '');

    const answer = eval(wcExp).toString();

    setExp(wcExp + '=' + answer);
    setIO(answer);
    setSolved(true);
  }

  return (
    <div className='calculator'>
      <div className='exp'>{exp}</div>
      <div className='io' id='display'>{io}</div>
      <div className='ac'>
        <button onClick={clear} id='clear'>AC</button>
      </div>
      <div className='d'>
        <button onClick={() => op('/')} id='divide'>/</button>
      </div>
      <div className='m'>
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
      <div className='s'>
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
      <div className='a'>
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
      <div className='eq'>
        <button onClick={solve} id='equals'>=</button>
      </div>
      <div className='n0'>
        <button onClick={() => n('0')} id='zero'>0</button>
      </div>
      <div className='dec'>
        <button onClick={() => n('.')} id='decimal'>.</button>
      </div>
    </div>
  );
}

export default App;