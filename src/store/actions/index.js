import { setUploadState, setImageUrl } from './files'
import { storage } from '../../firebase'

export function launchFileUpload(file) {
    return (dispatch) => {
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
}

export function resetUploadState() {
    return (dispatch) => {
        dispatch(setUploadState('NONE'));
    }
}

