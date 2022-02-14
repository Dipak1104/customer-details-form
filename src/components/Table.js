import React, { useState } from 'react';

function CustomerForm(props) {
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [age, setAge] = useState('');


    const changeFirstName = (event) => {
        setFirstName(event.target.value);
    };

    const changeLastName = (event) => {
        setLastName(event.target.value);
    };

    const changeAge = (event) => {
        setAge(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const val = {
            firstname,
            lastname,
            age
        };
        props.func(val);
        clearState();
    };

    const handleReset =()=>{
        {
            setFirstName('');
            setLastName('');
            setAge('');
        }
    }

    const clearState = () => {
        setFirstName('');
        setLastName('');
        setAge('');

    };

    return (
        <div>
            <form>
                <h1>Customer Details</h1>
                <label>First Name</label>
                <input type="text"  required  value={firstname} onChange={changeFirstName} placeholder="Enter First Name"></input>
                <br></br>

                <label>Last Name</label>
                <input type="text"  required  value={lastname} onChange={changeLastName} placeholder="Enter Last Name"></input>
                <br></br>

                <label >Age</label>
                <input type="number"  required  value={age} onChange={changeAge} placeholder="Enter Age" ></input>
                <br></br>
                <br></br>

                <button type='submit' onClick={handleSubmit} className='submitbtn'> Submit</button>
                <button type='reset' onClick={handleReset}  className='resetbtn'>Reset</button>
            </form>
        </div>
    );
}

export default CustomerForm;
