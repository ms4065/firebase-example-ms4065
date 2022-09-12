import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";
import {
  AuthProvider,
  DatabaseProvider,
  FirestoreProvider,
  useFirebaseApp,
} from "reactfire";

export default function FirestoreComponents({ children }) {
  const app = useFirebaseApp();
  const auth = getAuth(app);
  const database = getDatabase(app);

  return (
    <FirestoreProvider sdk={getFirestore(app)}>
      <AuthProvider sdk={auth}>
        <DatabaseProvider sdk={database}>{children}</DatabaseProvider>
      </AuthProvider>
    </FirestoreProvider>
  );
}
