export const SET_UPLOAD_STATE = 'SET_UPLOAD_STATE';

export function setUploadState(state) {
    console.log(state)
    return {
        type: SET_UPLOAD_STATE,
        fileUploadingState: state
    }
}
