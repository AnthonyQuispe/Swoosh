import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { collection, doc, setDoc } from "firebase/firestore";
import { db } from "./FirebaseConfig"; // Ensure you import Firestore

export const FirebaseSignup = async (username, email, password, navigate) => {
  const auth = getAuth();
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    // Save user data to Firestore
    const usersRef = collection(db, "users");
    await setDoc(
      doc(usersRef, user.uid),
      {
        email: user.email,
        username: username,
      },
      { merge: true }
    );

    navigate("/dashboard");
  } catch (error) {
    console.error("Error creating account:", error.message);
    throw error;
  }
};
