// import axios from 'axios';

export const LISTS_RENAME = 'LIST_RENAME';
export const LISTS_UPDATE = 'LIST_UPDATE';
export const LISTS_REMOVE = 'LIST_REMOVE';
export const LISTS_CREATE = 'LIST_CREATE';
export const LIST_LOAD = 'LIST_LOAD';
export const START_FETCH_LIST = 'START_FETCH_LIST';

export function renameList(listId, title) {
    return {
        type: LISTS_RENAME,
        payload: {
            id: listId,
            title
        }
    };
}

export function loadList(list) {
    return {
        type: LIST_LOAD,
        list
    }
}

// export function fetchList() {
//     return function() {
//         axios.get('http://localhost:3001/api/lists')
//     }
// }

export function fetchListSaga() {
    return {
        type: START_FETCH_LIST,
    }
}