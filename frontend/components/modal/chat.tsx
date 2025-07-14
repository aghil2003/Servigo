

// "use client";
// import { useState } from "react";
// import { X } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";
// import AxiosInstance from "@/axios/axiosInstance";
// import { useSelector } from "react-redux";
// import type { RootState } from "@/redux/store";

// export default function ChatModal({ isOpen, setIsOpen }) {
//     const userId = useSelector((state: RootState) => state.auth.userId);
//     const name = useSelector((state: RootState) => state.auth.name);
//     const [conversationStep, setConversationStep] = useState("idle");
// const [selectedService, setSelectedService] = useState("");
// const [selectedLocation,setLocation]= useState("");

//   const [messages, setMessages] = useState([
//     { id: 1, text: `Hi ${name}!,this is servigo chatboat how can i help you today..`, sender: "bot" },
//   ]);
//   const [input, setInput] = useState("");



//    const handleSend = async () => {
//   if (!input.trim()) return;

//   const userMessage = { id: Date.now(), text: input, sender: "user" };
//   setMessages((prev) => [...prev, userMessage]);
//   setInput("");

//   const lowerInput = input.toLowerCase();

//   if (conversationStep === "awaitingConfirmation") {
//     if (["yes", "yeah", "yup", "sure"].includes(lowerInput)) {
//       setConversationStep("awaitingService");
//       setMessages((prev) => [
//         ...prev,
//         { id: Date.now() + 1, text: "Great! Which service would you like to book?", sender: "bot" },
//       ]);
//       return;
//     } else {
//       setConversationStep("idle");
//       setMessages((prev) => [
//         ...prev,
//         { id: Date.now() + 1, text: "Alright! Let me know if you need help later.", sender: "bot" },
//       ]);
//       return;
//     }
//   }

//   if (conversationStep === "awaitingService") {
//     setSelectedService(input);
//     setConversationStep("awaitingLocation");
//     setMessages((prev) => [
//       ...prev,
//      { 
//       id: Date.now() + 1, 
//       text: `Perfect! Which location would you prefer for ${input}? (e.g., Thrissur, Punkunnam)`, 
//       sender: "bot" 
//      },
//     ]);
//     return;
//   }

//  if (conversationStep === "awaitingLocation") {
//   setConversationStep("idle");

//   const [place, city] = input.split(",").map(s => s.trim());

//   setMessages((prev) => [
//     ...prev,
//     {
//       id: Date.now() + 1,
//       text: `Awesome! Searching for ${selectedService} workers at ${place}, ${city}...`,
//       sender: "bot",
//     },
//   ]);

//   try {
//     const res = await AxiosInstance.post("/chat", {
//       message: "find workers",
//       location: { city, place },
//     });

//     const { reply, workers } = res.data;

//     setMessages((prev) => [
//       ...prev,
//       {
//         id: Date.now() + 2,
//         text: reply,
//         sender: "bot",
//       },
//     ]);

//     if (workers?.length) {
//       workers.forEach((worker, index) => {
//         setMessages((prev) => [
//           ...prev,
//           {
//             id: Date.now() + 3 + index,
//             text: `${worker.name} - ${worker.skill} (${worker.experience} yrs exp)`,
//             sender: "bot",
//           },
//         ]);
//       });
//     }
//   } catch (error) {
//     console.error("Worker fetch error:", error);
//     setMessages((prev) => [
//       ...prev,
//       {
//         id: Date.now() + 100,
//         text: "Something went wrong while fetching workers.",
//         sender: "bot",
//       },
//     ]);
//   }

//   return;
// }
// }

// };


//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <motion.div
//           key="chat-modal"
//           initial={{ opacity: 0, y: 50, scale: 0.95 }}
//           animate={{ opacity: 1, y: 0, scale: 1 }}
//           exit={{ opacity: 0, y: 50, scale: 0.95 }}
//           transition={{ duration: 0.3, ease: "easeInOut" }}
//           className="fixed inset-0 z-50 flex items-center justify-end pr-16"
//         >
//           <motion.div
//             initial={{ x: 100, opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//             exit={{ x: 100, opacity: 0 }}
//             transition={{ duration: 0.3 }}
//             className="w-80 bg-white shadow-xl rounded-lg overflow-hidden flex flex-col border border-gray-300 relative"
//           >
//             {/* Header */}
//             <div className="flex justify-between items-center px-4 py-2 bg-blue-600 text-white">
//               <h2 className="text-sm font-semibold">Chat with us</h2>
//               <button
//                 onClick={() => setIsOpen(false)}
//                 className="hover:text-gray-200"
//               >
//                 <X className="w-5 h-5" />
//               </button>
//             </div>

//             {/* Messages */}
//             <div className="px-4 py-2 h-96 overflow-y-auto bg-gray-50 space-y-2">
//               {messages.map((msg) => (
//                 <div
//                   key={msg.id}
//                   className={`p-2 rounded-md text-sm max-w-[80%] ${
//                     msg.sender === "user"
//                       ? "bg-blue-100 self-end ml-auto"
//                       : "bg-gray-200 self-start mr-auto"
//                   }`}
//                 >
//                   {msg.text}
//                 </div>
//               ))}
//             </div>

//             {/* Input */}
//             <div className="flex items-center px-3 py-2 border-t">
//               <input
//                 type="text"
//                 value={input}
//                 onChange={(e) => setInput(e.target.value)}
//                 onKeyDown={(e) => e.key === "Enter" && handleSend()}
//                 placeholder="Type your message..."
//                 className="flex-1 outline-none border border-gray-300 rounded px-2 py-1 text-sm"
//               />
//               <button
//                 onClick={handleSend}
//                 className="ml-2 bg-blue-600 text-white text-sm px-3 py-1 rounded"
//               >
//                 Send
//               </button>
//             </div>
//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// }


