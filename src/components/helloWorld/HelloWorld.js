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
        mainId:0,
        mainArray:[],
        //for toggle
        textField: true,
        textArea: true,
        dropDown: true,
        radioBtn: true,
        checkBox: true,
        //dropdown counter
        radioBtnCount: 0,
        checkBoxCount: 0, 

        //text field state
        tfLabel:'',
        tfName:'',
        tfPlaceholder:'',
        tfRequired:false,
        //text area state
        taLabel:'',
        taName:'',
        taPlaceholder:'',
        taRequired:false,
        //drop down state
        ddLabel:'',
        ddName:'',
        ddData:[],
        ddTempText:'',
        ddTempValue:''
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


    onChange = e =>{
        this.setState({ [e.target.name]: e.target.value })
    }
    onChecked = e =>{
        this.setState({ [e.target.name]: e.target.checked })
    }


    tfSubmit= e =>{
        e.preventDefault()

        this.setState({mainId:this.state.mainId+1})

        const elm={
            id: this.state.mainId,
            fname: 'tf',
            label: this.state.tfLabel,
            name: this.state.tfName,
            placeholder: this.state.tfPlaceholder,
            required: this.state.tfRequired
        }

        this.state.mainArray.push(elm)

        this.setState({
            tfLabel:'',
            tfName:'',
            tfPlaceholder:'',
            tfRequired:false
        })
    
    }

    taSubmit= e =>{
        e.preventDefault()


        this.setState({mainId:this.state.mainId+1})

        const elm={
            id: this.state.mainId,
            fname: 'ta',
            label: this.state.taLabel,
            name: this.state.taName,
            placeholder: this.state.taPlaceholder,
            required: this.state.taRequired
        }

        this.state.mainArray.push(elm)

        this.setState({
            taLabel:'',
            taName:'',
            taPlaceholder:'',
            taRequired:false
        })
    
    }


    ddAddSubmit=(e)=>{
        const dd = {
            text:this.state.ddTempText,
            value: this.state.ddTempValue
        }

        this.state.ddData.push(dd)

        this.setState({
            ddTempText:'',
            ddTempValue:''
        })
    }

    ddRemoveSubmit=(e)=>{
        let indx = this.state.ddData.length-1
        this.setState({
            ddData: this.state.ddData.filter((_, i) => i != indx)
        })

    }

    ddSubmit=e=>{
        e.preventDefault()

        this.setState({mainId:this.state.mainId+1})

        const elm={
            id: this.state.mainId,
            fname: 'dd',
            label: this.state.ddLabel,
            name: this.state.ddName,
            dataArray: this.state.ddData
        }

        this.state.mainArray.push(elm)

        this.setState({
            taLabel:'',
            taName:'',
            ddData: []     
        })

    }

    render(){

        console.log(this.state.mainArray)

        const radioBtnItems = []
        const checkBoxItems = []
        let j,k;

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

        const ddDataShow=[]
        this.state.ddData.map((value,i)=>{
            ddDataShow.push(
                <Fragment key={i}>
                    <p className="ddShowLeft">{value.text}</p>
                    <p className="ddShowRight">{value.value}</p>
                </Fragment>
            )
            return 0;
        })



        //Create visually Dynamic Form
        const DynamicFormItems = []

        this.state.mainArray.map((value,i)=>{
            if(value.fname==='tf'){
                DynamicFormItems.push(
                    <Fragment key={i}>
                        <label>{value.label}</label>
                        <input type='text' name={value.name} placeholder={value.placeholder} required={value.required} />
                    </Fragment>
                )
            }
            else if(value.fname==='ta'){
                DynamicFormItems.push(
                    <Fragment key={i}>
                        <label>{value.label}</label>
                        <textarea name={value.name} placeholder={value.placeholder} required={value.required}></textarea>
                    </Fragment>
                )
            }
            else if(value.fname==='dd'){
                
                const tempoption=[]
                value.dataArray.map((v,i)=>{
                    tempoption.push(
                        <Fragment key={i}>
                            <option value={v.value}>{v.text}</option>
                        </Fragment>
                    )
                })

                DynamicFormItems.push(
                    <Fragment key={i}>
                        <label>{value.label}</label>
                        <select className="form-control" name={value.name}>
                           {tempoption}
                        </select>
                    </Fragment>
                )
            }
            return 0
        })

        
        return(
            <div className="HelloWorld">
                <Container>
                    <h2 className="center heading">Dynamic Form</h2>
                    <Row>
                        <Col md="3">
                            {this.state.textField ? (<p className="flip" onClick={(e)=>this.toggle(1)}>Text field <span>+</span></p>):(
                                <Fragment>
                                <p className="flip" onClick={(e)=>this.toggle(1)}>Text field <span>-</span></p>
                                <Form onSubmit={this.tfSubmit}>
                                    <input type="text" placeholder="Label" value={this.state.tfLabel} name="tfLabel" onChange={this.onChange} />
                                    <input type="text" placeholder="give a unique name" value={this.state.tfName} name="tfName" onChange={this.onChange} />
                                    <input type="text" placeholder="placeholder text" value={this.state.tfPlaceholder} name="tfPlaceholder" onChange={this.onChange}/>
                                    <span className="likeLabel">Required</span>
                                    <input type="checkbox" name="tfRequired" checked={this.state.tfRequired} onChange={this.onChecked}/>
                                    <button>TextField Create</button>            
                                    <hr/>
                                </Form>
                                </Fragment>
                            )}

                            {this.state.textArea ? (<p className="flip" onClick={(e)=>this.toggle(2)}>Text area <span>+</span></p>):(
                                <Fragment>
                                <p className="flip" onClick={(e)=>this.toggle(2)}>Text area <span>-</span></p>
                                <Form onSubmit={this.taSubmit}>
                                    <input type="text" placeholder="Label" value={this.state.taLabel} name="taLabel" onChange={this.onChange}/>
                                    <input type="text" placeholder="give a unique name" value={this.state.taName} name="taName" onChange={this.onChange}/>
                                    <input type="text" placeholder="placeholder text" value={this.state.taPlaceholder} name="taPlaceholder" onChange={this.onChange}/>
                                    <span className="likeLabel">Required</span>
                                    <input type="checkbox" checked={this.state.taRequired} name="taRequired" onChange={this.onChecked}/>
                                    <button>TextArea Create</button>
                                    <hr/>
                                </Form>
                                </Fragment>
                            )}

                            {this.state.dropDown ? (<p className="flip" onClick={(e)=>this.toggle(3)}>Drop down <span>+</span></p>):(
                                <Fragment >
                                    <p className="flip" onClick={(e)=>this.toggle(3)}>Drop down <span>-</span></p>
                                    
                                    


                                        <div id="dropDownMakerDiv">
                                            <input className="dropText" name="ddTempText" onChange={this.onChange} value={this.state.ddTempText} placeholder="Text"/>
                                            <input className="dropValue" name="ddTempValue" onChange={this.onChange} value={this.state.ddTempValue} placeholder="Value"/>  

                                            <button className="dropAddRemove" onClick={this.ddAddSubmit}>Add</button>
                                            <button className="dropAddRemove" onClick={this.ddRemoveSubmit}>Remove</button>
                                            
                                            {ddDataShow}
                                        </div>


                                    <Form onSubmit={this.ddSubmit}>
                                        <input type="text" name="ddLabel" onChange={this.onChange} placeholder="Label"/>
                                        <input type="text" name="ddName" onChange={this.onChange} placeholder="give a unique name"/>
                                        
                                        <button className="ml-10">DropDown Create</button>
                                        <hr/>
                                    </Form>
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

                                        <button className="ml-10">Radio button Create</button>
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
                                <div id="dynamicForm">
                                    {DynamicFormItems}
                                </div>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default HelloWorld