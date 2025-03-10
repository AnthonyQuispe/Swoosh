import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export const FirebaseLogin = async (email, password, navigate) => {
  const auth = getAuth();
  try {
    await signInWithEmailAndPassword(auth, email, password);
    navigate("/dashboard");
  } catch (error) {
    alert("Invaild email or password");
  }
};
