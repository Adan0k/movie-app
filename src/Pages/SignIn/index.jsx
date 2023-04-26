import Firebase from "../../gateway/Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { movieContext } from "../../App";
import { useContext } from "react";
import AuthForm from "../../components/AuthForm";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";

const SignIn = () => {
    const { setUser } = useContext(movieContext)
    const logIn = (email, password) => {
        signInWithEmailAndPassword(Firebase.auth, email, password)
            .then(r => setUser(r.user))
            .catch((e) => console.error(e));
    }
    return (
        <>
            <Header>
                <Navbar />
            </Header>
            <AuthForm authenticate={logIn} />
        </>
    );
}

export default SignIn;