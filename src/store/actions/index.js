import { setUploadState } from './files'

export function launchFileUpload(file) {
    return (dispatch) => {
        // return (firebase_upload_file).then()
        console.log(file)
        console.log('Dispatching')
        dispatch(setUploadState('UPLOADING'));
        setTimeout(() => dispatch(setUploadState('UPLOADED')), 3000);
    }
}
