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
        submitArray:[],
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
        ddTempValue:'',
        //radio button state
        rbLabel:'',
        rbName:'',
        rbData:[],
        rbTempText:'',
        rbTempValue:'',
        //checkbox state
        cbLabel:'',
        cbName:'',
        cbData:[],
        cbTempText:'',
        cbTempValue:'',
        //Show data as array
        showDataAsArray:false
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
        else if(ch===6){
            this.setState({showDataAsArray:!this.state.showDataAsArray})
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

        const elm={
            id: this.state.mainId,
            fname: 'tf',
            label: this.state.tfLabel,
            name: this.state.tfName,
            placeholder: this.state.tfPlaceholder,
            required: this.state.tfRequired
        }

        this.state.mainArray.push(elm)
        this.state.submitArray.push({[elm.name]:''})

        this.setState({mainId:this.state.mainId+1})

        this.setState({
            tfLabel:'',
            tfName:'',
            tfPlaceholder:'',
            tfRequired:false
        })
    
    }

    taSubmit= e =>{
        e.preventDefault()

        const elm={
            id: this.state.mainId,
            fname: 'ta',
            label: this.state.taLabel,
            name: this.state.taName,
            placeholder: this.state.taPlaceholder,
            required: this.state.taRequired
        }

        this.state.mainArray.push(elm)
        this.state.submitArray.push(elm.name)

        this.setState({mainId:this.state.mainId+1})

        this.setState({
            taLabel:'',
            taName:'',
            taPlaceholder:'',
            taRequired:false
        })
    
    }


    //drop down
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
            ddData: this.state.ddData.filter((_, i) => i !== indx)
        })

    }

    ddSubmit=e=>{
        e.preventDefault()

        const elm={
            id: this.state.mainId,
            fname: 'dd',
            label: this.state.ddLabel,
            name: this.state.ddName,
            dataArray: this.state.ddData
        }

        this.state.mainArray.push(elm)
        this.state.submitArray.push(elm.name)

        this.setState({mainId:this.state.mainId+1})

        this.setState({
            ddLabel:'',
            ddName:'',
            ddData: []     
        })

    }

    //radio button
    rbAddSubmit=(e)=>{
        const rb = {
            text:this.state.rbTempText,
            value: this.state.rbTempValue
        }

        this.state.rbData.push(rb)

        this.setState({
            rbTempText:'',
            rbTempValue:''
        })
    }

    rbRemoveSubmit=(e)=>{
        let indx = this.state.rbData.length-1
        this.setState({
            rbData: this.state.rbData.filter((_, i) => i !== indx)
        })

    }

    rbSubmit=e=>{
        e.preventDefault()

        const elm={
            id: this.state.mainId,
            fname: 'rb',
            label: this.state.rbLabel,
            name: this.state.rbName,
            dataArray: this.state.rbData
        }

        this.state.mainArray.push(elm)
        this.state.submitArray.push(elm.name)

        this.setState({mainId:this.state.mainId+1})

        this.setState({
            rbLabel:'',
            rbName:'',
            rbData: []     
        })

    }


    //checkbox button
    cbAddSubmit=(e)=>{
        const cb = {
            text:this.state.cbTempText,
            value: this.state.cbTempValue
        }

        this.state.cbData.push(cb)

        this.setState({
            cbTempText:'',
            cbTempValue:''
        })
    }

    cbRemoveSubmit=(e)=>{
        let indx = this.state.cbData.length-1
        this.setState({
            cbData: this.state.cbData.filter((_, i) => i !== indx)
        })

    }

    cbSubmit=(e)=>{
        e.preventDefault()

        const elm={
            id: this.state.mainId,
            fname: 'cb',
            label: this.state.cbLabel,
            name: this.state.cbName,
            dataArray: this.state.cbData
        }

        this.state.mainArray.push(elm)
        this.state.submitArray.push(elm.name)

        this.setState({mainId:this.state.mainId+1})

        this.setState({
            cbLabel:'',
            cbName:'',
            cbData: []     
        })

    }

    //==============================
    //
    //Final submit data related code
    //
    //==============================

    submitOnchange=(e)=>{
        this.state.submitArray.map((value,i)=>{
            let key=i
            if(key<=0){
                let arr = this.state.submitArray
                arr[e.target.id]={[e.target.name]:e.target.value}
                this.setState({submitArray:arr})
                
                console.log(this.state.submitArray)
            }
            return 0
        })
    }

    submitOnradio=(e)=>{
        this.state.submitArray.map((value,i)=>{
            let key=i
            if(key<=0){
                let arr = this.state.submitArray
                arr[e.target.getAttribute("as")]={[e.target.name]:e.target.value}
                this.setState({submitArray:arr})
                
                console.log(this.state.submitArray)
            }
            return 0
        })
    }

    submitCheckbox=(e)=>{
        this.state.submitArray.map((value,i)=>{
            let key=i
            if(key<=0){
                let arr = this.state.submitArray
                if(typeof(arr[e.target.getAttribute("as")])==='string'){
                    console.log('this is a string')
                }
                
                console.log(this.state.submitArray)
            }
            return 0
        })
    }

    // submitChecked=(e)=>{
    //     this.state.submitArray.map((value,i)=>{
    //         let key=i
    //         if(key<=0){
    //             this.state.submitArray[e.target.id]={[e.target.name]:e.target.checked}
    //             console.log(this.state.submitArray)
    //         }
    //         return 0
    //     })
    // }


    render(){
        const mainArrayShowInCode=[]
        this.state.mainArray.map((value,i)=>{
            mainArrayShowInCode.push(
                <Fragment key={i}>
                    <code>{JSON.stringify(value)}</code>
                </Fragment>
            )
            return 0;
        })

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

        const rbDataShow=[]
        this.state.rbData.map((value,i)=>{
            rbDataShow.push(
                <Fragment key={i}>
                    <p className="ddShowLeft">{value.text}</p>
                    <p className="ddShowRight">{value.value}</p>
                </Fragment>
            )
            return 0;
        })

        const cbDataShow=[]
        this.state.cbData.map((value,i)=>{
            cbDataShow.push(
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
                        <input id={value.id} onChange={this.submitOnchange} type='text' name={value.name} placeholder={value.placeholder} required={value.required} />
                    </Fragment>
                )
            }
            else if(value.fname==='ta'){
                DynamicFormItems.push(
                    <Fragment key={i}>
                        <label>{value.label}</label>
                        <textarea id={value.id} onChange={this.submitOnchange} name={value.name} placeholder={value.placeholder} required={value.required}></textarea>
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
                    return 0
                })

                DynamicFormItems.push(
                    <Fragment key={i}>
                        <br/>
                        <label>{value.label}</label>
                        <select id={value.id} onChange={this.submitOnchange} className="form-control" name={value.name}>
                           {tempoption}
                        </select>
                        <br/>
                    </Fragment>
                )
            }
            else if(value.fname==='rb'){
                
                const tempoption=[]
                let r=0
                value.dataArray.map((v,i)=>{
                    tempoption.push(
                        <Fragment key={i}>
                            {r===0 ? 
                                <input as={value.id} onChange={this.submitOnradio} type='radio' name={value.name} value={v.value} checked/> :
                                <input as={value.id} onChange={this.submitOnradio} type='radio' name={value.name} value={v.value} />
                            }
                            <label className="radioBtnLabel">{v.text}</label>
                        </Fragment>
                    )
                    r=r+1
                    return 0
                })

                DynamicFormItems.push(
                    <Fragment key={i}>
                        <br/>
                        <label>{value.label}</label>
                        <br/>
                           {tempoption}
                        <br/>
                    </Fragment>
                )
            }
            else if(value.fname==='cb'){
                
                const tempoption=[]
                let r=0
                value.dataArray.map((v,i)=>{
                    tempoption.push(
                        <Fragment key={i}>
                            <input as={value.id} onChange={this.submitCheckbox} type='checkbox' name={value.name} value={v.value} />
                            <label className="checkBoxLabel">{v.text}</label>
                            <br/>
                        </Fragment>
                    )
                    r=r+1
                    return 0
                })

                DynamicFormItems.push(
                    <Fragment key={i}>
                        <br/>
                        <label>{value.label}</label>
                        <br/>
                           {tempoption}
                        <br/>
                    </Fragment>
                )
            }
            return 0
        })

        //

        return(
            <div className="HelloWorld">    
            {console.log(this.state.submitArray)}  
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
                                        <input type="text" name="ddLabel" onChange={this.onChange} value={this.state.ddLabel} placeholder="Label"/>
                                        <input type="text" name="ddName" onChange={this.onChange} value={this.state.ddName} placeholder="give a unique name"/>
                                        
                                        <button className="ml-10">DropDown Create</button>
                                        <hr/>
                                    </Form>
                                </Fragment>
                            )}





                            {this.state.radioBtn ? (<p className="flip" onClick={(e)=>this.toggle(4)}>Radio button <span>+</span></p>):(
                                <Fragment>
                                    <p className="flip" id="radioHideBtn" onClick={(e)=>this.toggle(4)}>Radio button <span>-</span></p>
                                                                       
                                        <div id="radioButtonMakerDiv">
                                            <input className="dropText" name="rbTempText" onChange={this.onChange} value={this.state.rbTempText} placeholder="Text"/>
                                            <input className="dropValue" name="rbTempValue" onChange={this.onChange} value={this.state.rbTempValue} placeholder="Value"/>  

                                            <button className="dropAddRemove" onClick={this.rbAddSubmit}>Add</button>
                                            <button className="dropAddRemove" onClick={this.rbRemoveSubmit}>Remove</button>
                                            
                                            {rbDataShow}
                                        </div>


                                    <Form onSubmit={this.rbSubmit}>
                                        <input type="text" name="rbLabel" onChange={this.onChange} value={this.state.rbLabel} placeholder="Label"/>
                                        <input type="text" name="rbName" onChange={this.onChange} value={this.state.rbName} placeholder="give a unique name"/>
                                        
                                        <button className="ml-10">RadioButton Create</button>
                                        <hr/>
                                    </Form>
                                </Fragment>
                            )}




                            {this.state.checkBox ? (<p className="flip" onClick={(e)=>this.toggle(5)}>Checkbox <span>+</span></p>):(
                                <Fragment>
                                    <p className="flip" id="checkBoxHideBtn" onClick={(e)=>this.toggle(5)}>Checkbox <span>-</span></p>
                                                                   
                                        <div id="checkBoxMakerDiv">
                                            <input className="dropText" name="cbTempText" onChange={this.onChange} value={this.state.cbTempText} placeholder="Text"/>
                                            <input className="dropValue" name="cbTempValue" onChange={this.onChange} value={this.state.cbTempValue} placeholder="Value"/>  

                                            <button className="dropAddRemove" onClick={this.cbAddSubmit}>Add</button>
                                            <button className="dropAddRemove" onClick={this.cbRemoveSubmit}>Remove</button>
                                            
                                            {cbDataShow}
                                        </div>


                                    <Form onSubmit={this.cbSubmit}>
                                        <input type="text" name="cbLabel" onChange={this.onChange} value={this.state.cbLabel} placeholder="Label"/>
                                        <input type="text" name="cbName" onChange={this.onChange} value={this.state.cbName} placeholder="give a unique name"/>
                                        
                                        <button className="ml-10">CheckBox Create</button>
                                        <hr/>
                                    </Form>
                                </Fragment>
                            )}

                        </Col>
                        <Col md="7">
                            <Form>
                                <div id="dynamicForm">
                                    {DynamicFormItems}
                                </div>
                            </Form>
                            {/* For presentation */}
                            {this.state.mainId!==0 ? (<button className="ShowData" onClick={(e)=>this.toggle(6)}>Show data</button>) : null}
                            {this.state.showDataAsArray ? mainArrayShowInCode :null}
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default HelloWorld