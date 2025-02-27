'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { CheckIcon, RocketLaunchIcon, PresentationChartLineIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

export default function CaseStudy() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });
  const [activeTab, setActiveTab] = useState(0);

  const cases = [
    {
      id: 1,
      title: '80+ броней за 2 месяца с минимальной стоимостью сделки',
      metrics: [
        {
          value: '83+',
          label: 'подтверждённые брони',
          icon: CheckIcon
        },
        {
          value: '184₽',
          label: 'стоимость заявки',
          icon: PresentationChartLineIcon
        },
        {
          value: '969₽',
          label: 'стоимость брони',
          icon: RocketLaunchIcon
        }
      ],
      steps: [
        'Быстрый запуск рекламы с учётом предыдущего опыта',
        'Оптимизация визуального контента и креативов',
        'Добавление рассылок, увеличивших число броней на +28'
      ],
      result: 'Благодаря системному подходу и опыту в нише, мы обеспечили стабильный поток качественных заявок без демпинга цен. Туры заполнялись равномерно, что позволило сохранить высокую маржинальность и избежать скидочных акций.'
    },
    {
      id: 2,
      title: '3 363 заявки по 373 рубля на туры по России',
      metrics: [
        {
          value: '3 363',
          label: 'заявки',
          icon: CheckIcon
        },
        {
          value: '373₽',
          label: 'стоимость заявки',
          icon: PresentationChartLineIcon
        },
        {
          value: '102 247',
          label: 'переходов по рекламе',
          icon: RocketLaunchIcon
        }
      ],
      steps: [
        'Запустили рекламу для нескольких направлений (Кольский, Байкал, Приэльбрусье и др.)',
        'Протестировали разные аудитории (туризм, активный отдых, прямые запросы)',
        'Масштабировали успешные сегменты для увеличения количества заявок'
      ],
      result: 'Благодаря постоянному анализу и тестам удалось удерживать стабильный поток заявок и оптимизировать стоимость привлечения.'
    },
    {
      id: 3,
      title: '3 136 заявок по 59 рублей на туры в Дагестан',
      metrics: [
        {
          value: '3 136',
          label: 'заявки',
          icon: CheckIcon
        },
        {
          value: '59₽',
          label: 'стоимость заявки',
          icon: PresentationChartLineIcon
        },
        {
          value: '38 024',
          label: 'переходов по рекламе',
          icon: RocketLaunchIcon
        }
      ],
      steps: [
        'Протестировали лид-формы и трафик на сообщения, выбрали более конверсионный вариант',
        'Оптимизировали объявления, чтобы увеличить CTR и снизить стоимость клика',
        'Внедрили чат-бота, который помог автоматизировать обработку заявок'
      ],
      result: 'За счёт точной работы с аудиторией и автоматизации удалось снизить стоимость заявки и увеличить поток клиентов.'
    }
  ];

  return (
    <section className="py-12 sm:py-20 px-3 sm:px-4 lg:px-8 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03] pointer-events-none"></div>
      <div className="container" ref={containerRef}>
        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-12">
          {cases.map((caseStudy, index) => (
            <motion.button
              key={caseStudy.id}
              onClick={() => setActiveTab(index)}
              className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl text-sm md:text-base font-medium transition-all duration-300 w-full sm:w-auto ${
                activeTab === index
                  ? 'bg-primary text-white shadow-lg shadow-primary/30'
                  : 'bg-white text-gray-600 hover:bg-primary/10 hover:text-primary border border-primary/10'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex flex-col items-center gap-0.5 sm:gap-1">
                <span className="font-bold text-sm sm:text-base">
                  {index === 0 ? '80+ Туров забронировано' : 
                   index === 1 ? '3.3K+ Заявок получено' : 
                   'Рекордно низкая цена'}
                </span>
                <span className="text-[10px] sm:text-xs opacity-80">
                  {index === 0 ? 'Максимальная эффективность' : 
                   index === 1 ? 'Масштабный охват' : 
                   'Оптимизация затрат'}
                </span>
              </div>
            </motion.button>
          ))}
        </div>

        <div className="space-y-8 sm:space-y-12">
          {[cases[activeTab]].map((caseStudy, caseIndex) => (
            <motion.div
              key={caseStudy.id}
              className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-primary/10 overflow-hidden hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: caseIndex * 0.2 }}
            >
              <div className="p-4 sm:p-8 md:p-12">
                {/* Header */}
                <div className="mb-8 sm:mb-12">
                  <motion.div
                    className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/10 text-primary font-medium mb-4 sm:mb-6"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.4, delay: 0.2 + caseIndex * 0.1 }}
                  >
                    <span className="text-xs sm:text-sm">Кейс №{caseStudy.id}</span>
                  </motion.div>
                  <motion.h2
                    className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + caseIndex * 0.1 }}
                  >
                    {caseStudy.title}
                  </motion.h2>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
                  {caseStudy.metrics.map((metric, index) => (
                    <motion.div
                      key={index}
                      className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-br from-blue-50 via-white to-blue-50 border border-primary/10 group hover:border-primary/20 transition-all duration-300"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 + caseIndex * 0.1 }}
                    >
                      <div className="flex items-center gap-3 sm:gap-4">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <metric.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                        </div>
                        <div>
                          <div className="text-2xl sm:text-3xl font-bold text-gray-900">{metric.value}</div>
                          <div className="text-sm sm:text-base text-gray-600">{metric.label}</div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Process */}
                <motion.div
                  className="mb-8 sm:mb-12"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 + caseIndex * 0.1 }}
                >
                  <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Что сделали:</h3>
                  <div className="space-y-3 sm:space-y-4">
                    {caseStudy.steps.map((step, index) => (
                      <motion.div
                        key={index}
                        className="flex items-start gap-3 sm:gap-4"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ duration: 0.4, delay: 0.8 + index * 0.1 + caseIndex * 0.1 }}
                      >
                        <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-success/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckIcon className="w-3 h-3 sm:w-4 sm:h-4 text-success" />
                        </div>
                        <p className="text-base sm:text-lg text-gray-700">{step}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Result */}
                <motion.div
                  className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-br from-primary/5 to-blue-50 border border-primary/10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 1.1 + caseIndex * 0.1 }}
                >
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Результат:</h3>
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                    {caseStudy.result}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}