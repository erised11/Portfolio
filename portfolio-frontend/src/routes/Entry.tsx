import { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";
import axios from "axios";

import enterKey from "../assets/enter-key.svg";

type TerminalMessage = {
  text: JSX.Element;
  from: string;
};

const Entry = () => {
  const [terminalReady, setTerminalReady] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [messages, setMessages] = useState<TerminalMessage[]>([]);
  const [responses, setResponses] = useState<string[]>([]);

  useEffect(() => {
    const sendQuery = async () => {
      if (
        messages.length > 0 &&
        messages[messages.length - 1].from === "user"
      ) {
        try {
          const apiUrl = "http://localhost:3001/process";
          const response = await axios.post(apiUrl, {
            query: messages[messages.length - 1].text.props.value,
          });
          if (response.data && response.data.answer) {
            onAddResponse(response.data.answer);
          }
        } catch (error) {
          console.error("Error in sending message:", error);
        }
      }
    };
    sendQuery();
  }, [messages]); // Effect runs when `messages` changes.

  const calculateRows = (text: string) => {
    const averageCharsPerLine = 50; // Adjust this based on your textarea width and font size
    return Math.ceil(text.length / averageCharsPerLine) || 1;
  };

  const onAddMessage = () => {
    if (userInput.trim() === "") {
      return;
    }
    setMessages([
      ...messages,
      {
        text: (
          <textarea
            className="w-full bg-transparent border-none resize-none focus:ring-0 outline-none"
            key={messages.length}
            value={userInput}
            readOnly
            rows={calculateRows(userInput)}
          />
        ),
        from: "user",
      },
    ]);
    setUserInput("");
  };

  const calculateTypingDelay = (text: string) => {
    const maxDelay = 50;
    const minDelay = 14;
    const minLen = 5;
    const maxLen = 100;
    const len = text.length;

    if (len <= minLen) {
      return maxDelay;
    } else if (len >= maxLen) {
      return minDelay;
    } else {
      // Linear interpolation
      return (
        maxDelay - ((maxDelay - minDelay) * (len - minLen)) / (maxLen - minLen)
      );
    }
  };

  const onAddResponse = (response: string) => {
    const typingDelay = calculateTypingDelay(response);
    setResponses([...responses, response]); // store responses for lookup / summarization later
    setMessages([
      ...messages,
      {
        text: (
          <div>
            <Typewriter
              onInit={(typewriter: any) => {
                const { cursor } = typewriter.state.elements;
                typewriter
                  .changeDelay(typingDelay)
                  .typeString(response)
                  .callFunction(() => cursor.setAttribute("hidden", "hidden"))
                  .start();
              }}
            />
          </div>
        ),
        from: "ai",
      },
    ]);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      onAddMessage();
    }
  };

  const handleSubmitQuery = () => {
    onAddMessage();
  };

  return (
    <div className="text-lg">
      <div className="flex flex-col gap-10 text-green-500 font-terminal tracking-widest">
        <div className="bg-black h-[400px] rounded-xl">
          <div className="w-full h-[400px] flex flex-col-reverse overflow-auto">
            <div className="w-full mt-5 ">
              <div className="flex flex-row p-5 gap-5">
                <div className="">~/workspace/&gt;</div>
                <Typewriter
                  onInit={(typewriter: any) => {
                    const { cursor } = typewriter.state.elements;
                    typewriter
                      .changeDelay(14)
                      .typeString("My Name is Brandon Ryan. ")
                      .pauseFor(400)
                      .typeString("Welcome to my portfolio. ")
                      .pauseFor(700)
                      .typeString(
                        "This portfolio is powered by AI! Find out more about me by chatting, or simply browse the other tabs."
                      )
                      .callFunction(() => setTerminalReady(true))
                      .typeString(
                        "\n\nTry asking something like... what is Brandon's experience?"
                      )
                      .callFunction(() =>
                        cursor.setAttribute("hidden", "hidden")
                      )
                      .start();
                  }}
                />
              </div>
              {messages.map((message, index) => (
                <div key={index} className="flex flex-row gap-5 p-5">
                  <div className="">~/workspace/&gt;</div>
                  <div className="w-full">
                    <div
                      className={`${message.from === "ai" ? "text-white" : ""}`}
                    >
                      {message.text}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {terminalReady && (
          <div className="bg-black h-16 w-full mx-auto rounded-xl text-lg box-content flex flex-col justify-center">
            <div className="flex flex-row px-5 gap-5 items-center">
              <div>~/workspace/&gt;</div>
              <input
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="bg-black my-auto w-full border-none focus:ring-0 outline-none"
              />
              <img
                onClick={() => handleSubmitQuery()}
                className="h-9 animate-pulse-short"
                src={enterKey}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Entry;
