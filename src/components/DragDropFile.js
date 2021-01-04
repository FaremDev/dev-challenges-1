import React, { useState, useCallback }  from 'react';
import { connect } from 'react-redux'
import styled from 'styled-components'
import { launchFileUpload } from '../store/actions'
import {useDropzone} from 'react-dropzone'


const Container = styled.div`
    margin: auto;
    width: 100%;
    height: 100%;
    padding: auto;
`

const DragDropFile = (props) => {

    const onDrop = useCallback((acceptedFiles) => {
        console.log(acceptedFiles[0])
        props.dispatch(launchFileUpload(acceptedFiles[0]));
      }, [props])
      const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})
    
      return (
        <Container {...getRootProps()}>
          <input {...getInputProps()} />
          {
            isDragActive ?
              <p>Drop the files here ...</p> :
              <p>Drag 'n' drop some files here, or click to select files</p>
          }
        </Container>
      )
}


function mapStateToProps({ files }) {  
    return {
      fileUploadingState: files.uploadingState
    };
  }
  
  export default connect(mapStateToProps)(DragDropFile);
