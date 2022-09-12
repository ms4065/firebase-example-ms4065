import { useAuth, useSigninCheck } from "reactfire";
import { signInWithGoogle, signOut } from "../utils/firebase/auth";

export default function SignInOutButton() {
  const { data: signInCheckResult } = useSigninCheck();
  const auth = useAuth();

  return signInCheckResult.signedIn ? (
    <button onClick={() => signOut(auth)}>Sign out</button>
  ) : (
    <button onClick={() => signInWithGoogle(auth)}>Sign in with Google</button>
  );
}
