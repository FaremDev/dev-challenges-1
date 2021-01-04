export const SET_UPLOAD_STATE = 'SET_UPLOAD_STATE';
export const SET_IMAGE_URL = 'SET_IMAGE_URL';
export const SET_ERROR_FORMAT = 'SET_ERROR_FORMAT';

export function setUploadState(state) {
    return {
        type: SET_UPLOAD_STATE,
        fileUploadingState: state
    }
}

export function setImageUrl(url) {
    return {
        type: SET_IMAGE_URL,
        fileUrl: url
    }
}

export function setErrorFormat(isErrorFormat) {
    return {
        type: SET_ERROR_FORMAT,
        isErrorFormat
    }
}