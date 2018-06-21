import ListReducer from '../lists.js';
import { LIST_LOAD } from '../../actions/lists';
import loadList from '../../actions/lists';

const list = {
    id: 1,
    title: 'To do'
}

describe('ListReducer',() => {
    it('handles LIST_LOAD', () => {
        expect(ListReducer([], {
            type: LIST_LOAD,
            list
        })).toEqual({
            id: 1,
            title: 'To do'
        })
    });
} )