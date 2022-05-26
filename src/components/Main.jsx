import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { useState,useEffect } from 'react'
import Index from '../pages/Index'
import Show from '../pages/Show'


export default function Main(){

    const [people, setPeople] = useState(null)

    const url = 'https://full-stack-mern-rojas.herokuapp.com/people'

    const getPeople = async ()=>{
        const data = await fetch(url).then(res => res.json())
        setPeople(data)
    }

    const createPeople = async person =>{
        await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'Application/json'
            },
            body: JSON.stringify(person),
        })
        getPeople()
    }
   
    useEffect(()=>{getPeople()},[])

    return(
        <main>
            <Routes>
                <Route exact path='/'element={<Index people={people} createPeople={createPeople}/>} />
                <Route path='/people/:id' element={<Show people={people}/> }/>
            </Routes>
        </main>
        
    )
}