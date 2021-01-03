import React, { useState, useRef }  from 'react';
import styled from 'styled-components' 

const UploaderContainer = styled.div`
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

const Legend = styled.div`
    color: gray;
    font-style: italic;
    margin: 15px;
`

const DragDropZone = styled.div`
    margin: 15px auto;
    background-color: gray;
    width: 400px;
    height: 400px;
`

const Button = styled.div`
  display: inline-block;
  border-radius: 7px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 10rem;
  background: blue;
  color: white;
  border: 2px solid blue;
`

const Uploader = () => {
    const inputFile = useRef(null) 
    const [image, setImage] = useState('');

    const onButtonClick = () => {
        inputFile.current.click();
    }

    const grabImage = (e) => {
        console.log(e.target.files[0]);
        setImage(e.target.files[0]);
        console.log(image);
    }

    return (
        <UploaderContainer>
            <div className="instructions">
                <Title>Upload your image</Title>
                <Legend>File should be JPG, PNG...</Legend>
            </div>  
            <DragDropZone />  
            <div className="button-zone"> 
                <Legend>or</Legend>
                <input type='file' id='file' ref={inputFile} onChange={grabImage}  style={{display: 'none'}}/>
                <Button onClick={onButtonClick}>Browse...</Button>
            </div> 
        </UploaderContainer>
    )
}

export default Uploader;