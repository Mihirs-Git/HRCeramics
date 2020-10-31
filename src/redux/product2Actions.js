import * as ActionTypes from './ActionTypes';

import { firestore } from '../firebase/firebase';


export const fetchCatagory2 = () => (dispatch) => {

    dispatch(catagoryLoading(true));

    return firestore.collection('CATAGORY2').get()
    .then(snapshot => {

        let catagory2 = [];
        snapshot.forEach(doc => {

            const data = doc.data();
            console.log(data);
            const _id = doc.id
            catagory2.push({_id, ...data});
            
        });

        return catagory2;

    })
    .then(CATAGORY2 => dispatch(addCatagory(CATAGORY2)))
    .catch(error => dispatch(catagoryFailed(error.message)));
    
}

export const catagoryLoading = () => ({
    type: ActionTypes.CATAGORY2_LOADING
});

export const catagoryFailed = (errmess) => ({
    type: ActionTypes.CATAGORY2_FAILED,
    payload: errmess
});

export const addCatagory = (catagory2) => ({
    type: ActionTypes.ADD_CATAGORY2,
    payload: catagory2
});
