'use client';

import { Disclosure, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

export default function FAQ() {
  const faqs = [
    {
      question: 'Сколько времени нужно для запуска рекламы?',
      answer: 'Мы запускаем рекламные кампании в течение 24 часов после подписания договора. Первые заявки вы начнете получать уже на следующий день.'
    },
    {
      question: 'Какие гарантии вы предоставляете?',
      answer: 'Мы гарантируем минимум 10 целевых заявок в месяц и конверсию не менее 12%. Если мы не достигаем этих показателей, возвращаем полную стоимость услуг согласно договору.'
    },
    {
      question: 'Нужно ли мне разбираться в рекламе?',
      answer: 'Нет, мы берем на себя все технические вопросы. Вы получаете готовый поток клиентов и простую понятную отчетность о результатах.'
    },
    {
      question: 'Сколько в среднем стоит привлечение одного клиента?',
      answer: 'Стоимость привлечения клиента зависит от вашей ниши, но в среднем она в 2-3 раза ниже, чем у конкурентов. Например, для автосервиса средняя стоимость заявки составляет 21₽.'
    },
    {
      question: 'Как происходит оплата услуг?',
      answer: 'Работаем по прозрачной системе: фиксированная стоимость 45.000₽ в месяц, включая настройку рекламы. Никаких скрытых платежей или дополнительных расходов.'
    },
    {
      question: 'Что если реклама не принесет результата?',
      answer: 'В случае недостижения гарантированных показателей в первый месяц работы, мы возвращаем 100% стоимости услуг в течение 3 рабочих дней, согласно пункту 3.4 договора.'
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03] pointer-events-none"></div>
      
      {/* Декоративные элементы */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-blue-400/10 to-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-primary/10 to-blue-300/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4"></div>
      
      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
            Частые вопросы
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            Ответы на популярные вопросы о нашей работе
          </p>
        </motion.div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Disclosure>
                {({ open }) => (
                  <div className={`bg-white rounded-2xl border border-gray-100 transition-all duration-300 ${open ? 'shadow-lg border-primary/20' : 'hover:border-gray-200 hover:shadow-md'}`}>
                    <Disclosure.Button className="w-full px-8 py-6 text-left flex justify-between items-center">
                      <span className="text-lg md:text-xl font-semibold text-gray-900">{faq.question}</span>
                      <div className={`flex items-center justify-center w-9 h-9 rounded-full bg-primary/5 transition-all duration-300 ${open ? 'bg-primary/10' : ''}`}>
                        <ChevronDownIcon
                          className={`w-5 h-5 text-primary transition-transform duration-300 ${open ? 'transform rotate-180' : ''}`}
                        />
                      </div>
                    </Disclosure.Button>

                    <Transition
                      enter="transition duration-150 ease-out"
                      enterFrom="transform scale-98 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-100 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-98 opacity-0"
                    >
                      <Disclosure.Panel className="px-8 pb-7 pt-2 text-gray-600 text-lg md:text-xl">
                        {faq.answer}
                      </Disclosure.Panel>
                    </Transition>
                  </div>
                )}
              </Disclosure>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-xl md:text-2xl text-gray-600 mb-10">
            Остались вопросы? Мы с радостью на них ответим!
          </p>
          <motion.button 
            className="btn-primary text-lg md:text-xl px-10 py-5 rounded-xl shadow-lg shadow-primary/20 bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-700"
            whileHover={{ scale: 1.03, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.3)" }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            Задать вопрос
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}