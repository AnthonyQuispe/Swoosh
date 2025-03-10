import { sendPasswordResetEmail as sendResetEmail } from "firebase/auth";
import { auth } from "./FirebaseConfig";

export const sendPasswordResetEmail = async (email, setEmail) => {
  try {
    await sendResetEmail(auth, email);
    console.log("Password reset email sent!");
    setEmail("");
  } catch (error) {
    console.log("Error sending password reset email", error.message);
    throw error;
  }
};
