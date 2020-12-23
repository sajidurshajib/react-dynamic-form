import React, {Component, Fragment} from 'react'
import {
    Container,
    Row,
    Col
} from 'react-bootstrap'
import './DynamicFormDefault.css'

class HelloWorld extends Component{
    
    state={
        textField: true
    }

    textFieldToggle=()=>{
        this.setState({
            textField:!this.state.textField
        })
    }

    render(){
        return(
            <div className="HelloWorld">
                <Container>
                    <h2>Dynamic Form</h2>
                    <Row>
                        <Col md="3">
                            {this.state.textField ? (<p className="flip" onClick={this.textFieldToggle}>Text field <span>+</span></p>):(
                                <Fragment>
                                <p className="flip" onClick={this.textFieldToggle}>Text field <span>-</span></p>
                                <div>
                                    <input type="text" id="labelTextField" placeholder="Label" />
                                    <input type="text" id="nameTextField" placeholder="give a unique name" />
                                    <input type="text" id="placeholderTextField" placeholder="placeholder text" />
                                    <span className="likeLabel">Required</span><input type="checkbox" id="requiredTextField" />
                                    <button>TextField Create</button>            
                                    <hr/>
                                </div>
                                </Fragment>
                            )}
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default HelloWorld