import { useState } from "react"

const App3 = () => {
    const [person,setPerson] = useState({firstName: "", email: "", age: "",})
    const [people,setPeople] = useState([]);

    const handleChange = e => {
        const name = e.target.name;
        const value = e.target.value;

        setPerson({...person, [name]: value});
    }
    const handleSubmit = e => {
        e.preventDefault();
        if (person.age && person.email && person.firstName) {
            const newPerson = {...person, id: new Date().getTime().toString()};
            setPeople(people => [...people,newPerson]);
            setPerson({firstName: "", email: "", age: "",});
        }
    }

    return (
        <>
        <article>
            <form onSubmit={ handleSubmit }>
                <label htmlFor="firstName">Name : </label>
                <input 
                    type="text"
                    name="firstName"
                    id="firstName"
                    value={ person.firstName }
                    onChange={ handleChange }
                />
                <label htmlFor="email">Email : </label>
                <input 
                    type="text"
                    name="email"
                    id="email"
                    value={ person.email }
                    onChange={ handleChange }
                />
                <label htmlFor="age">Age : </label>
                <input 
                    type="text"
                    name="age"
                    id="age"
                    value={ person.age }
                    onChange={ handleChange }
                />
                <button type="submit">Add Person</button>
            </form>
            {people.map(person => {
                const { firstName, age, email, id } = person;
                return (
                    <div key={ id }>
                        <h4>{ firstName }</h4>
                        <h5>{ email }</h5>
                        <h6>{ age }</h6>
                    </div>
                )
            })}
        </article>
        </>
    )
} 

export default App3;

// or (which is better)

// import { useState, useEffect, useCallback, useRef } from 'react';

// function App() {
//   const firstName = useRef(''); 
//   const email = useRef(''); 
//   const age = useRef(''); 
//   const [people, setPeople] = useState([]);

//   const handleSubmit = e => {
//     e.preventDefault();

//     if (age.current.value && email.current.value && firstName.current.value) {
//       const newPerson = { 
//         firstName: firstName.current.value, 
//         email: email.current.value,
//         age: age.current.value,
//         id: new Date().getTime().toString()
//       }
//       setPeople(prevState => [...prevState, newPerson]);
//       firstName.current.value = "";
//       email.current.value = "";
//       age.current.value = "";
//     }
//   }

//   return (
//     <>
//       <article>
//         <form onSubmit={handleSubmit}>
//           <div>
//             <label htmlFor="firstName">Name: </label>
//               <input 
//                 type="text"
//                 name="firstName"
//                 id="firstName"
//                 ref={firstName}
//               />
//           </div>
//           <div>
//             <label htmlFor="email">Email: </label>
//               <input 
//                 type="text"
//                 name="email"
//                 id="email"
//                 ref={email}
//               />
//           </div>
//           <div>
//             <label htmlFor="age">Age: </label>
//               <input 
//                 type="text"
//                 name="age"
//                 id="age"
//                 ref={age}
//               />
//           </div>
//           <button type="submit">Add Person</button>
//         </form>
//         {people.map(person => {
//           const {firstName, email, age, id} = person;
//           return (
//             <div key={id}>
//               <h1>{firstName}</h1>
//               <p>{email}</p>
//             </div>
//           )
//         })}
//       </article>
//     </>
//   )
// }

// export default App;