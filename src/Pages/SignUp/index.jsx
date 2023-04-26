import Firebase from "../../gateway/Firebase";
import AuthForm from "../../components/AuthForm";
import { createUserWithEmailAndPassword } from "firebase/auth";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import { doc, setDoc } from "firebase/firestore";

const SignUp = () => {

    return (
        <>
            <Header>
                <Navbar />
            </Header>
            <AuthForm authenticate={register} />
        </>
    );
}
const register = async (email, password) => {
    try {
        const { user: { uid, email: userEmail } } = await createUserWithEmailAndPassword(Firebase.auth, email, password);
        const userRef = doc(Firebase.firestore, "users", uid);
        await setDoc(userRef, { email: userEmail });
    }
    catch (error) {
        console.error(error);
    }
}

export default SignUp;