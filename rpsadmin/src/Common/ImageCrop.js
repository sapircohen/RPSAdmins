// import React,{Component} from 'react';
// import Dropzone from 'react-dropzone';
// import ReactCrop from 'react-image-crop';
// import 'react-image-crop/dist/ReactCrop.css'
// import Cropper from 'react-easy-crop'
// import Form from 'react-bootstrap/Form';
// import Col from 'react-bootstrap/Col';

// import {image64toCanvasRef} from '../constant/ResuableUtils';


// const acceptedFileType = 'image/x-png, image/png, image/jpg, image/jpeg, image/gif';
// const acceptedFileTypeArray = acceptedFileType.split(",").map((item)=>{return item.trim()});
// class ImageCropper extends React.Component{
//         constructor(props){
//             super(props);
//             this.PreviewCanvasRef = React.createRef();
//             this.state={
//                 imgSrc:null,
//                 crop: { x: 0, y: 0,width:300,height:300 },
//                 aspect: 4 / 3,
//             }
//             this.handleOnCropComplete = this.handleOnCropComplete.bind(this);
//         }
//         verifyFile = (files)=>{
//             if(files && files.length>0){
//                 const currentFile = files[0];
//                 const currentFileType =currentFile.type;
//                 //const currentFileSize = currentFile.size;
//                 if (!acceptedFileTypeArray.includes(currentFileType)) {
//                     alert('this file type is not allowed!');
//                     return false;
//                 }
//                 return true;
//             }
//             return false;
//         }
//         handleOnDrop = (files,rejectedFiles)=>{
//             //console.log(files)
//             if (rejectedFiles && rejectedFiles.length>0) {
//                 this.verifyFile(rejectedFiles);
//             }
//             if (files && files.length>0) {
//                 const isVerified = this.verifyFile(files);
//                 console.log(isVerified)
//                 if(isVerified){
//                     const currentFile = files[0];
//                     console.log(currentFile)
//                     const reader = new FileReader();
//                     reader.addEventListener('load',()=>{
//                         this.setState({
//                             imgSrc:reader.result
//                         })
//                         console.log(reader.result);
//                     },false)
//                     //console.log(reader)
//                     reader.readAsDataURL(currentFile);

//                 }
//             }
//         }
//         handleOnCropChange = (crop)=>{
//             this.setState({
//                 crop:crop
//             })
//         }
//         handleImageLoaded = (image)=>{

//         }
//         handleOnCropComplete(crop,pixelCrop){
//             console.log(crop, pixelCrop)
//         }
        
//         render(){
//             const {imgSrc} = this.state;
//         return (
//         <div style={{flex:1,marginTop:'5%'}}>
//             {imgSrc !== null ?
//                 <div>
//                     <div style={{height:400,width:'100%',position:'relative'}}> 
//                         <Cropper
//                                 image={this.state.imgSrc}
//                                 crop={this.state.crop}
//                                 aspect={this.state.aspect}
//                                 onCropChange={this.handleOnCropChange}
//                                 onCropComplete={this.handleOnCropComplete}
//                                 //onZoomChange={this.onZoomChange}
//                             />
//                     </div>
//                 </div>
//             : (
//                 <Dropzone multiple={false} accept={acceptedFileType} onDrop={this.handleOnDrop}>
//                     {({getRootProps, getInputProps}) => (
//                         <section>
//                         <div style={{height:300,width:300,flex:1,margin:'0px auto',border:'dotted 0.5px'}} {...getRootProps()}>
//                             <input {...getInputProps()} />
//                             <p style={{textAlign:'center'}}>גרור תמונה לכאן</p>
//                         </div>
//                         </section>
//                     )}
//                 </Dropzone>
//             )}
//         </div>
//         );
//     }
// }

// export default ImageCropper;