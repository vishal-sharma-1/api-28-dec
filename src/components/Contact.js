import React, { useState } from 'react'

export default function Contact() {
    const [inputs, setInputs] = useState({})
    const handleInput = (event) => {
        const name = event.target.name
        const value = event.target.value
        setInputs({ ...inputs, [name]: value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('submit')
    }
    return (
        <div>
            <div className='container'>
                <h1 style={{ color: "orange", textAlign: "center", padding: "20px", fontSize: "50px", fontWeight: "bold" }}>CONTACT US </h1>
                <div className='row'>
                    <div className='col-md-4'>
                        <form onSubmit={handleSubmit} >
                            <div className='mb-3'>
                                <input type='text' name='name' placeholder='YOUR NAME HERE' onChange={handleInput} value={inputs.name} className='form-control' />
                            </div>
                            <div className='mb-3'>
                                <input type='text' name='email' placeholder='YOUR EMAIL HERE' onChange={handleInput} value={inputs.email} className='form-control' />
                            </div>
                            <button className='btn btn-dark'>SUBMIT</button>
                        </form></div></div></div>
        </div>
    )
}
