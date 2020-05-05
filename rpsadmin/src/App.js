import React, { useEffect } from 'react';
import './App.css';
import LoginScreen from './Components/LoginScreen';
import St1 from "./Components/St1";
import St2 from './Components/St2';
import St3 from './Components/St3';
import St4 from './Components/St4';
import St5 from './Components/St5';
import St6 from './Components/St6';
import {getGeneralConfigsTemplates} from './functions/functions'
import { withRouter,Route } from "react-router-dom";
import CourseChoice from './Components/CourseChoice';
//test and prod enviorments
import firebase from 'firebase';
import 'firebase/storage';

import { FirebaseProdConfig } from './Constants/APIkeys';
//import { FirebaseTestConfig } from './Constants/APIkeys';

firebase.initializeApp(FirebaseProdConfig);
//firebase.initializeApp(FirebaseTestConfig);
export const storage =  firebase.storage();

const App = ()=>{
  useEffect(() => {
    getGeneralConfigsTemplates();
  }, [])
  return(
    <div className="App">
      <Route path='/' exact component={LoginScreen}/>
      <Route path='/CourseChoice' component={CourseChoice}/>
      <Route path='/st1'  component={St1}/>
      <Route path='/st2'  component={St2}/>
      <Route path='/st3' component={St3}/>
      <Route path='/st4' component={St4}/>
      <Route path='/st5' component={St5}/>
      <Route path='/st6' component={St6}/>
    </div>
  )
}

export default withRouter(App);
