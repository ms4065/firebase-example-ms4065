import { deleteDoc, doc } from "firebase/firestore";
import { Alert } from '@mantine/core';
import { useFirestore, useUser } from "reactfire";
import Optionsmenu from "./Optionsmenu";

const dateTimeFormat = new Intl.DateTimeFormat("en-GB", {
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  hour12: false,
});

export default function Message({ createdAt, text, displayName, id, uid }) {
  const firestore = useFirestore();
  const { data: user } = useUser();

  return (
    <div style={{wordBreak: 'break-all'}}>
      <Alert color="blue" variant="filled">
      [
      {createdAt?.seconds ? (
        <span>{dateTimeFormat.format(new Date(createdAt.seconds * 1000))}</span>
      ) : null}
      ]{" "}
      <strong>
        {"<"}
        {displayName ? displayName : null}
        {">"}
      </strong>{" "}
      {text}
      {user.uid === uid &&
        <Optionsmenu id={id}>
        </Optionsmenu>
      }
      </Alert>

      <br />
      <br />
    </div>
  );
}
