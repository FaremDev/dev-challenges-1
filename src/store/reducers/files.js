import { SET_UPLOAD_STATE, SET_IMAGE_URL, SET_ERROR_FORMAT } from '../actions/files'

export default function files (state = {uploadingState: 'NONE'}, action) {
    switch(action.type) {
        case SET_UPLOAD_STATE:
            return {
                ...state,
                uploadingState: action.fileUploadingState
            };
        case SET_IMAGE_URL:
            return {
                ...state,
                fileUrl: action.fileUrl
        };
        case SET_ERROR_FORMAT:
            return {
                ...state,
                isErrorFormat: action.isErrorFormat
            }
        default:
            return state
    }
}
