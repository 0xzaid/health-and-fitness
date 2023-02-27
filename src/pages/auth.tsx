import React from "react";
import firebase from "../../firebase/clientApp";
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import { useRouter } from "next/router";

// configure FirebaseUI.
const uiConfig = {
    // redirect to / after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
    signInSuccessUrl: "/",
    // we will display Google as auth providers.
    signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID]
};

function SignInScreen() {

    const router = useRouter();

    React.useEffect(() => {
        // If user is already logged in, redirect to home page
        if (firebase.auth().currentUser) {
            firebase.auth().signOut().then(() => {
                router.push("/");
            });
        }
    });


    return (
        <div className="min-h-screen">
            <div className="text-black max-w-xl mx-auto mt-10 px-8 py-12 bg-white shadow-lg rounded-lg">
                <h1 className="text-2xl font-bold text-center mb-6">Health & Fitness Login</h1>
                <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
            </div>
        </div>
    );
}   

export default SignInScreen