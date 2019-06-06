import React from 'react';
import {Form,Col} from 'react-bootstrap';


const SelectInput = (props)=>{
    return(
        <Form.Group as={Col} id="firstAdvisor">
            <Form.Label dir="rtl">{props.InputTitle}</Form.Label>
                <Form.Control onChange={(e)=>props.ChangeSelectInput(e,props.InputTitle)} defaultValue={props.defaultInput} dir="rtl" as="select">
                    <option>{props.defaultInput?props.defaultInput:'בחר'}</option>
                    {props.inputList.map((a,key)=>
                        <option key={key}>{a}</option>
                    )}
            </Form.Control>
        </Form.Group>
    )
}

export default SelectInput;