import React, {Component, Fragment} from 'react'
import {
    Container,
    Row,
    Col,
    Form
} from 'react-bootstrap'
import './DynamicFormDefault.css'

class HelloWorld extends Component{
    
    state={
        mainArray:[],
        //for toggle
        textField: true,
        textArea: true,
        dropDown: true,
        radioBtn: true,
        checkBox: true,
        //Those are just for toggle
        dropDownCount: 0,
        radioBtnCount: 0,
        checkBoxCount: 0 
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
        const radioBtnItems = []
        const checkBoxItems = []
        let i,j,k;

        let c=this.state.dropDownCount
        for(i=0;i<c;i++) {
            dropDownItems.push(<>
                                    <input className={"dropText"} placeholder={"Text"}/>
                                    <input className={"dropValue"} placeholder={"Value"}/>
                            </>)
        }

        let d=this.state.radioBtnCount
        for(j=0;j<d;j++){
            radioBtnItems.push(<>
                                    <input className={"radioText"} placeholder={"Text"}/>
                                    <input className={"radioValue"} placeholder={"Value"}/>
                                </>)
        }

        let e=this.state.checkBoxCount
        for(k=0;k<e;k++){
            checkBoxItems.push(<>
                                    <input className={"checkBoxText"} placeholder={"Text"}/>
                                    <input className={"checkBoxValue"} placeholder={"Value"}/>
                                </>)
        }

        return(
            <div className="HelloWorld">
                <Container>
                    <h2 className="center">Dynamic Form</h2>
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

                                        <div id="radioMakerDiv">
                                            {radioBtnItems}
                                        </div>

                                        <button className="radioAddRemove" onClick={(e)=>this.setState(
                                            {radioBtnCount:this.state.radioBtnCount+1}
                                            )}>Add</button>
                                        <button className="radioAddRemove" onClick={(e)=>{
                                            if(this.state.radioBtnCount>0){
                                                this.setState({radioBtnCount:this.state.radioBtnCount-1})
                                            }
                                        }}>Remove</button>

                                        <button class="ml-10">Radio button Create</button>
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

                                        <div id="checkBoxMakerDiv">
                                            {checkBoxItems}
                                        </div>

                                        <button className="checkBoxAddRemove" onClick={(e)=>this.setState(
                                            {checkBoxCount:this.state.checkBoxCount+1}
                                        )}>Add</button>
                                        <button className="checkBoxAddRemove" onClick={(e)=>{
                                            if(this.state.checkBoxCount>0){
                                                this.setState({checkBoxCount:this.state.checkBoxCount-1})
                                            }
                                        }}>Remove</button>
                                        <button class="ml-10">Checkbox Create</button>
                                        <hr/>
                                    </div>
                                </Fragment>
                            )}

                        </Col>
                        <Col md="7">
                            <Form>
                                <div id="dynamicForm"></div>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default HelloWorld