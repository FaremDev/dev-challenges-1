import React, { useState, useRef }  from 'react';
import { connect } from 'react-redux'
import './App.css';
import Uploader from './components/Uploader';
import UploaderLoading from './components/UploaderLoading';
import UploaderSuccess from './components/UploaderSuccess';

function App(props) {
  const fileUploadingState = props.fileUploadingState;

  return (
    <div className="App">
      { fileUploadingState === 'NONE' && (<Uploader />) }
      { fileUploadingState === 'UPLOADING' && (<UploaderLoading />) }
      { fileUploadingState === 'UPLOADED' && (<UploaderSuccess />) }
    </div>
  );
}

function mapStateToProps({ files }) {  
  return {
    fileUploadingState: files.uploadingState
  };
}

export default connect(mapStateToProps)(App);