//   const handleSend = async () => {
//   if (!input.trim()) return;

//   const userMessage = { id: Date.now(), text: input, sender: "user" };
//   setMessages((prev) => [...prev, userMessage]);
//   setInput("");

//   try {
//     const res = await AxiosInstance.post("/chat", {
//       message: input,
//     });

//     const { reply } = res.data;

//     if (reply) {
//       const botMessage = {
//         id: Date.now() + 1,
//         text: reply,
//         sender: "bot",
//       };
//       setMessages((prev) => [...prev, botMessage]);
//     } else {
//       const errorMessage = {
//         id: Date.now() + 2,
//         text: "Something went wrong.",
//         sender: "bot",
//       };
//       setMessages((prev) => [...prev, errorMessage]);
//     }
//   } catch (error) {
//     console.error("Chat error:", error);
//     const errorMessage = {
//       id: Date.now() + 3,
//       text: "Error connecting to server.",
//       sender: "bot",
//     };
//     setMessages((prev) => [...prev, errorMessage]);
//   }
// };

"use client";
import { useState, useEffect, useRef } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import AxiosInstance from "@/axios/axiosInstance";
import { useSelector } from "react-redux";
import type { RootState } from "@/redux/store";

export default function ChatModal({ isOpen, setIsOpen }) {
  const userId = useSelector((state: RootState) => state.auth.userId);
  const name = useSelector((state: RootState) => state.auth.name);
  const [conversationStep, setConversationStep] = useState("idle");
  const [selectedService, setSelectedService] = useState("");
  const [selectedLocation, setLocation] = useState("");
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: `Hi ${name}!, this is Servigo chatbot. How can I help you today?`,
      sender: "bot",
    },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { id: Date.now(), text: input, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    const lowerInput = input.toLowerCase();

    if (conversationStep === "awaitingConfirmation") {
      if (["yes", "yeah", "yup", "sure"].includes(lowerInput)) {
        setConversationStep("awaitingService");
        setMessages((prev) => [
          ...prev,
          {
            id: Date.now() + 1,
            text: "Great! Which service would you like to book?",
            sender: "bot",
          },
        ]);
        return;
      } else {
        setConversationStep("idle");
        setMessages((prev) => [
          ...prev,
          {
            id: Date.now() + 1,
            text: "Alright! Let me know if you need help later.",
            sender: "bot",
          },
        ]);
        return;
      }
    }

    if (conversationStep === "awaitingService") {
      setSelectedService(input);
      setConversationStep("awaitingLocation");
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          text: `Perfect! Which location would you prefer for ${input}? (e.g., Punkunnam, Thrissur)`,
          sender: "bot",
        },
      ]);
      return;
    }

    if (conversationStep === "awaitingLocation") {
      const [place, city] = input.split(",").map((s) => s.trim());

      if (!place || !city) {
        setMessages((prev) => [
          ...prev,
          {
            id: Date.now() + 1,
            text: "Please enter location in the format: Place, City (e.g., Punkunnam, Thrissur)",
            sender: "bot",
          },
        ]);
        return;
      }

      setLocation({ place, city });
      setConversationStep("idle");

      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 2,
          text: `Awesome! Searching for ${selectedService} workers at ${place}, ${city}...`,
          sender: "bot",
        },
      ]);

      try {
        const res = await AxiosInstance.post("/chat", {
          message: "find workers",
          location: { place, city },
        });

        const { reply, workers } = res.data;

        setMessages((prev) => [
          ...prev,
          {
            id: Date.now() + 3,
            text: reply,
            sender: "bot",
          },
        ]);

        if (workers?.length) {
          workers.forEach((worker, index) => {
            setMessages((prev) => [
              ...prev,
              {
                id: Date.now() + 4 + index,
                text: `${worker.name} `,
                sender: "bot",
              },
            ]);
          });
        }
      } catch (error) {
        console.error("Worker fetch error:", error);
        setMessages((prev) => [
          ...prev,
          {
            id: Date.now() + 100,
            text: "Something went wrong while fetching workers.",
            sender: "bot",
          },
        ]);
      }
      return;
    }

    try {
      const res = await AxiosInstance.post("/chat", { message: input });
      const { reply } = res.data;

      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 2,
          text: reply || "Sorry, I didn't get that.",
          sender: "bot",
        },
      ]);

      if (reply?.toLowerCase().includes("services")) {
        setConversationStep("awaitingConfirmation");
      }
    } catch (error) {
      console.error("Chat error:", error);
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 3,
          text: "Error connecting to the server.",
          sender: "bot",
        },
      ]);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="chat-modal"
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.95 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex items-center justify-end pr-16"
        >
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 100, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="w-80 bg-white shadow-xl rounded-lg overflow-hidden flex flex-col border border-gray-300 relative"
          >
            <div className="flex justify-between items-center px-4 py-2 bg-blue-600 text-white">
              <h2 className="text-sm font-semibold">Servigo Bot</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="hover:text-gray-200"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="px-4 py-2 h-96 overflow-y-auto bg-gray-50 space-y-2">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`p-2 rounded-md text-sm max-w-[80%] ${
                    msg.sender === "user"
                      ? "bg-blue-100 self-end ml-auto"
                      : "bg-gray-200 self-start mr-auto"
                  }`}
                >
                  {msg.text}
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            <div className="flex items-center px-3 py-2 border-t">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Type your message..."
                className="flex-1 outline-none border border-gray-300 rounded px-2 py-1 text-sm"
              />
              <button
                onClick={handleSend}
                className="ml-2 bg-blue-600 text-white text-sm px-3 py-1 rounded"
              >
                Send
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
