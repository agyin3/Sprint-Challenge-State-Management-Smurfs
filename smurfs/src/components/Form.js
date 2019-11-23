import React, { useState } from 'react'
import { connect } from 'react-redux'
import { postSmurfData, getSmurfData } from '../actions'
import { Form, Input, Button } from 'semantic-ui-react'

const SmurfForm = props => {

    const [smurf, setSmurf] = useState({name: '', age: '', height: ''});

    const handleChange = e => {
        setSmurf({...smurf, [e.target.name]: e.target.value})
    }

    const postSmurfData = e => {
        e.preventDefault()
        console.log(smurf)
        props.postSmurfData(smurf)
        setSmurf({name: '', age: '', height: ''})
    }

    const getSmurfData = e => {
        e.preventDefault()
        props.getSmurfData()
    }

    return(
        <div className='form-wrapper'>
            <Form>
                <Form.Group widths='equal'>
                    <Form.Input fluid type='text' name='name' label='Smurf Name' value={smurf.name} placeholder='Enter Name' onChange={handleChange}/>
                    <Form.Input fluid type='text' name='age' label='Smurf Age' value={smurf.age} placeholder='Enter Age' onChange={handleChange}/>
                    <Form.Input fluid type='text' name='height' label='Smurf Height' value={smurf.height} placeholder='Enter Height(cm)' onChange={handleChange}/>
                </Form.Group>
                <Form.Group widths='equal'>
                    <Form.Button onClick={getSmurfData}>Get Smurfs</Form.Button>
                    <Form.Button onClick={postSmurfData}>Add Smurf</Form.Button>
                </Form.Group>
            </Form>
        </div>
    )
}

export default connect(
    null, 
    { postSmurfData, getSmurfData } 
)(SmurfForm)