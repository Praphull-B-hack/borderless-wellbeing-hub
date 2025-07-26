import React, { useState } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface AiHealthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const countries = [
  '🇺🇸 United States', '🇩🇪 Germany', '🇨🇦 Canada', '🇬🇧 United Kingdom',
  '🇫🇷 France', '🇯🇵 Japan', '🇸🇪 Sweden', '🇮🇳 India', '🇧🇷 Brazil',
  '🇦🇺 Australia', '🇨🇭 Switzerland', '🇳🇴 Norway', '🇳🇱 Netherlands',
  '🇪🇸 Spain', '🇮🇹 Italy', '🇰🇷 South Korea', '🇨🇳 China', '🇲🇽 Mexico',
  '🇿🇦 South Africa', '🇸🇬 Singapore', '🇩🇰 Denmark', '🇧🇪 Belgium',
  '🇦🇹 Austria', '🇮🇱 Israel', '🇸🇦 Saudi Arabia', '🇱🇹 Lithuania',
  '🇱🇻 Latvia', '🇪🇪 Estonia',
];

const GROQ_API_KEY = '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';
const GROQ_MODEL = 'llama-3.3-70b-versatile';

const AiHealthModal: React.FC<AiHealthModalProps> = ({ isOpen, onClose }) => {
  const [country1, setCountry1] = useState('');
  const [country2, setCountry2] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleCompare = async () => {
    if (!country1 || !country2 || country1 === country2) return;

    const prompt = `Compare the healthcare systems of ${country1} and ${country2} using the following structure:

1. Provide a **summary table** comparing key elements such as:
   - Healthcare model (public, private, mixed)
   - Primary funding source
   - Universal coverage (yes/no)
   - Average healthcare expenditure per capita
   - Wait times for services
   - Access to specialists
   - Patient satisfaction

2. Then list **key differences and similarities** in bullet points:
   - Highlight advantages and disadvantages of each system
   - Mention accessibility, quality, and affordability

Use **Markdown format** with a clear table and bullet points.`;

    setLoading(true);
    setResponse('');

    try {
      const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${GROQ_API_KEY}`,
        },
        body: JSON.stringify({
          model: GROQ_MODEL,
          messages: [
            { role: 'system', content: 'You are a helpful assistant.' },
            { role: 'user', content: prompt },
          ],
          temperature: 0.7,
        }),
      });

      const data = await res.json();
      const aiContent = data.choices?.[0]?.message?.content || 'No response from AI.';
      setResponse(aiContent);
    } catch (err) {
      console.error(err);
      setResponse('An error occurred while fetching the comparison.');
    } finally {
      setLoading(false);
    }
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3, ease: 'easeOut' },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.2, ease: 'easeIn' },
    },
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-10">
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          />

          {/* Modal */}
          <motion.div
            className="relative w-full max-w-4xl mx-4 rounded-3xl overflow-hidden bg-white border border-[#E5E7EB] shadow-sm transition-all duration-300"
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="relative flex flex-col p-8 space-y-6 text-[#1F2937] font-sans transition-all duration-300">

              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              >
                <X size={20} />
              </button>

              {/* Title */}
              <h2 className="text-2xl font-bold text-[#1E3A3A] tracking-tight">
                Compare Healthcare Systems
              </h2>

              {/* Dropdowns */}
              <div className="flex flex-col md:flex-row gap-4">
                <select
                  value={country1}
                  onChange={(e) => setCountry1(e.target.value)}
                  className="flex-1 border border-[#CBD5E1] rounded-xl px-4 py-2 text-sm bg-white shadow-sm focus:ring-2 focus:ring-[#3C8C84] focus:outline-none"
                >
                  <option value="">Select Country 1</option>
                  {countries.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>

                <select
                  value={country2}
                  onChange={(e) => setCountry2(e.target.value)}
                  className="flex-1 border border-[#CBD5E1] rounded-xl px-4 py-2 text-sm bg-white shadow-sm focus:ring-2 focus:ring-[#3C8C84] focus:outline-none"
                >
                  <option value="">Select Country 2</option>
                  {countries.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>

              {/* Button */}
              <motion.button
                whileTap={{ scale: 0.97 }}
                whileHover={{ scale: 1.02 }}
                onClick={handleCompare}
                disabled={!country1 || !country2 || country1 === country2 || loading}
                className={`w-full md:w-auto bg-[#3C8C84] text-white px-6 py-2 rounded-xl font-semibold text-sm transition-all duration-200 focus:ring-2 focus:ring-offset-2 focus:ring-[#3C8C84] ${!country1 || !country2 || country1 === country2 || loading
                    ? 'opacity-50 cursor-not-allowed'
                    : ''
                  }`}
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                      />
                    </svg>
                    Comparing...
                  </span>
                ) : (
                  'Compare'
                )}
              </motion.button>

              {/* Response */}
              <div
                className={`border border-[#E5E7EB] rounded-xl px-4 py-3 shadow-sm bg-white overflow-y-auto transition-all duration-300 ${response ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
              >
                {response && (
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    components={{
                      h1: ({ node, ...props }) => (
                        <h1 className="text-xl font-bold text-[#1E3A3A] mt-4 mb-2" {...props} />
                      ),
                      h2: ({ node, ...props }) => (
                        <h2 className="text-lg font-semibold text-[#1E3A3A] mt-4 mb-2" {...props} />
                      ),
                      p: ({ node, ...props }) => (
                        <p className="my-2 text-[#374151]" {...props} />
                      ),
                      ul: ({ node, ...props }) => (
                        <ul className="pl-5 list-disc my-2 text-[#374151]" {...props} />
                      ),
                      ol: ({ node, ...props }) => (
                        <ol className="pl-5 list-decimal my-2 text-[#374151]" {...props} />
                      ),
                      li: ({ node, ...props }) => <li className="mb-1">{props.children}</li>,
                      table: ({ children }) => (
                        <table className="w-full border-collapse my-4 text-sm">{children}</table>
                      ),
                      thead: ({ children }) => (
                        <thead className="bg-[#3C8C84]">{children}</thead>
                      ),
                      th: ({ children }) => (
                        <th className="border border-[#E5E7EB] px-3 py-2 text-left font-medium text-white !text-white bg-[#3C8C84]">
                          {children}
                        </th>
                      ),
                      td: ({ children }) => (
                        <td className="border border-[#E5E7EB] px-3 py-2 align-top">{children}</td>
                      ),
                      tr: ({ children }) => <tr className="bg-white">{children}</tr>,
                    }}
                  >
                    {response}
                  </ReactMarkdown>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default AiHealthModal;