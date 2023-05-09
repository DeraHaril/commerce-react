import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyCOMHlTMQtc2BVo_lqWRexo2ak8E-lgh9M",
    authDomain: "commerce-react-db.firebaseapp.com",
    projectId: "commerce-react-db",
    storageBucket: "commerce-react-db.appspot.com",
    messagingSenderId: "59782382389",
    appId: "1:59782382389:web:ee3a6c843f1037b655827c",
    measurementId: "G-2N3E392Z5S"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth)return;
    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get();

    if(!snapShot.exists){
        const {displayName,email} = userAuth;
        const createdAt = new Date();
        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }
        catch(error){
            console.log('error creating user', error.message);
        }
    }
    return userRef;
}
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt:'select_account'});
export const signWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;