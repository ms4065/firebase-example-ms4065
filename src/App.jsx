import { useSigninCheck } from "reactfire";
import Channel from "./components/Channel";
import Navbar from "./components/Navbar";






export default function App() {
  const { status, data: signInCheckResult } = useSigninCheck();

  if (status === "loading") {
    return <span>loading...</span>;
  }

  return (
    <>
      <Navbar />

      {signInCheckResult.signedIn && <Channel />}

    </>
  );
}
