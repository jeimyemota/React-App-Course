import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

//Below is pushing whatever is within the render to the index.js file which then pushes it to the root component in the html//
//This is called a root component. You can call it whatever you want//
//React hooks is a collection of functions exposed to you by react that you can use in functional components.
const app = props =>  {
  //state can only be used with Class extend components. You should only use state with care.
    //useState allows to use state in a functional component. It can only return an array with exactly 2 elements and only 2 elements.
    
const [ personsState, setPersonsState ] = useState({
    persons: [
      { name: 'Stephanie', age: 26 }, 
      { name: 'Manu', age: 29 },
      { name: 'Max', age: 28}
    ]
  });
  

   // this is a method. This will tell the onClick what to do. The name handler means that it's not an event that you are not actively calling but you are assigning as an event handler. 
  // if you assign a function as a value to the property, it becomes a method
 const switchNameHandler = () => {
      //console.log('Was Clicked!');
//   Don't do this: this.state.persons[0].name = 'Stephie';
      // setState allows us to access the state object and update it. It will ensure that react gets the update and it updates the DOM. setStates takes an object as an arguement and it will merge what you have within the brackets with the existing state. 
         setPersonsState({
          persons:[ 
              { name: 'Stephie', age: 26 },
              { name: 'Manuel', age: 29 },
              {name: 'Maximillian', age: 28 }
      ]
    });

  };


 return (
      //below is JSX.
      <div className="App">
       <h1> Hi, Im the React App </h1> 
       <p> This is really working </p>
       <button onClick={switchNameHandler}> Switch Name </button>
       <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
       <Person  name={personsState.persons[1].name} age={personsState.persons[1].age}> Hobbies: Racing </Person>
       <Person  name={personsState.persons[2].name} age={personsState.persons[2].age} />
      </div>
    );
     
    ///this below creates a method. This will take at least 3 arguements. The first is the element you want to render to the dom
    //The second arguement is the configuration. You can pass a js object
    //The third arguement is the amount of children. Children meaning what's nested in the div.
    //Example of Code: return React.createElement('div', null, 'h1', 'Hi, I\'m a React App!!');
   
    // The code above can only call one element, in our case 'div'. To call another element within the code, you need to replace
    // 'Hi, I\'m a React App!!' with React.createElement('Element', js object, text)
    //return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'Does this work now?'));
    // We dont use the above because it can become cumbersome. We use the method displayed in lines 6-13.
  } 

//below means if you import the file, you will import this class as it is the default. 
export default app;
//The class needs to have the render() method as it will call this method to render something to the screen. A react component will returned or render any html code that will display it on the screen.


 
//It is best practice to use just one root element (div). 