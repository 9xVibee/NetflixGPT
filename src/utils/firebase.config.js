import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import toast from "react-hot-toast";

const firebaseConfig = {
  apiKey: "AIzaSyCuFDRLc_xyLdPA2cS64EUi-SvOyyrCz3s",
  authDomain: "netflixxgpttt.firebaseapp.com",
  projectId: "netflixxgpttt",
  storageBucket: "netflixxgpttt.appspot.com",
  messagingSenderId: "129623916960",
  appId: "1:129623916960:web:79cadd2cc9269c5c42e4c5",
  measurementId: "G-HJ8HNP0D5Y",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase
const provider = new GoogleAuthProvider();
const auth = getAuth();

export const authWithGoogle = async () => {
  let user = null;

  await signInWithPopup(auth, provider)
    .then((result) => {
      user = result.user;
    })
    .catch((err) => {
      toast.error("Trouble login through google");
      console.log(err);
    });

  return user;
};
