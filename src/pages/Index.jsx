import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'


export default function Index({people, createPeople}){
    
    const [form, setForm] = useState({
        name:"",
        image:"",
        title: ""
    })

    const handleChange = event=>{
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = event =>{
        event.preventDefault()
        createPeople(form)
        setForm({
            name:'',
            image:'',
            title:''
        })
    }


    //loaded function
    const loaded = () =>{
        // this is implicitly returning the (stuff in here) as opposed to the { return(stuff in here)}
        return people.map(person=>(
            <div key={person._id} className="person">
                <Link to={`people/${person._id}`}>
                    <h1>{person.name}</h1>
                </Link>
                <img src={person.image} alt="" />
                <h3>{person.title}</h3>
            </div>
        ))
    }

    const loading = () => <h1>test....</h1>

    return (
     <section>
         <form onSubmit={handleSubmit}>
            <input 
                type="text"
                name="name"
                placeholder='name'
                value={form.name}
                onChange={handleChange}
            />
            <input 
                type="text" 
                name="image"
                placeholder='image'
                value={form.image}
                onChange={handleChange}
            />
            <input
                type="text"
                name="title" 
                placeholder='title'
                value={form.title}
                onChange={handleChange}    
            />
            <button type='submit'>Add Person</button>
         </form>

         {people ? loaded() : loading()}

     </section>
    )
}


