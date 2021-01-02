import React, {Component, Fragment} from 'react'
import {
    Container,
    Row,
    Col
} from 'react-bootstrap'
import './DynamicFormDefault.css'

class HelloWorld extends Component{
    
    state={
        textField: true,
        textArea: true,
        dropDown: true,
        radioBtn: true,
        checkBox: true,
        dropDownCount: 0
    }

    toggle=(ch)=>{
        if(ch===1){
            this.setState({textField:!this.state.textField})
        }
        else if(ch===2){
            this.setState({textArea:!this.state.textArea})
        }
        else if(ch===3){
            this.setState({dropDown:!this.state.dropDown})
        }
        else if(ch===4){
            this.setState({radioBtn:!this.state.radioBtn})
        }
        else if(ch===5){
            this.setState({checkBox:!this.state.checkBox})
        }
    }


    render(){

        const dropDownItems = []
        let i;
        let c=this.state.dropDownCount
        for(i=0;i<c;i++) {
            dropDownItems.push(<><input className={"dropText"} placeholder={"Text"}/><input className={"dropValue"} placeholder={"Value"}/></>)
        }

        return(
            <div className="HelloWorld">
                <Container>
                    <h2>Dynamic Form</h2>
                    <Row>
                        <Col md="3">
                            {this.state.textField ? (<p className="flip" onClick={(e)=>this.toggle(1)}>Text field <span>+</span></p>):(
                                <Fragment>
                                <p className="flip" onClick={(e)=>this.toggle(1)}>Text field <span>-</span></p>
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

                            {this.state.textArea ? (<p className="flip" onClick={(e)=>this.toggle(2)}>Text area <span>+</span></p>):(
                                <Fragment>
                                <p className="flip" onClick={(e)=>this.toggle(2)}>Text area <span>-</span></p>
                                <div id="forTextArea">
                                    <input type="text" id="labelTextArea" placeholder="Label" />
                                    <input type="text" id="nameTextArea" placeholder="give a unique name" />
                                    <input type="text" id="placeholderTextArea" placeholder="placeholder text" />
                                    <span className="likeLabel">Required</span><input type="checkbox" id="requiredTextArea" />
                                    <button>TextArea Create</button>
                                    <hr/>
                                </div>
                                </Fragment>
                            )}

                            {this.state.dropDown ? (<p className="flip" onClick={(e)=>this.toggle(3)}>Drop down <span>+</span></p>):(
                                <Fragment>
                                    <p className="flip" onClick={(e)=>this.toggle(3)}>Drop down <span>-</span></p>
                                    <div id="forDropDown">
                                        <input type="text" id="labelDropDown" placeholder="Label"/>
                                        <input type="text" id="nameDropDown" placeholder="give a unique name"/>
                                        <span className="likeLabel">Required</span><input type="checkbox" id="requiredDropDown"/>

                                        <div id="dropDownMakerDiv">
                                            {dropDownItems}
                                        </div>

                                        <button className="dropAddRemove" onClick={(e)=>this.setState(
                                            {dropDownCount:this.state.dropDownCount+1}
                                            )}>Add</button>

                                        <button className="dropAddRemove" onClick={(e)=>{
                                            if(this.state.dropDownCount>0){
                                            this.setState({dropDownCount:this.state.dropDownCount-1})
                                            }
                                            }}>Remove</button>

                                        {console.log(this.state.dropDownCount)}
                                        <button className="ml-10">DropDown Create</button>
                                        <hr/>
                                    </div>
                                </Fragment>
                            )}

                            {this.state.radioBtn ? (<p className="flip" onClick={(e)=>this.toggle(4)}>Radio button <span>+</span></p>):(
                                <Fragment>
                                    <p className="flip" id="radioHideBtn" onClick={(e)=>this.toggle(4)}>Radio button <span>-</span></p>
                                    <div id="forRadio">
                                        <input type="text" id="labelRadio" placeholder="Label"/>
                                        <input type="text" id="nameRadio" placeholder="give a unique name"/>
                                        <span className="likeLabel">Required</span><input type="checkbox" id="requiredRadio"/>

                                        <div id="radioMakerDiv"></div>

                                        <button className="radioAddRemove">Add</button>
                                        <button className="radioAddRemove">Remove</button>
                                        <button>Radio button Create</button>
                                        <hr/>
                                    </div>
                                </Fragment>
                            )}

                            {this.state.checkBox ? (<p className="flip" onClick={(e)=>this.toggle(5)}>Checkbox <span>+</span></p>):(
                                <Fragment>
                                    <p className="flip" id="checkBoxHideBtn" onClick={(e)=>this.toggle(5)}>Checkbox <span>-</span></p>
                                    <div id="forCheckBox">
                                        <input type="text" id="labelCheckBox" placeholder="Label"/>
                                        <input type="text" id="nameCheckBox" placeholder="give a unique name"/>
                                        <span className="likeLabel">Required</span><input type="checkbox" id="requiredCheckBox"/>

                                        <div id="checkBoxMakerDiv"></div>

                                        <button className="checkBoxAddRemove">Add</button>
                                        <button className="checkBoxAddRemove">Remove</button>
                                        <button >Checkbox Create</button>
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