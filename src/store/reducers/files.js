import { SET_UPLOAD_STATE } from '../actions/files'

export default function files (state = {uploadingState: 'NONE'}, action) {
    switch(action.type) {
        case SET_UPLOAD_STATE:
            console.log('SET UPLOAD STATE');
            return {
                ...state,
                uploadingState: action.fileUploadingState
            };
        default:
            console.log('NONE');
            return state
    }
}
