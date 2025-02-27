'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Statistics() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });

  const metrics = [
    {
      value: '2000+',
      label: 'Привлечённых клиентов',
      description: 'За последние 2 года'
    },
    {
      value: '150+',
      label: 'Успешных туров',
      description: 'Организовано и проведено'
    },
    {
      value: '95%',
      label: 'Положительных отзывов',
      description: 'От довольных клиентов'
    },
    {
      value: '40%',
      label: 'Рост продаж',
      description: 'В среднем у клиентов'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03] pointer-events-none"></div>
      <div className="container mx-auto" ref={containerRef}>
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-blue-500 to-blue-600">
            Масштабируем туристический бизнес
          </h2>
          <p className="text-xl text-gray-600">
            За последние 2 года мы помогли десяткам организаторов авторских туров по России
            привлечь тысячи клиентов благодаря системному подходу и масштабируемым решениям
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              className="p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-primary/10 hover:border-primary/20 group"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div
                className="text-4xl sm:text-5xl font-bold text-primary mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              >
                {metric.value}
              </motion.div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors duration-300">
                {metric.label}
              </h3>
              <p className="text-gray-600">{metric.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}