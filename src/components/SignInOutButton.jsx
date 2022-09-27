import { Button } from "@mui/material";
import { useAuth, useSigninCheck } from "reactfire";
import { signInWithGoogle, signOut } from "../utils/firebase/auth";

export default function SignInOutButton({color}) {
  const { data: signInCheckResult } = useSigninCheck();
  const auth = useAuth();

  return signInCheckResult.signedIn ? (
    <Button color={color} onClick={() => signOut(auth)}>Sign out</Button>
  ) : (
    <Button color={color} onClick={() => signInWithGoogle(auth)}>Sign in with Google</Button>
  );
}
