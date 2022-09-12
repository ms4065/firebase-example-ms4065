import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut as firebaseSignOut,
  useDeviceLanguage,
} from "firebase/auth";

export const signInWithGoogle = async (auth) => {
  useDeviceLanguage(auth);
  await signInWithPopup(auth, new GoogleAuthProvider());
};

// https://stackoverflow.com/a/66017295
const clearFirestoreCache = () => {
  const map = globalThis["_reactFirePreloadedObservables"];
  Array.from(map.keys()).forEach(
    (key) => key.includes("firestore") && map.delete(key)
  );
};

export const signOut = async (auth) => {
  await firebaseSignOut(auth);
  clearFirestoreCache();
};
