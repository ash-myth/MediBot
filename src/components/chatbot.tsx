
'use client';
import { useState, useRef, useEffect } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from './ui/card';
import { Input } from './ui/input';
import { X, Send, Bot, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { runChatbot } from '@/app/actions';
import { ScrollArea } from './ui/scroll-area';
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import Link from 'next/link';
import Image from 'next/image';

type Message = {
  role: 'user' | 'model';
  content: string;
};

// New component to parse and render markdown
const MarkdownMessage = ({ content }: { content: string }) => {
  const lines = content.split('* ').filter(line => line.trim() !== '');

  const preamble = lines[0].includes(':') ? lines.shift() : null;

  const sections: Record<string, string[]> = {};
  let currentSection = '';

  lines.forEach(line => {
    const trimmedLine = line.trim();
    if (trimmedLine.endsWith(':')) {
      currentSection = trimmedLine.slice(0, -1);
      if (!sections[currentSection]) {
        sections[currentSection] = [];
      }
    } else if (currentSection) {
      sections[currentSection].push(trimmedLine);
    }
  });


  if (Object.keys(sections).length === 0) {
      // Fallback for simple lists
      const listItems = content.split('*').map(s => s.trim()).filter(Boolean);
      if (listItems.length > 1) {
        return (
            <div>
                <ul className="list-disc list-inside space-y-1">
                    {listItems.map((item, index) => (
                        <li key={index} dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }}></li>
                    ))}
                </ul>
            </div>
        );
      }
      return <p className="text-sm break-words">{content}</p>;
  }


  return (
    <div className="space-y-2 text-sm">
      {preamble && <p className="mb-2">{preamble}</p>}
      {Object.entries(sections).map(([sectionTitle, items]) => (
        <div key={sectionTitle}>
          <p className="font-semibold">{sectionTitle}</p>
          <ul className="list-disc list-inside pl-4 text-muted-foreground">
            {items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};


export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  const toggleChat = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTo({
        top: scrollAreaRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    const chatHistory = messages.map(msg => ({
      role: msg.role,
      parts: [{ text: msg.content }]
    }));

    const response = await runChatbot({
      history: chatHistory,
      message: input,
    });
    setIsLoading(false);

    if (response.message) {
      const botMessage: Message = { role: 'model', content: response.message };
      setMessages((prev) => [...prev, botMessage]);
    } else if (response.error) {
      const errorMessage: Message = {
        role: 'model',
        content: "Sorry, I'm having trouble connecting. Please try again later.",
      };
      setMessages((prev) => [...prev, errorMessage]);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  const renderMessageContent = (content: string) => {
    const contactLinkMarker = '[CONTACT_PAGE_LINK]';
    if (content.includes(contactLinkMarker)) {
      const textParts = content.split(contactLinkMarker);
      return (
        <>
          {textParts.map((part, index) => (
            <span key={index}>
              {part}
              {index < textParts.length - 1 && (
                <Button asChild size="sm" className="mt-2">
                  <Link href="/contact">Go to Contact Page</Link>
                </Button>
              )}
            </span>
          ))}
        </>
      );
    }
    
    // Check for markdown-like list
    if (content.includes('* ')) {
      return <MarkdownMessage content={content} />;
    }

    return <p className="text-sm break-words">{content}</p>;
  }

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed bottom-24 right-4 z-50 w-full max-w-sm"
          >
            <Card className="flex flex-col h-[60vh] bg-background/80 backdrop-blur-sm">
              <CardHeader className="flex flex-row items-center justify-between">
                <div className="flex items-center gap-2">
                  <Bot className="h-6 w-6 text-primary" />
                  <CardTitle className="text-lg">MediBot Assistant</CardTitle>
                </div>
                <Button variant="ghost" size="icon" onClick={toggleChat}>
                  <X className="h-4 w-4" />
                </Button>
              </CardHeader>
              <CardContent className="flex-1 overflow-hidden p-0">
                <ScrollArea className="h-full p-4" ref={scrollAreaRef}>
                  <div className="space-y-4">
                  <div className="flex items-start gap-3">
                      <Avatar>
                        <AvatarFallback>AI</AvatarFallback>
                      </Avatar>
                      <div className="bg-muted p-3 rounded-lg max-w-xs break-words">
                        <p className="text-sm">Hello! How can I help you today?</p>
                      </div>
                    </div>
                    {messages.map((msg, index) => (
                      <div
                        key={index}
                        className={`flex items-start gap-3 ${
                          msg.role === 'user' ? 'justify-end' : ''
                        }`}
                      >
                        {msg.role === 'model' && (
                          <Avatar>
                            <AvatarFallback>AI</AvatarFallback>
                          </Avatar>
                        )}
                        <div
                          className={`p-3 rounded-lg max-w-xs flex flex-col break-words ${
                            msg.role === 'user'
                              ? 'bg-primary text-primary-foreground'
                              : 'bg-muted'
                          }`}
                        >
                          {renderMessageContent(msg.content)}
                        </div>
                        {msg.role === 'user' && (
                          <Avatar>
                            <AvatarFallback>U</AvatarFallback>
                          </Avatar>
                        )}
                      </div>
                    ))}
                    {isLoading && (
                      <div className="flex items-start gap-3">
                        <Avatar>
                          <AvatarFallback>AI</AvatarFallback>
                        </Avatar>
                        <div className="bg-muted p-3 rounded-lg max-w-xs">
                          <Loader2 className="h-5 w-5 animate-spin" />
                        </div>
                      </div>
                    )}
                  </div>
                </ScrollArea>
              </CardContent>
              <CardFooter>
                <div className="relative w-full">
                  <Input
                    placeholder="Type a message..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={handleKeyPress}
                    disabled={isLoading}
                  />
                  <Button
                    size="icon"
                    className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8"
                    onClick={handleSend}
                    disabled={isLoading || !input.trim()}
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-4 right-4 z-50"
      >
        <Button size="lg" variant="ghost" className="rounded-full h-16 w-16 p-0" onClick={toggleChat}>
          {isOpen ? <X className="h-8 w-8" /> : (
            <Image 
              src="/bot.png"
              alt="Chatbot Icon"
              width={64}
              height={64}
            />
          )}
        </Button>
      </motion.div>
    </>
  );
}
