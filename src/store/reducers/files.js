import { SET_UPLOAD_STATE, SET_IMAGE_URL } from '../actions/files'

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
        default:
            return state
    }
}
