import { Affix } from "@mantine/core";
import { Box } from "@mui/material";
import { collection, limit, orderBy, query } from "firebase/firestore";
import { useFirestore, useFirestoreCollectionData } from "reactfire";
import Form from './Form';
import Messages from './Messages';


export default function Channel() {
  const firestore = useFirestore();
  const messagesCollection = collection(firestore, "messages");
  const messagesQuery = query(
    messagesCollection,
    orderBy("createdAt"),
    limit(100)
  );

  const { status, data: messages } = useFirestoreCollectionData(messagesQuery, {
    idField: "id", // this field will be added to the object created from each document
  });

  return (
    <Box sx={{marginTop:3}}>
      {status === "loading" ? (
        <span>loading...</span>
      ) : (
        <Messages messages={messages} />
      )}
      <br />
      <br />
      <Affix position={{ bottom: 20, left: 20, width: "75%"  }}>
      <Form messagesCollection={messagesCollection} />
      </Affix>
    </Box>
  );
}
