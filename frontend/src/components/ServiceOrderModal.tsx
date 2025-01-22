'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';

interface ServiceOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

interface FormData {
  name: string;
  phone: string;
  service: string;
  question: string;
}

const services = [
  'Вантажні роботи',
  'Різноробочі послуги',
  'Переїзди',
  'Демонтажні роботи',
  'Вивіз сміття'
];

const ServiceOrderModal = ({ isOpen, onClose, initialService }: ServiceOrderModalProps) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    service: initialService || services[0],
    question: ''
  });

  // Оновлюємо вибрану послугу коли змінюється initialService
  useEffect(() => {
    if (initialService) {
      setFormData(prev => ({
        ...prev,
        service: initialService,
        name: '',
        phone: '',
        question: ''
      }));
    }
  }, [initialService]);

  const handleClose = () => {
    setFormData(prev => ({
      ...prev,
      name: '',
      phone: '',
      question: '',
      service: initialService || services[0]
    }));
    onClose();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // TODO: Додати відправку даних на бекенд
      console.log('Form submitted:', formData);
      handleClose();
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          onClick={handleClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="bg-white rounded-lg shadow-xl max-w-md w-full p-6"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">
                Замовити послугу
              </h2>
              <button
                onClick={handleClose}
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <FaTimes size={24} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  Ваше ім'я
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  placeholder="Введіть ваше ім'я"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                  Телефон
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  placeholder="+38 (___) ___-__-__"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-gray-700 font-medium mb-2">
                  Оберіть послугу
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all appearance-none bg-white"
                >
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="question" className="block text-gray-700 font-medium mb-2">
                  Ваше питання
                </label>
                <textarea
                  id="question"
                  name="question"
                  value={formData.question}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all resize-none h-32"
                  placeholder="Опишіть ваше питання"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-green-500 text-white px-6 py-3 rounded-lg font-semibold 
                         hover:bg-green-600 transition-all duration-200 shadow-sm 
                         hover:shadow-md transform hover:-translate-y-0.5"
              >
                Надіслати
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ServiceOrderModal;
