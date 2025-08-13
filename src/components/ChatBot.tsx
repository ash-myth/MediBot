import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
  ChatSession,
  Content
} from "@google/generative-ai";

// Message type
interface Message {
  text: string;
  isUser: boolean;
  timestamp: Date;
}


const API_KEY = import.meta.env.VITE_GEMINI_API_KEY; 

if (!API_KEY) {
  console.error("Gemini API Key not found. Please set VITE_GEMINI_API_KEY in your .env file and restart the server.");
}

const MODEL_NAME = "gemini-2.5-pro";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const initialBotMessage = "Hi there! I'm MediBot, your medical assistant. I can provide general health information, but I am not a substitute for professional medical advice. How can I help you today?";
  const [messages, setMessages] = useState<Message[]>([
    {
      text: initialBotMessage,
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isBotTyping, setIsBotTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatSessionRef = useRef<ChatSession | null>(null);

  
  useEffect(() => {
    if (!API_KEY) {
      console.error("ChatBot: Gemini API Key is missing. Chat functionality will be disabled.");
      
      return;
    }

    const genAI = new GoogleGenerativeAI(API_KEY);

    const systemInstructionText = `You are MediBot, a friendly and helpful medical assistant.
Your primary goal is to provide general health information and describe publicly known medications when asked.
For medications, you can explain their general purpose, what they are typically used to treat in a general sense, and common knowledge about them.
You must NEVER give dosage advice, recommend a medication for an individual's specific condition, provide treatment plans, or compare medications for a specific user.
ALWAYS STRONGLY EMPHASIZE that your information is for general knowledge only, is not a substitute for professional medical advice, diagnosis, or treatment, and that users must consult a qualified healthcare provider for any personal medical concerns, before taking any medication, or making any decisions about their health.
If you lack specific, reliable information about a niche topic or a very specific drug, it's better to state that you don't have the detailed information and recommend consulting a professional, rather than speculate.
Keep responses concise and easy to understand.
If asked about something unrelated to health or medical topics, politely decline to answer or gently steer the conversation back to health topics.
Do not diagnose conditions. If a user describes symptoms, you can provide general information about conditions that *might* include those symptoms, but immediately follow up with a strong recommendation to see a healthcare professional for diagnosis.`;

    try {
      const model = genAI.getGenerativeModel({
          model: MODEL_NAME,
          systemInstruction: {
              role: "system", 
              parts: [{ text: systemInstructionText }],
          },
          safetySettings: [
              { category: HarmCategory.HARM_CATEGORY_HARASSMENT, threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE },
              { category: HarmCategory.HARM_CATEGORY_HATE_SPEECH, threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE },
              { category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT, threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE },
              { category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT, threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE },
          ],
      });

      chatSessionRef.current = model.startChat({
        generationConfig: {
          maxOutputTokens: 2048,
          temperature: 0.6,
        },
        history: [], 
      });
      console.log("ChatBot: Gemini session initialized successfully.");

    } catch (error) {
        console.error("ChatBot: Error initializing Gemini model or chat session:", error);
        addMessage("Sorry, I couldn't initialize properly. Please try refreshing.", false);
    }

  }, []); 

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const getGeminiResponse = async (userMessage: string) => {
    if (!chatSessionRef.current) {
      addMessage("Sorry, the chat session is not initialized. Please try refreshing.", false);
      setIsBotTyping(false);
      return;
    }
    if (!API_KEY) {
      addMessage("Sorry, I'm currently unavailable due to a configuration issue.", false);
      setIsBotTyping(false);
      return;
    }

    setIsBotTyping(true);
    try {
      console.log("Sending to Gemini:", userMessage);
      const result = await chatSessionRef.current.sendMessage(userMessage);
      const response = result.response;
      const responseText = await response.text();
      
      console.log("Gemini Raw Response Candidate:", response.candidates?.[0]);

      if (!responseText.trim() && response.candidates?.[0]?.finishReason !== "STOP") {
        let blockReason = response.candidates?.[0]?.finishReason;
        console.warn("Gemini response was empty or non-STOP. Finish Reason:", blockReason, "Safety Ratings:", response.candidates?.[0]?.safetyRatings);
        addMessage("I'm unable to respond to that query. It might have triggered a safety filter or the query was too short. Please rephrase or ask something else, or consult a healthcare professional for medical advice.", false);
      } else if (!responseText.trim() && response.candidates?.[0]?.finishReason === "STOP") {
        addMessage("I don't have any further information on that. Can I help with something else?", false);
      } else {
        addMessage(responseText, false);
      }

    } catch (error) {
      console.error("Error getting response from Gemini:", error);
      let errorMessage = "I'm sorry, I encountered an issue and couldn't process your request. Please try again.";
      if (error && typeof error === 'object' && 'message' in error) {
        const errMessage = String(error.message).toLowerCase();
        if (errMessage.includes("safety") || errMessage.includes("blocked")) {
            errorMessage = "I cannot provide a response to that query due to safety guidelines. Please ask something else or consult a healthcare professional.";
        } else if (errMessage.includes("quota")) {
            errorMessage = "Sorry, I'm experiencing high demand or a quota issue. Please try again later."
        } else if (error.message.includes("fetch")) {
            errorMessage = "I'm having trouble connecting to the server. Please check your internet connection and try again.";
        }
      }
      addMessage(errorMessage, false);
    } finally {
      setIsBotTyping(false);
    }
  };

  const addMessage = (text: string, isUser: boolean) => {
    setMessages(prev => [...prev, { text, isUser, timestamp: new Date() }]);
  };

  const handleSendMessage = () => {
    const trimmedInput = inputValue.trim();
    if (trimmedInput) {
      addMessage(trimmedInput, true);
      getGeminiResponse(trimmedInput);
      setInputValue("");
     
      const textarea = document.querySelector('textarea[placeholder="Ask MediBot..."]') as HTMLTextAreaElement | null;
      if (textarea) {
          textarea.style.height = 'auto';
          textarea.style.height = `44px`;
      }
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
    
    const textarea = e.target as HTMLTextAreaElement;
    textarea.style.height = 'auto';
    textarea.style.height = `${Math.min(textarea.scrollHeight, 128)}px`; 
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const toggleChatBot = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={toggleChatBot}
        className={`fixed z-30 bottom-6 right-6 p-4 rounded-full shadow-lg transition-all duration-300 transform ${
          isOpen ? 'bg-red-600 rotate-[135deg]' : 'bg-blue-600 hover:bg-blue-700 animate-bounce-subtle'
        }`} 
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        <MessageCircle size={24} className="text-white" />
      </button>

      {/* Chat Window */}
      <div
        className={`fixed z-20 bottom-24 right-6 w-[350px] max-w-[calc(100vw-3rem)] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg shadow-xl transition-all duration-300 overflow-hidden ${
          isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none'
        }`} 
      >
        {/* Chat Header */}
        <div className="bg-blue-600 text-white p-4 flex items-center justify-between"> {}
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center mr-3">
              <span className="text-blue-600 font-bold text-lg">M</span> {}
            </div>
            <div>
              <h3 className="font-semibold">MediBot Assistant</h3>
              <p className="text-xs opacity-80">{!API_KEY ? "Offline (Config Error)" : (isBotTyping ? "Typing..." : "Online")}</p>
            </div>
          </div>
        </div>

        {/* Chat Messages */}
        <div className="h-80 overflow-y-auto p-4 bg-slate-50 dark:bg-slate-800"> {}
          {messages.map((message, index) => (
            <div
              key={index}
              className={`mb-3 flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[85%] py-2 px-3 rounded-xl shadow-sm ${
                  message.isUser
                    ? 'bg-blue-500 text-white' 
                    : 'bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-600' 
                }`}
              >
                <div className="text-sm whitespace-pre-wrap">{message.text}</div>
                <div className={`text-xs mt-1 text-right ${
                  message.isUser ? 'text-blue-200 dark:text-blue-300' : 'text-slate-400 dark:text-slate-500' 
                }`}>
                  {formatTime(message.timestamp)}
                </div>
              </div>
            </div>
          ))}
          
          {isBotTyping && (
            <div className="flex justify-start mb-3">
              <div className="bg-white dark:bg-slate-700 rounded-xl py-2 px-3 border border-slate-200 dark:border-slate-600 shadow-sm"> {}
                <div className="flex space-x-1.5 items-center h-5">
                  <div className="h-2 w-2 bg-blue-500 rounded-full animate-pulse delay-75"></div> {/* Theming: bg-primary */}
                  <div className="h-2 w-2 bg-blue-500 rounded-full animate-pulse delay-150"></div>
                  <div className="h-2 w-2 bg-blue-500 rounded-full animate-pulse delay-300"></div>
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        {/* Chat Input */}
        <div className="p-3 border-t border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800"> {}
          <div className="flex items-end">
            <textarea
              value={inputValue}
              onChange={handleInputChange}
              onKeyDown={handleKeyPress}
              placeholder="Ask MediBot..."
              className="flex-grow rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 dark:text-slate-50 p-2.5 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 min-h-[44px] max-h-32 leading-snug" 
              rows={1}
              disabled={!API_KEY || isBotTyping}
            />
            <Button
              onClick={handleSendMessage}
              className="ml-2 shrink-0 h-11 w-11 rounded-lg p-0 bg-blue-500 hover:bg-blue-600 text-white disabled:opacity-50 disabled:cursor-not-allowed" 
              disabled={!inputValue.trim() || isBotTyping || !API_KEY}
              aria-label="Send message"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="rotate-90"><path d="m5 12 14-7-7 14v-7H5z" /></svg>
            </Button>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 text-center px-1"> {}
            MediBot is for informational purposes and not medical advice. Consult a healthcare professional.
          </p>
        </div>
      </div>
    </>
  );
};

export default ChatBot;
