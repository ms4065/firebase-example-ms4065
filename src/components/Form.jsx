import { addDoc, serverTimestamp } from "firebase/firestore";
import { useState } from "react";
import { useUser } from "reactfire";
import { TextInput, ActionIcon, useMantineTheme, Affix } from '@mantine/core';
import { IconSearch, IconArrowRight, IconArrowLeft } from '@tabler/icons';


export default function Form({ messagesCollection }) {
  const theme = useMantineTheme();
  const [newMessage, setNewMessage] = useState("");
  const { data: user } = useUser();

  const { uid, displayName, photoURL } = user;

  const handleChange = (event) => {
    setNewMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const trimmedMessage = newMessage.trim();
    if (trimmedMessage) {
      // Add new message in Firestore
      addDoc(messagesCollection, {
        text: trimmedMessage,
        createdAt: serverTimestamp(),
        uid,
        displayName,
        photoURL,
      });
      // Clear input field
      setNewMessage("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextInput 
      radius="md"
      size="md"
      rightSection={
        <ActionIcon component="button" disabled={!newMessage} type="submit" radius="md" color={theme.primaryColor} variant="filled">
          {theme.dir === 'ltr' ? (
            <IconArrowRight size={40} stroke={1.5} />
          ) : (
            <IconArrowLeft size={40} stroke={1.5} />
          )}
        </ActionIcon>
      }
      onSubmit={handleSubmit}
      value={newMessage}
      onChange={handleChange}
      placeholder="Write chat message here"
      rightSectionWidth={42}
    />
    </form>
  );
}

