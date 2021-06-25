import React, { useState } from "react";
import "./SendMail.css";
import { Button } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { useDispatch } from "react-redux";
import { closeSendMessage } from "../features/mailSlice";
import { db } from "../firebase";
import firebase from "firebase";

const SendMail = () => {
  const [to, setTo] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection("emails").add({
      to: to,
      subject: subject,
      message: message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    dispatch(closeSendMessage());
  };

  return (
    <div className="sendMail">
      <div className="sendMail__header">
        <h3>New Message</h3>
        <CloseIcon
          className="sendMail__close"
          onClick={() => dispatch(closeSendMessage())}
        />
      </div>
      <form onSubmit={handleSubmit}>
        <input
          name="to"
          placeholder="To"
          type="email"
          value={to}
          required
          onChange={(e) => setTo(e.target.value)}
        />
        <input
          name="subject"
          placeholder="Subject"
          type="text"
          required
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
        <input
          name="message"
          placeholder="Message"
          type="text"
          className="sendMail__message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <div className="sendMail__options">
          <Button
            className="sendMail__send"
            variant="contained"
            color="primary"
            type="submit"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SendMail;
