import React from 'react';
import styled from 'styled-components'

/*TODO : add the loading-bar module */

const UploaderLoadingContainer = styled.div`
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
    height: 100px;
    padding: 30px 30px;
`

const UploadingMessage = styled.div`
    font-size: 20px;
    margin: 0;
    text-align: left;
`


function UploaderLoading() {
    return (
        <UploaderLoadingContainer>
            <UploadingMessage>
                Uploading...
            </UploadingMessage>
            <div className="loading-bar">
            </div>
        </UploaderLoadingContainer>
    )
}

export default UploaderLoading;