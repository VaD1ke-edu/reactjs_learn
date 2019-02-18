import {
    CHECK_ALL, SHOW_ALL, SHOW_NOT_CHECKED, SHOW_CHECKED
} from '../constants/toolbarConstants';

export function checkAll(data) {
    return function(dispatch) {
        dispatch({type: CHECK_ALL});
    }
}

export function showAll() {
    return function(dispatch) {
        dispatch({type: SHOW_ALL});
    }
}

export function showNotChecked(item) {
    return function(dispatch) {
        dispatch({type: SHOW_NOT_CHECKED});
    }
}

export function showChecked(item) {
    return function(dispatch) {
        dispatch({type: SHOW_CHECKED});
    }
}
