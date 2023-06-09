import {
  createUserWithEmailAndPassword,
  updateProfile,
  setPersistence,
  browserSessionPersistence,
  onAuthStateChanged,
  sendPasswordResetEmail as sendResetEmail,
} from "firebase/auth";
import { auth, db } from "./firebase-config";
import { doc, setDoc, collection, getDocs } from "firebase/firestore";

// created an export function to be called to create users profile
export const createUser = async (
  firstName,
  lastName,
  email,
  password,
  username
) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const { user } = userCredential;
    await updateProfile(user, { displayName: `${firstName} ${lastName}` });
    console.log("User created successfully");

    const usersRef = collection(db, "users");

    // Store user profile in Firestore
    await setDoc(
      doc(usersRef, user.uid),
      {
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        username: username,
      },
      { merge: true }
    );
    //Set browserSessionPersistence
    setPersistence(auth, browserSessionPersistence);
  } catch (error) {
    console.error("Error creating user:", error.message);
    throw error;
  }
};

//Get sports collection for select sport
export const getCollection = async (sport) => {
  const collectionRef = collection(db, sport);
  const querySnapshot = await getDocs(collectionRef);
  const collectionData = [];
  querySnapshot.forEach((doc) => {
    collectionData.push(doc.data());
  });
  return collectionData;
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (user) => {
        unsubscribe(); // Unsubscribe immediately to avoid unnecessary listener calls
        resolve(user);
      },
      reject
    );
  });
};

//reset user password via email
export const sendPasswordResetEmail = async (email, setEmail) => {
  try {
    await sendResetEmail(auth, email);
    console.log("Password reset email sent!");
    setEmail("");
  } catch (error) {
    console.error("Error sending password reset email:", error.message);
    throw error;
  }
};

// Delete User account
export const deleteUser = () => {
  const user = auth.currentUser;

  if (user) {
    // Check if the user's token is valid
    return user
      .getIdToken(true)
      .then(() => {
        // Delete the user account
        return user.delete();
      })
      .catch((error) => {
        if (error.code === "auth/requires-recent-login") {
          // User needs to reauthenticate
          // You can redirect the user to the login page or display a reauthentication dialog
          console.log("User needs to reauthenticate");
        } else {
          // Handle other errors
          console.error("Error deleting user account:", error);
          throw error;
        }
      });
  } else {
    // User is not authenticated, handle the error or redirect to appropriate page
    return Promise.reject(new Error("User is not authenticated"));
  }
};
