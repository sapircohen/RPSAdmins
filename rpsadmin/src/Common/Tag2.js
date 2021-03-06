import React from 'react';
import {Col,Row} from 'react-bootstrap'
import makeAnimated from 'react-select/animated';
import Creatable from 'react-select/creatable';
import SmallHeaderForm from '../Common/SmallHeaderForm';
const Hashtags = (props) => {
    return (  
        <div dir="rtl" style={{padding:15,borderRadius:5,marginTop:30,border:'solid 1px',marginBottom:20,backgroundColor:'#fff',boxShadow:'5px 10px #888888'}}>
            <SmallHeaderForm title="Hashtags"/>
            <br/>
            {props.isMandatory&&(props.minimum&&<span style={{color:'blue'}}>מינמום {props.minimum} האשטגים</span>)}
            <Row style={{marginTop:'10px'}}>
                <Col sm="2"></Col> 
                <Col sm="8">
                <Creatable
                value={props.chosenHashs}
                onChange={props.HashsChosen}
                closeMenuOnSelect={false}
                components={makeAnimated()}
                isMulti
                options={props.hashs}
                className="basic-multi-select"
                classNamePrefix="select"
                />
                </Col>
                <Col sm="2"></Col> 
            </Row>
        </div>
    );
}
 
export default Hashtags;


// class Hashtags extends React.Component{
//     render(){
//     return(
//         <div dir="rtl" style={{padding:15,borderRadius:5,marginTop:30,border:'solid 1px',marginBottom:20,backgroundColor:'#fff',boxShadow:'5px 10px #888888'}}>
//             <SmallHeaderForm title="Hashtags"/>
//             <Row style={{marginTop:'10px'}}>
//                 <Col sm="2"></Col> 
//                 <Col sm="8">
//                 <Creatable
//                 value={this.props.chosenHashs}
//                 onChange={this.props.HashsChosen}
//                 closeMenuOnSelect={false}
//                 components={makeAnimated()}
//                 isMulti
//                 options={this.props.hashs}
//                 className="basic-multi-select"
//                 classNamePrefix="select"
//                 />
//                 </Col>
//                 <Col sm="2"></Col> 
//             </Row>
//         </div>
//     )
//     }
// }