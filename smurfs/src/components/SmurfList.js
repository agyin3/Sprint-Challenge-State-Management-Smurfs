import React from 'react'
import { connect } from 'react-redux'
import { Card } from 'semantic-ui-react';

const SmurfList = props => {

    return(
        <div className='smurf-wrapper'>
            <Card.Group centered>
                {props.smurfs.map(smurf => {
                return(
                        <Card key={smurf.id}>
                            <Card.Content>
                                <Card.Header>{smurf.name}</Card.Header>
                                <Card.Meta>
                                    Age: {smurf.age} &nbsp;
                                    Height: {smurf.height}
                                </Card.Meta>
                            </Card.Content>
                    </Card>
                ) 
                })}
            </Card.Group>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs
    }
}

export default connect(
    mapStateToProps,
    {}
)(SmurfList)