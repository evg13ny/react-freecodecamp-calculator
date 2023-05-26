import './App.css';

function App() {
  return (
    <div className='App' id='app'>
      <Calculator />
    </div>
  );
}

const Calculator = () => {
  return (
    <div className='calculator'>
      <div className='exp'>exp</div>
      <div className='io'>io</div>
      <div className='ac'><button>AC</button></div>
      <div className='d'><button>/</button></div>
      <div className='m'><button>X</button></div>
      <div className='n7'><button>7</button></div>
      <div className='n8'><button>8</button></div>
      <div className='n9'><button>9</button></div>
      <div className='s'><button>-</button></div>
      <div className='n4'><button>4</button></div>
      <div className='n5'><button>5</button></div>
      <div className='n6'><button>6</button></div>
      <div className='a'><button>+</button></div>
      <div className='n1'><button>1</button></div>
      <div className='n2'><button>2</button></div>
      <div className='n3'><button>3</button></div>
      <div className='eq'><button>=</button></div>
      <div className='n0'><button>0</button></div>
      <div className='dec'><button>.</button></div>
    </div>
  );
}

export default App;