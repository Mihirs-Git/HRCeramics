import * as ActionTypes from './ActionTypes';
import { firestore } from '../firebase/firebase';


//postRatings
export const postRatings = (rating) => (dispatch)=>{

    var userRating = rating;
    console.log(userRating)
    var words = ['one', 'two', 'three', 'four', 'five'];
    var rate = words[userRating-1];


    return firestore.collection('rating').doc("ratings").get()
    .then(doc => {
        let ratings = doc.data();
        ratings[rate] += 1
        return ratings;
    })
    .then(ratings => {
        
        firestore.collection('rating').doc("ratings").update({

            "one": ratings.one,
            "two": ratings.two,
            "three": ratings.three,
            "four": ratings.four,
            "five": ratings.five
    
        })

        return firestore.collection('rating').doc("ratings").get()
        .then(doc => {
            let ratings = doc.data();
            return ratings;
        })
        .then(ratings => dispatch(showRatings(ratings)))
        .catch(error => dispatch(ratingsFailed(error.message)));

    })
    .catch(error => dispatch(ratingsFailed(error.message)));
    
}


//fetchRatings
export const fetchRatings = () => (dispatch) => {

    return firestore.collection('rating').doc("ratings").get()
    .then(doc => {
        let ratings = doc.data();
        return ratings;
    })
    .then(ratings => dispatch(showRatings(ratings)))
    .catch(error => dispatch(ratingsFailed(error.message)));

};


export const fetchCatagory1 = () => (dispatch) => {

    dispatch(catagoryLoading(true));

    return firestore.collection('CATAGORY1').get()
    .then(snapshot => {

        let catagory1 = [];
        snapshot.forEach(doc => {

            const data = doc.data();
            console.log(data);
            const _id = doc.id
            console.log(_id);
            catagory1.push({_id, ...data});
            
        });

        return catagory1;

    })
    .then(CATAGORY1 => dispatch(addCatagory(CATAGORY1)))
    .catch(error => dispatch(catagoryFailed(error.message)));
    
}

export const catagoryLoading = () => ({
    type: ActionTypes.CATAGORY1_LOADING
});

export const catagoryFailed = (errmess) => ({
    type: ActionTypes.CATAGORY1_FAILED,
    payload: errmess
});

export const addCatagory = (catagory1) => ({
    type: ActionTypes.ADD_CATAGORY1,
    payload: catagory1
});
export const addRatings = (ratings) => ({
    type: ActionTypes.ADD_RATINGS,
    payload: ratings
});

export const showRatings = (ratings) => ({
    type: ActionTypes.SHOW_RATINGS,
    payload: ratings
});

export const ratingsFailed = (errmess) => ({
    type: ActionTypes.RATINGS_FAILED,
    payload: errmess
});

