import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

interface ChatbotButtonProps {
  onClick?: () => void;
}

const ChatbotButton = ({ onClick }: ChatbotButtonProps) => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={onClick}
        className="relative p-4 rounded-full bg-accent text-accent-foreground shadow-elevated hover:bg-accent/90 transition-all focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 flex items-center justify-center"
        aria-label="Open chatbot"
      >
        <MessageCircle size={28} />
        
        {/* Pulsing notification dot */}
        <span className="absolute top-0 right-0 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-primary"></span>
        </span>
      </motion.button>
      
      {/* Help tooltip on hover */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileHover={{ opacity: 1, x: 0 }}
        className="absolute bottom-full right-0 mb-4 bg-white px-4 py-2 rounded-xl shadow-lg border border-border pointer-events-none whitespace-nowrap hidden lg:block"
      >
        <p className="text-sm font-medium text-foreground">How can we help you today?</p>
      </motion.div>
    </div>
  );
};

export default ChatbotButton;
