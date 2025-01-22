'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const services = [
  'Вантажні роботи',
  'Різноробочі послуги',
  'Переїзди',
  'Демонтажні роботи'
];

const OrderForm = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-66% 0px -33% 0px" });
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    comment: ''
  });

  const containerVariants = {
    hidden: { 
      opacity: 0,
      y: 50,
      WebkitTransform: 'translate3d(0, 50px, 0)',
      transform: 'translate3d(0, 50px, 0)'
    },
    visible: {
      opacity: 1,
      y: 0,
      WebkitTransform: 'translate3d(0, 0, 0)',
      transform: 'translate3d(0, 0, 0)',
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0,
      y: 20,
      WebkitTransform: 'translate3d(0, 20px, 0)',
      transform: 'translate3d(0, 20px, 0)'
    },
    visible: {
      opacity: 1,
      y: 0,
      WebkitTransform: 'translate3d(0, 0, 0)',
      transform: 'translate3d(0, 0, 0)',
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Тут буде логіка відправки форми
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section 
      ref={ref}
      className="relative py-24 bg-gradient-to-br from-gray-50 to-gray-100"
    >
      <motion.div
        className="container mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Замовити послугу
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Заповніть форму, і ми зв'яжемося з вами найближчим часом для уточнення деталей
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.form 
            variants={itemVariants}
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-gray-700 font-medium">
                  Ваше ім'я
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  placeholder="Введіть ваше ім'я"
                />
              </div>

              <div className="md:row-span-3 space-y-2">
                <label htmlFor="comment" className="block text-gray-700 font-medium">
                  Коментар
                </label>
                <textarea
                  id="comment"
                  name="comment"
                  value={formData.comment}
                  onChange={handleChange}
                  className="w-full h-[calc(100%-2rem)] px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all resize-none"
                  placeholder="Додаткова інформація"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="block text-gray-700 font-medium">
                  Телефон
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  placeholder={process.env.NEXT_PUBLIC_PHONE_DISPLAY}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="service" className="block text-gray-700 font-medium">
                  Тип послуги
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                >
                  <option value="">Оберіть послугу</option>
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mt-8">
              <button
                type="submit"
                className="w-full bg-green-500 text-white py-4 px-8 rounded-lg font-semibold 
                         hover:bg-green-600 transform hover:-translate-y-0.5 transition-all duration-200
                         focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              >
                Замовити зараз
              </button>
            </div>
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
};

export default OrderForm;
