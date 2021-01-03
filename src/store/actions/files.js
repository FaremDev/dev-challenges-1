export const SET_UPLOAD_STATE = 'SET_UPLOAD_STATE';
export const SET_IMAGE_URL = 'SET_IMAGE_URL';

export function setUploadState(state) {
    console.log(state)
    return {
        type: SET_UPLOAD_STATE,
        fileUploadingState: state
    }
}

export function setImageUrl(url) {
    console.log(url);
    return {
        type: SET_IMAGE_URL,
        fileUrl: url
    }
}
