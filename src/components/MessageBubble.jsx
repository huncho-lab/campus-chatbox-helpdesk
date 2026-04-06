function MessageBubble({ text, role }) {
  const isUser = role === "user";

  return (
    <div
      style={{
        display: "flex",
        justifyContent: isUser ? "flex-end" : "flex-start",
        margin: "10px 0"
      }}
    >
      <div
        style={{
          backgroundColor: isUser ? "#4CAF50" : "#2196F3",
          color: "white",
          padding: "10px 15px",
          borderRadius: "15px",
          maxWidth: "60%"
        }}
      >
        {text}
      </div>
    </div>
  );
}

export default MessageBubble;