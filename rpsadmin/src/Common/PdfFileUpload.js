import React from 'react';
import { FilePond } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import {storage} from '../App';
import firebase from 'firebase';

class PDFupload extends React.Component{
    AddPDF = (file)=>{
        console.log(file)
        if(this.fileValidate(file)){
            this.saveToFirebaseStorage(file.file);
        }
    }
    fileValidate = (file)=>{
        console.log(file.fileExtension)
        let isValid = false;
        if (file.fileExtension !=='pdf') {
            // if (file.fileExtension !== 'docx') {
            //     if(file.fileExtension !== 'doc'){
            //         if(file.fileExtension !== 'pptx'){
            //             alert('ניתן להעלות אך ורק קבצי PDF, Word, Powerpoint');
            //             file.abortLoad();
            //             return false;
            //         }
            //         else{
            //             isValid = true;
            //         }
            //     }
            //     else{
            //         isValid = true;
            //     }
            // }
            // else{
            //     isValid = true;
            // }
            alert('ניתן להעלות אך ורק קבצי PDF');
            file.abortLoad();
            return false;
        }
        else{
            isValid=true;
        }
        if(isValid){
            if (file.fileExtension ==='pdf' && file.fileSize > this.props.pdfFileSize) {
                alert('הקובץ עובר את ה20 מגה');
                file.abortLoad();
                return false;
            }
            else if (file.fileExtension ==='docx' && file.fileSize > this.props.wordFileSize) {
                alert('הקובץ עובר את ה5 מגה');
                file.abortLoad();
                return false;
            }
            else{
                return true;
            }
        }
    }
    saveToFirebaseStorage = (file)=>{
        
        const groupData = JSON.parse(localStorage.getItem('groupData'));
        const uploadPic = storage.ref('images/'+groupData.GroupName+'/ProjectDocument/'+file.name).put(file);
        uploadPic.on('state_changed',
        (snapshot)=>{
        },(error)=>{
            console.log(error);
        },
        ()=>{
            storage.ref('images/'+groupData.GroupName+'/ProjectDocument/'+file.name).getDownloadURL()
            .then((url)=>{
                this.props.savePDF(url);
            })
        })
    }
    render(){
        return(
            <FilePond onremovefile={this.props.DeletePdf} allowMultiple={false} onaddfilestart={this.AddPDF} labelIdlE='PDF UPLOAD'/>
        )
    }
}
export default PDFupload;