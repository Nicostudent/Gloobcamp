"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { BsChatText } from "react-icons/bs";
import { IoMdClose, IoMdSend } from "react-icons/io";
import { UuidGenerator } from "../helpers/UuidGenerator";
import Input from "./Input";
import CustomButton from "./CustomButton";

const STORAGE_KEY = "chatMessages";
const INITIAL_BOT_MESSAGE =
  "Hi there! 😊 I'm your friendly programming assistant, here to help. How can I assist you today?";

export default function ChatComponent() {
  const [message, setMessage] = useState("");
  const [chatMessages, setChatMessages] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [botTyping, setBotTyping] = useState(false);
  const chatBoxRef = useRef(null);

  const saveMessagesToLocalStorage = useCallback((messages) => {
    const expiresAt = Date.now() + 86400000; // Remove after 24 hours
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ value: messages, expiresAt }));
  }, []);
  
  const addMessage = useCallback(
    (type, text) => {
      setChatMessages((prevMessages) => {
        const newMessage = {
          createdAt: Date.now(),
          id: `message-${UuidGenerator()}`,
          text,
          type,
        };
        const updatedMessages = [...prevMessages, newMessage];
        saveMessagesToLocalStorage(updatedMessages);
        return updatedMessages;
      });
    },
    [saveMessagesToLocalStorage]
  );  

  const handleSend = async () => {
    if (!message.trim()) return;
    addMessage("user", message);
    setMessage("");
    setBotTyping(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });
      if (!res.ok) throw new Error("Error sending message");

      const { response } = await res.json();
      addMessage("bot", response);
    } catch (error) {
      addMessage("bot", `Error: ${error.message}`);
    } finally {
      setBotTyping(false);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleSend();
    }
  };

  useEffect(() => {
    const storedData = localStorage.getItem(STORAGE_KEY);
    if (storedData) {
      try {
        const { value, expiresAt } = JSON.parse(storedData);
        if (Date.now() >= expiresAt) {
          localStorage.removeItem(STORAGE_KEY);
          setChatMessages([]);
        } else if (Array.isArray(value)) {
          setChatMessages(value);
        }
      } catch (error) {
        console.error("Error parsing chat messages from localStorage:", error);
      }
    }
  }, [isOpen]);

  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [chatMessages, botTyping]);

  useEffect(() => {
    if (isOpen && !chatMessages.some((msg) => msg.type === "bot" && msg.text === INITIAL_BOT_MESSAGE)) {
      addMessage("bot", INITIAL_BOT_MESSAGE);
    }
  }, [isOpen, chatMessages, addMessage]);

  return (
    <div className="right-0 bottom-0 fixed mr-4 sm:mr-8 mb-4 sm:mb-8">
      {!isOpen ? (
        <CustomButton
          aria-label="Open Chatbot"
          purple
          onClick={() => setIsOpen(true)}
          className="flex items-center bg-primary hover:opacity-85 px-4 py-2 rounded-full text-white transition duration-300"
          icon={<BsChatText className="w-10 h-14" />}
        />
      ) : (
        <div className="right-4 bottom-0 fixed flex flex-col shadow-md rounded-lg w-11/12 sm:w-96 h-1/2">
          <div className="flex justify-between items-center bg-primary p-4 rounded-t-lg text-white">
            <p className="font-semibold text-lg">Chat Bot</p>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-300 hover:text-gray-400"
            >
              <IoMdClose className="w-6 h-6" />
            </button>
          </div>
          <div ref={chatBoxRef} className="flex-1 dark:border-x-2 dark:border-primary bg-white dark:bg-stone-900 p-4 overflow-y-auto scrollbar-hide">
            {chatMessages.map((msg) => (
              <div
                key={msg.id}
                className={`mb-2 ${msg.type === "user" ? "text-right" : ""}`}
              >
                <p
                  className={`rounded-lg py-2 px-4 inline-block ${
                    msg.type === "user"
                      ? "bg-primary text-white"
                      : "bg-gray-200 text-gray-700 dark:bg-stone-600 dark: dark:text-white"
                  }`}
                >
                  {msg.text}
                </p>
              </div>
            ))}
            {botTyping && (
              <div className="flex items-end space-x-2 mb-2">
                <div className="bg-primary rounded-full w-3 h-3 animate-pulse"></div>
                <div className="bg-primary rounded-full w-3 h-3 animate-pulse delay-200"></div>
                <div className="bg-primary rounded-full w-3 h-3 animate-pulse delay-400"></div>
              </div>
            )}
          </div>
          <div className="dark:border-x-2 dark:border-primary bg-white dark:bg-stone-900 p-4 border-t">
            <Input
              type="text"
              placeholder="Type a message"
              name="name"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={handleKeyPress}
              buttonText="Send"
              icon={<IoMdSend />}
            />
          </div>
        </div>
      )}
    </div>
  );
}
