import React from 'react';
import { FilePond } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import {storage} from '../App';
import SweetAlert from 'react-bootstrap-sweetalert';

class PDFupload extends React.Component{
    // state= {
    //     alert:null
    // }
    AddPDF = 	(error, file)=>{
        console.log(file)
        if(this.fileValidate(file)){
            this.saveToFirebaseStorage(file.file);
        }
        else{
            alert('false validate')
        }
    }
    fileValidate = (file)=>{
        console.log(file.file)
        if (file.fileExtension !=='pdf' || file.fileExtension !== 'docx') {
            // this.setState({
            //     alert:(
            //         <SweetAlert 
            //         info 
            //         title="!שימ/י לב" 
            //         onConfirm = {
            //             () => this.hideAlert()
            //         } >
            //         > 
            //         'ניתן להעלות אך ורק קבצי PDF או Word'
            //         </SweetAlert>
            //     )
            // },()=>{
            //     file.abortLoad();
            //     return false;
            // })
            alert('ניתן להעלות אך ורק קבצי PDF או Word');
            file.abortLoad();
            return false;
        }
        else{
            if (file.fileSize > 8000000) {
                alert('הקובץ עובר את ה1 מגה');
                file.abortLoad();
                return false;
            }
            else{
                return true;
            }
        }
    }
    // hideAlert() {
    //     console.log('Hiding alert...');
    //     this.setState({
    //       alert: null
    //     });
    //   }
    saveToFirebaseStorage = (file)=>{
        const groupData = JSON.parse(localStorage.getItem('groupData'));
        const uploadPic = storage.ref('images/'+groupData.GroupName+'/ProjectPDF').put(file);
        uploadPic.on('state_changed',
        (snapshot)=>{

        },(error)=>{
            console.log(error);
        },
        ()=>{
            storage.ref('images/'+groupData.GroupName+'/ProjectPDF').getDownloadURL()
            .then((url)=>{
                this.props.savePDF(url);
            })
        })
    }
    render(){
        return(
            <FilePond allowMultiple={false} onaddfile={this.AddPDF} labelIdlE='PDF UPLOAD'/>
        )
    }
}
export default PDFupload;