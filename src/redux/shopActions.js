import * as ActionTypes from './ActionTypes';

import { firestore, firebasestore } from '../firebase/firebase';



export const fetchShop = () => (dispatch) => {

    dispatch(catagoryLoading(true));

    return firestore.collection('SHOPDATA').get()
    .then(snapshot => {

        let shopData = [];
        snapshot.forEach(doc => {

            const data = doc.data();
            const _id = doc.id
            shopData.push({_id, ...data});
            
        });

        return shopData;

    })
    .then(SHOPDATA => dispatch(addCatagory(SHOPDATA)))
    .catch(error => dispatch(catagoryFailed(error.message)));
    
}

export const catagoryLoading = () => ({
    type: ActionTypes.CATAGORY3_LOADING
});

export const catagoryFailed = (errmess) => ({
    type: ActionTypes.CATAGORY3_FAILED,
    payload: errmess
});

export const addCatagory = (shop) => ({
    type: ActionTypes.ADD_CATAGORY3,
    payload: shop
});