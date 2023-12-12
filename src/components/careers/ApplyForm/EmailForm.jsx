import React, { useState } from "react";
import axios from "axios";

const EmailForm = () => {
  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const [text, setText] = useState("");
  const [attachment, setAttachment] = useState(null);

  const handleFileChange = (e) => {
    setAttachment(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("to", to);
    formData.append("subject", subject);
    formData.append("text", text);
    formData.append("attachment", attachment);

    try {
      const response = await axios.post(
        "http://localhost:3001/send-email",
        formData
      );
      console.log(response.data);
    } catch (error) {
      console.error(
        "Error sending email:",
        error.response ? error.response.data : error.message
      );
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: "100px" }}>
      <label>
        To:
        <input
          type="email"
          value={to}
          onChange={(e) => setTo(e.target.value)}
          required
        />
      </label>
      <label>
        Subject:
        <input
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
        />
      </label>
      <label>
        Text:
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        />
      </label>
      <label>
        Attachment:
        <input type="file" onChange={handleFileChange} />
      </label>
      <button type="submit">Send Email</button>
    </form>
  );
};

export default EmailForm;
