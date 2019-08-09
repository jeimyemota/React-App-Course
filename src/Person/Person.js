<<<<<<< HEAD

//EX6 arrow function syntax. Use instead of this keyword.
import React from 'react';
// Props is an argument passed to Component function
const Person = ( props ) => {

		//a component is a function returning some jsx.
// children refers to any elements between the opening and closing tag of the component
    return (
        <div> 
        <p>I'm a {props.name} and I am {props.age}</p>
        <p> {props.children}</p>
        </div>
            )
};
 
=======

//EX6 arrow function syntax. Use instead of this keyword.
import React from 'react';
// Props is an argument passed to Component function
const Person = ( props ) => {

		//a component is a function returning some jsx.
// children refers to any elements between the opening and closing tag of the component
    return (
        <div> 
        <p>I'm a {props.name} and I am {props.age}</p>
        <p> {props.children}</p>
        </div>
            )
};
 
>>>>>>> 278a7a30853ec4b77b428c453a422301badbc041
export default Person;