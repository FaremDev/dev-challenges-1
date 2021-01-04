import React, { useRef, useState } from 'react';
import { connect } from 'react-redux'
import { resetUploadState } from '../store/actions'
import styled from 'styled-components' 
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

const UploaderSuccessContainer = styled.div`
    display: block;
    position: absolute;
	top:0;
	bottom: 0;
	left: 0;
	right: 0;
	margin: auto;
    background-color:white;
    color:#333333;
    border-radius: 20px;
    box-shadow: 4px 10px 10px lightgray;
    width: 500px;
    height: 600px;
    padding: 20px 5px;
`

const Title = styled.div`
    color: black;
    font-size: 25px;
    margin: 15px;
`

const UploadedImage = styled.div`
    display: flex;
    margin: 15px auto;
    width: 400px;
    height: 400px;
`

const Button = styled.a`
  display: inline-block;
  border-radius: 7px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 5rem;
  background: blue;
  color: white;
  border: 2px solid blue;
  &:hover {
      cursor: pointer;
  }
`

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

const UploaderSuccess = (props) => {
    const textInputRef = useRef(null);
    const [openAlertCopiedSuccessfully, setOpenAlertCopiedSuccessfully] = useState(false);

    const copyToClipboard = (e) => {
        textInputRef.current.select();
        document.execCommand('copy');
        e.target.focus();
        setOpenAlertCopiedSuccessfully(true)
    }


    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
        return;
        }

        setOpenAlertCopiedSuccessfully(false);
    };

    const goBack = () => {
        props.dispatch(resetUploadState())
    }

    return (
        <UploaderSuccessContainer>
            <Title>Uploaded successfully !</Title>
            <UploadedImage>
                <img src={props.fileUrl} alt='Uploaded file' style={{"maxWidth": '100%', 'maxHeight': '100%', 'width': 'auto', 'height': 'auto', 'margin': 'auto'}}/> 
            </UploadedImage>  
            <div className="link-zone"> 
                <input type="text" ref={textInputRef} readOnly value={props.fileUrl} />
                <Button onClick={copyToClipboard}>Copy Link</Button>
            </div> 
            <div className="prev"> 
                <Button onClick={goBack}>Go Back</Button>
            </div>
            <Snackbar open={openAlertCopiedSuccessfully} autoHideDuration={3000} onClose={handleClose}>
                <Alert severity="success" onClose={handleClose}>
                    Successfully copied URL to clipboard
                </Alert>
            </Snackbar>
        </UploaderSuccessContainer>
    )
}

function mapStateToProps({ files }) {  
    return {
      fileUploadingState: files.uploadingState,
      fileUrl: files.fileUrl
    };
  }
  
  export default connect(mapStateToProps)(UploaderSuccess);
  