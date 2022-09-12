import { useSigninCheck } from "reactfire";
import Channel from "./components/Channel";
import SignInOutButton from "./components/SignInOutButton";

export default function App() {
  const { status, data: signInCheckResult } = useSigninCheck();

  if (status === "loading") {
    return <span>loading...</span>;
  }

  return (
    <>
      <SignInOutButton />
      {signInCheckResult.signedIn && <Channel />}
    </>
  );
}
