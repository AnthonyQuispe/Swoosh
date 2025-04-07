import { getDoc, doc } from "firebase/firestore";
import { db } from "./FirebaseConfig";
import { setProfileData } from "../features/profile/profileSlice";

export const loadProfileFromFirestore = async (userId, dispatch) => {
  try {
    const docRef = doc(db, "users", userId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      dispatch(setProfileData(docSnap.data()));
    } else {
      console.log("No such document!");
    }
  } catch (error) {
    console.error("Error fetching profile:", error);
  }
};
