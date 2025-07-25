
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

 const faqs = [
  {
    question: "How do I connect with doctors or specialists from other countries?",
    answer: "You can browse our provider network by specialty, language, or location. Once you find a professional that matches your needs, you can request a virtual consultation directly through the platform."
  },
  {
    question: "What languages are supported for medical consultations?",
    answer: "We support 13 major European languages including English, Latvian, Lithuanian, and Estonian, German, French, Spanish, Polish, Swedish, Norwegian, Danish, Finnish, and Czech. Interpreter support is available for video calls when needed."
  },
  {
    question: "Is the platform free to use?",
    answer: "Basic services like health tracking, community support groups, and educational content are free. Fees may apply for professional consultations, diagnostic services, or premium wellness programs."
  },
  {
    question: "Can I join international health support groups?",
    answer: "Yes! We offer condition-based and interest-based groups where users can connect across borders to share experiences, get peer support, and access curated wellness content."
  },
  {
    question: "Are medical services recognized across countries?",
    answer: "We work with licensed professionals who meet EU standards. While prescriptions and referrals are valid within supported regions, please check with your local provider for country-specific regulations."
  },
  {
    question: "How do I access my medical records or share them with doctors?",
    answer: "Your digital health record is stored securely on the platform. You can upload reports, track symptoms, and grant permission to care providers across borders for seamless coordination."
  },
  {
    question: "What kind of health and wellness resources are available?",
    answer: "We offer mental health tools, chronic illness management guides, telehealth programs, nutrition plans, rehabilitation support, and evidence-based wellness articles reviewed by healthcare professionals."
  },
  {
    question: "How secure is my medical and personal information?",
    answer: "Your data is fully encrypted and protected under GDPR standards. You control who sees your health information, and we never share your data with third parties without your explicit consent."
  }
];


  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="flex justify-center mb-4"
            whileHover={{ scale: 1.1, rotate: 360 }}
            transition={{ duration: 0.6 }}
          >
            <HelpCircle className="h-12 w-12 text-wellness-blue-600" />
          </motion.div>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-wellness-blue-600 to-wellness-purple-600 bg-clip-text text-transparent font-poppins mb-4">
            Frequently Asked Questions
          </h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-wellness-blue-500 to-wellness-purple-500 mx-auto mb-6 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          />
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Find answers to common questions about our healthcare platform
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden"
            >
              <motion.button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <span className="font-semibold text-gray-900 dark:text-white pr-4">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="h-5 w-5 text-wellness-blue-600" />
                </motion.div>
              </motion.button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div 
          className="mt-12 text-center bg-gradient-to-r from-wellness-blue-600 to-wellness-purple-600 rounded-2xl p-8 text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
          <p className="mb-6 text-white/90">
            Our support team is here to help you get started on your health and wellness journey.
          </p>
          <motion.button 
            className="bg-white text-wellness-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Support
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
