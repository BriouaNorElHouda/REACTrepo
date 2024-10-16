class ClickB3 extends React.Component {
    constructor(props) {
    super(props);
    this.state = { clicked: false };
    this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
    this.setState({ clicked: true });
    }
    render() {
    return (
    <div>
    <h1>The Button was  
  
    {this.state.clicked ? 'clicked' : 'not clicked'}
  
    </h1>
    <button key ={1} onClick={this.handleClick}>button1{this.props.key}</button>
    <button key ={2} onClick={this.handleClick}>button2{this.props.key}</button>
    <button key ={3} onClick={this.handleClick}>button3{this.props.key}</button>
    </div>
    );
    }
   } 
  export default ClickB3;
  //////////////////////////////////////////////////////EXO1-1//////////////////////////////////////////////////////////
  class ClickB extends React.Component {
    constructor(props) {
    super(props);
    this.state = { clicked: false };
    this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
    this.setState({ clicked: true });
    }
    render() {
    return (
    <div>
    <button  onClick={this.handleClick}>Click me!</button>
    <h1 style={{color: "red"}}>
    {this.state.clicked ? 'Clicked' : ''}
    </h1>
    </div>
    );
    }
   } 
  export default ClickB;

  //////////////////////////////////////////////////////EXO1-2//////////////////////////////////////////////////////////////////
  import "./App.css";
import React, { useState } from "react";

function TabGroup() {
  const [active, setActive] = useState(types[0]);
  return (
    <>
      <div>
        {types.map((type) => (
          <button
            key={type}
            active={active === type}
            onClick={() => setActive(type)}
          >
           Button {type}
          </button>
        ))}
      </div>
      <p />
      <p> The Button {active} was clicked</p>
    </>
  );
}

const types = ["1", "2", "3"];
export default function App() {
  return (
    <>
      <TabGroup />
    </>
  );
}


//////////////////////////////////////////////////EXO1-3////////////////////////////////////////////////////////////
import React, { useState } from "react";


function App() {
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount(count + 1);
  };
  return (
    <div className="app">
      <button onClick={incrementCount}>Click</button>
      <h1>Compteur {count}</h1>
      
    </div>
  );
}

export default App;
//////////////////////////////////////////////////EXO1-4/////////////////////////////////////
function App() {
    const [count, setCount] = useState(0);
    const incrementCount = () => {
      setCount(count + 1);
    };
    const decrementCount = () => {
      setCount(count - 1);
    };
    return (
      <div >
        <button onClick={incrementCount}>Inc</button>
        <button onClick={decrementCount}>Dec</button>
        <h1>Compteur {count}</h1>
        
      </div>
    );
  }
  export default App;
  //////////////////////////////////////////////////////////////////////
  class ClickB extends React.Component {
    constructor(props) {
    super(props);
    this.state = { clicked: false };
    this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
    this.setState({ clicked: true });
    }
    render() {
    return (
    <div>
    <button  onClick={this.handleClick}>Click me!</button>
    <h1 style={{color: "red"}}>
    {this.state.clicked ? 'Clicked' : ''}
    </h1>
    </div>
    );
    }
   } 
  export default ClickB;

  //////////////////////////////////////////////////////EXO1-2//////////////////////////////////////////////////////////////////
  import "./App.css";
import React, { useState } from "react";

function TabGroup() {
  const [active, setActive] = useState(types[0]);
  return (
    <>
      <div>
        {types.map((type) => (
          <button
            key={type}
            active={active === type}
            onClick={() => setActive(type)}
          >
           Button {type}
          </button>
        ))}
      </div>
      <p />
      <p> The Button {active} was clicked</p>
    </>
  );
}

const types = ["1", "2", "3"];
export default function App() {
  return (
    <>
      <TabGroup />
    </>
  );
}


//////////////////////////////////////////////////EXO1-3////////////////////////////////////////////////////////////
import React, { useState } from "react";


function App() {
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount(count + 1);
  };
  return (
    <div className="app">
      <button onClick={incrementCount}>Click</button>
      <h1>Compteur {count}</h1>
      
    </div>
  );
}

export default App;
//////////////////////////////////////////////////EXO1-4/////////////////////////////////////
function App() {
    const [count, setCount] = useState(0);
    const incrementCount = () => {
      setCount(count + 1);
    };
    const decrementCount = () => {
      setCount(count - 1);
    };
    return (
      <div >
        <button onClick={incrementCount}>Inc</button>
        <button onClick={decrementCount}>Dec</button>
        <h1>Compteur {count}</h1>
        
      </div>
    );
  }
  export default App;
  /////////////////////////////////EXO1-2TD4///////////////////////////////////////
  
