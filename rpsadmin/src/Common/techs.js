import React from 'react';
import {Col,Row} from 'react-bootstrap'
import makeAnimated from 'react-select/lib/animated';
//import Badge from 'react-bootstrap/Badge';
import Select from 'react-select';
import SmallHeaderForm from '../Common/SmallHeaderForm';
export default class Techs extends React.Component{
    render(){
    return(
        <div dir="rtl" style={{padding:15,borderRadius:20,marginTop:30,border:'solid 1px',marginBottom:20,backgroundColor:'#fff',boxShadow:'5px 10px #888888'}}>
            <SmallHeaderForm title="טכנולוגיות"/>
            <Row style={{marginTop:'10px'}}>
                <Col sm="2"></Col> 
                <Col sm="8">
                <Select
                onChange={this.props.TechsChosen}
                closeMenuOnSelect={false}
                components={makeAnimated()}
                isMulti
                options={this.props.techs}
                className="basic-multi-select"
                classNamePrefix="select"
                />
                </Col>
                <Col sm="2"></Col> 
            </Row>
        </div>
    )
    }
}