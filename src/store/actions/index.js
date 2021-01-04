import { setUploadState, setImageUrl, setErrorFormat } from './files'
import { storage } from '../../firebase'

export function launchFileUpload(file) {
    return (dispatch) => {
        // If the file is an image, we upload it.
        if(file.type.startsWith('image/')) {
            dispatch(setErrorFormat(false));
            console.log(file);
            dispatch(setUploadState('UPLOADING'));
            
            const uploadTask = storage.ref(`/images/${file.name}`).put(file)
    
            uploadTask.on('state_changed', 
            (snapShot) => {
                console.log(snapShot)
            }, (err) => {
                console.log(err)
            }, () => {
                storage.ref('images').child(file.name).getDownloadURL()
                .then(firebaseUrl => {
                    dispatch(setUploadState('UPLOADED'));
                    dispatch(setImageUrl(firebaseUrl));
                })
            })
        }

        // If the file is not an image, we show an error
        dispatch(setErrorFormat(true));
    }
}

export function resetUploadState() {
    return (dispatch) => {
        dispatch(setUploadState('NONE'));
    }
}
