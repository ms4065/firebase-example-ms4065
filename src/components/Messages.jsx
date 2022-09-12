import Message from "./Message";

export default function Messages({ messages }) {
  return (
    <pre>
      {messages?.map((message) => (
        <Message key={message.id} {...message} />
      ))}
    </pre>
  );
}