function   ToggleButton() {
  const [toggle, setToggle] = useState(false)
  return (
    <>
      <button 
            onClick={() => setToggle(!toggle)} 
           >
          Toggle Button
      </button>
      {toggle && (
         <h1 style={{color: "red"}}>
          Clicked
         </h1>
      )}
      {!toggle && (
         <h1 style={{color: "red"}}>
         Not Clicked
         </h1>
      )}
    </>
  )
}
export default  ToggleButton;


//////////////////////////////////EXO-3TD4///////////////////////////////////////////
function EXO3() {
  const [active, setActive] = useState(elems[0]);
  return (
    <>
      <div>
        {elems.map((elem) => (
          <button
            key={elem}
            active={active === elem}
            onClick={() => setActive(elem)}
          >
           Button {elem}
          </button>
        ))}
      </div>
      <p />
      <p> The Button {active} was clicked</p>
    </>
  );
}

const elems = ["1", "2", "3"];
export default function App() {
  return (
    <>
      <EXO3 />
    </>
  );
}

//////////////////////////EXO3TD1//////////////////////////

function App() {
  const [count, setCount] = useState(0);
  
  return (
    <div >
      <button onClick={setCount(count + 1)}>Inc</button>
      <button onClick={setCount(count - 1)}>Dec</button>
      <h1>Compteur {count}</h1>
      
    </div>
  );
}
export default App;
/////////////////////////////////////EXO2TPQ1///////////////////////////////

class DisplayTab extends React.Component {
  render() {
    let tab = ['Hello','World','from','react'];
   let DisplayTab = tab.map ((e) =>
  <li> {e} </li> );
  return(
  <>
  <ul>
  {DisplayTab}
  </ul>
  </>)
  } }
export default DisplayTab;

/////////////////////////////EXO2TPQ2////////////////////////////////////////////

class Exo2Q2 extends React.Component {
  render() {
  let tab = ["hello","world","from","react"].map ((e,i) => 
  <li key ={i}> Element {i+1} is : {e}</li> );
  return(
  <div>
  <ul>
  { tab} 
  </ul>
  </div>)
  }
  }
  export default Exo2Q2;
  /////////////////////////////////EXO2Q3TP///////////////////////////////////
  
import { useState } from 'react';

export default function App() {
  const [distab, setDistab] = useState(true);
  const removeElement = () => {
    setDistab((prev) => !prev);
  };
  let tab = ["hello","world","from","react"].map ((e,i) => 
  <li onClick={ removeElement} key ={i}> Element {i+1} is : {e}</li> );
  return (
    <>
      <br />
      {distab && (
      
        <ul>{ tab} </ul>
      )}
    </>
  );
}
~~~~~~~~~~~~~~~~~~~~~~~~~~~ãllthe items~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
class Exo2Q2 extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = { removeElement: false };
    this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick() {
    this.setState(["hello","world","from","react"].filter);
    }
  render() {
  let tab = ["hello","world","from","react"].map ((e,i) => 
  <li onClick={this.handleClick} key ={i}> Element {i+1} is : {e}</li> );
  return(
  <>
  <ul>
  { tab} 
  </ul>
  </>)
  }
  }
  export default Exo2Q2;
  ///////////////////////////////EXO3TP/////////////////////////////////
  import {useState} from 'react';

function Random ()  {
  const [num, setNum] = useState(0);
  var maxNum = 10;

  function randNum() {
    return Math.floor(Math.random() * maxNum +1);
   
  }
  
  const handleClick = () => {
    setNum(randNum(0,10));
  };

  return (
    <>
      <h1>number is: {num}</h1>
      <button style={{color: "#00CED1"}} onClick={handleClick}> Generate Random</button>
      <h1 style={{color: "#00CED1"}}> {num===maxNum? ' 🎉🎊You Win🎊🎉' : ''} </h1>
      <button style={{color: "#00CED1"}}onClick={handleClick}> {num!==maxNum? '😭You lose, try again😭' : ''} </button>
      
    </>
  );
};

export default Random;
//////////////////////////////EXO4TPQ1//////////////////////
import React from 'react';

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleChangee = this.handleChangee.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  
  handleChange(event) {
    this.setState({valueu: event.target.valueu});
  }
  handleChangee(event) {
    this.setState({valuep: event.target.valuep});
  }

  handleSubmit(event) {
    alert('Login information was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Username:
          <input type="text" value={this.state.valueu} onChange={this.handleChange} /> <br></br>
          Password:
          <input type="text" value={this.state.valuep} onChange={this.handleChangee} />
        </label><br></br>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
export default NameForm;
