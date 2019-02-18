import {
    CHECK_ALL, SHOW_CHECKED, SHOW_ALL, SHOW_NOT_CHECKED
} from '../constants/toolbarConstants';

const defaultToolbarState = {
    toolbar: {
        allChecked: false,
        allShowing: false,
        checkedShowing: false,
        notCheckedShowing: false
    }
};

export function toolbarReducer(state = defaultToolbarState, action) {
    switch (action.type) {
        case CHECK_ALL:
            return {allChecked: !state.allChecked, allShowing: false, checkedShowing: false, notCheckedShowing: false};
        case SHOW_ALL:
            return {allChecked: false, allShowing: !state.allShowing, checkedShowing: false, notCheckedShowing: false};
        case SHOW_CHECKED:
            return {allChecked: false, allShowing: false, checkedShowing: !state.checkedShowing, notCheckedShowing: false};
        case SHOW_NOT_CHECKED:
            return {allChecked: false, allShowing: false, checkedShowing: false, notCheckedShowing: !state.notCheckedShowing};
    }
    return state;
}
