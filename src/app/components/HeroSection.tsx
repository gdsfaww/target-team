'use client';

import { motion } from 'framer-motion';
import { ArrowRightIcon, ChartBarIcon, DocumentTextIcon, PlayCircleIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

export default function HeroSection() {
  const benefits = [
    'Получайте 50+ бронирований в месяц на ваши туры – больше клиентов, выше загрузка, стабильный доход.',
    'Прозрачность на 100% – даём отчёты по заявкам и рекламе, доступ к статистике 24/7.',
    'Работаем ТОЛЬКО с авторскими турами – знаем рынок, конкурентов и реальные точки роста.',
    'Не тестируем за ваш счёт и не "ищем связку" – используем только то, что уже приносит прибыль в турбизнесе.'
  ];

  const notifications = [
    { message: '+1 клиент', emoji: '👤' },
    { message: 'Оплата прошла', emoji: '💳' },
    { message: 'Поступила заявка', emoji: '📝' },
    { message: 'Новое бронирование', emoji: '✅' },
    { message: 'Успешная сделка', emoji: '🤝' },
    { message: 'Запрос на тур', emoji: '🌍' },
    { message: 'Новый отзыв', emoji: '⭐' }
  ];

  return (
    <section className="min-h-[90vh] md:min-h-screen flex items-center px-3 sm:px-4 lg:px-8 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-50 relative pt-10 md:pt-28 lg:pt-0">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03] pointer-events-none"></div>
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center relative">
          <motion.div 
            className="relative transform transition-all duration-700 hover:scale-102 hover:rotate-1 mt-10 sm:mt-6 lg:mt-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.h1 
              className="text-3xl xs:text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 lg:mb-8 leading-[1.2] sm:leading-[1.1] tracking-tight text-gray-900 px-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <span>Бронируем вам минимум 15 клиентов в первый месяц <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-500 to-blue-600">или ведём рекламу за свой счёт!</span></span>
            </motion.h1>

            <motion.div 
              className="text-base xs:text-lg sm:text-xl lg:text-2xl text-gray-700 mb-6 sm:mb-8 lg:mb-10 leading-relaxed font-medium p-4 sm:p-6 lg:p-8 border border-primary/20 rounded-xl sm:rounded-2xl bg-white/60 backdrop-blur-sm shadow-lg shadow-primary/5 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 transform hover:scale-[1.02]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Сколько бронирований вам нужно, чтобы ваш тур был прибыльным? 10? 30? Мы привлекаем клиентов так, что вам не придётся снижать цены. Рассказываем, как это работает.
            </motion.div>
            
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3 p-3 sm:p-4 bg-white/80 backdrop-blur-sm rounded-lg sm:rounded-xl border border-primary/10 hover:border-primary/20 hover:shadow-lg transition-all duration-300 group"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                >
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-success/20 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-success/30 transition-colors duration-300">
                    <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-sm sm:text-base lg:text-lg leading-snug text-gray-700 group-hover:text-gray-900 transition-colors duration-300">{benefit}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div 
              className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 lg:gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <motion.button 
                className="w-full sm:w-auto btn-primary shadow-lg shadow-primary/20 hover:shadow-2xl hover:shadow-primary/40 transition-all duration-300 text-base sm:text-lg flex items-center justify-center gap-2 py-3 sm:py-4 px-6 sm:px-8 relative overflow-hidden group bg-gradient-to-r from-primary to-blue-600 hover:from-blue-600 hover:to-primary rounded-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-700"></span>
                <span className="relative flex items-center gap-2 transform group-hover:translate-x-1 transition-transform duration-300">
                  <ChartBarIcon className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:scale-110 transition-transform duration-300" />
                  Разберём ваш маркетинг
                </span>
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div 
            className="relative transform transition-all duration-700 hover:scale-102 hover:rotate-1 mt-6 lg:mt-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative w-full h-full max-w-[300px] xs:max-w-[350px] sm:max-w-[450px] lg:max-w-[600px] mx-auto">
              <Image
                src="/phone.png"
                alt="Phone with statistics"
                width={600}
                height={900}
                className="w-full h-auto object-contain transition-all duration-300"
                priority
              />

              {notifications.map((notification, index) => (
                <motion.div
                  key={index}
                  className="absolute bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1.5 sm:px-4 sm:py-2 shadow-lg border border-gray-200/50 flex items-center gap-2 text-sm sm:text-base"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: [0, 1, 1, 0],
                    y: [20, 0, 0, -20],
                    x: index % 2 === 0 ? [-20, 0, 0, 20] : [20, 0, 0, -20]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatDelay: index * 1,
                    ease: "easeInOut"
                  }}
                  style={{
                    top: `${15 + (index * 12)}%`,
                    [index % 2 === 0 ? 'left' : 'right']: '0'
                  }}
                >
                  <span className="text-xl sm:text-2xl">{notification.emoji}</span>
                  <span className="font-medium text-gray-800">{notification.message}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}