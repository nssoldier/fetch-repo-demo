import React, { useState, useCallback } from "react";

const UsernameInput = ({ onUsernameEnter }) => {
  const [username, setUsername] = useState("");

  const handleKeyDown = useCallback(e => {
    if (e.which === 13) {
      onUsernameEnter && onUsernameEnter(username);
      setUsername("");
    }
  });

  return (
    <input
      value={username}
      onChange={e => setUsername(e.target.value)}
      onKeyDown={e => handleKeyDown(e)}
    />
  );
};

export default UsernameInput;
