import {createId} from 'lodash-id';
import axios from 'axios';

export const CARD_UPDATE = 'CARD_UPDATE';
export const CARD_CREATE = 'CARD_CREATE';
export const CARD_REMOVE = 'CARD_REMOVE';
export const CARD_MOVE = 'CARD_MOVE';
export const CARDS_LOAD = 'CARDS_LOAD';
export const START_FETCH_CARDS = 'START_FETCH_CARDS';

export function createCard(listId, title) {
    return {
        type: CARD_CREATE,
        payload: {
            listId,
            card: {
                title,
                id: createId()
            }
        }
    };
}

export function removeCard(cardId) {
    return {
        type: CARD_REMOVE,
        payload: {
            id: cardId
        }
    };
}

export function updateCard(cardId, updates) {
    return {
        type: CARD_UPDATE,
        payload: {
            id: cardId,
            updates
        }
    };
}

export function moveCard(cardId, targetListId) {
    return {
        type: CARD_MOVE,
        payload: {
            id: cardId,
            listId: targetListId
        }
    };
}

export function updateCardServer(cardId, updates) {
    return function() {
        axios.put(`http://localhost:3001/api/cards/${cardId}`,updates)
        .catch(function (error) {
            console.log(error);
        });
    }
}

export function loadCards(cards) {
    return {
        type: CARDS_LOAD,
        cards
    }
}

// export function fetchCards() {
//     return function(dispatch) {
//         axios.get('http://localhost:3001/api/cards')
//         .then(function (response) {
//             dispatch(loadCards(response.data))
//         })
//         .catch(function (error) {
//             console.log(error);
//         });
//     }
// }


export function fetchCardsSaga() {
    return {
        type: START_FETCH_CARDS
    }
}