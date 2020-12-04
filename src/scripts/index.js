import './firebase/firebaseConfig';
import { clickerHandler } from "./util";
import { googleSignIn, googleSignOut } from "./firebase/firebaseAuthentication";

clickerHandler("signin-google", googleSignIn);
clickerHandler("app-signout", googleSignOut);