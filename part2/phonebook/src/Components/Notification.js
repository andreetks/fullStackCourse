const Notification = ({ message, color }) => {
  if (message === null) {
    return null;
  }
  return (
    <div
      style={{
        color: color,
        background: "lightgrey",
        fontSize: "20px",
        borderStyle: "solid",
        borderRadius: "5px",
        padding: "10px",
        marginBottom: "10px",
      }}
    >
      {message}
    </div>
  );
};

export default Notification;
