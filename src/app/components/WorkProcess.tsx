import { ClockIcon, ChatBubbleBottomCenterTextIcon, DocumentChartBarIcon, RocketLaunchIcon } from '@heroicons/react/24/outline';

export default function WorkProcess() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
            Как мы работаем
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            От первого контакта до результата за 4 простых шага
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 via-primary/10 to-transparent"></div>

          {/* Timeline steps */}
          <div className="space-y-12 relative">
            {/* Step 1 */}
            <div className="md:flex items-center justify-between group">
              <div className="md:w-5/12 mb-8 md:mb-0 md:pr-12 md:text-right">
                <div className="p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-primary/10 group-hover:border-primary/20">
                  <div className="flex items-center gap-4 md:flex-row-reverse mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <ChatBubbleBottomCenterTextIcon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">Первичная консультация</h3>
                  </div>
                  <p className="text-gray-600">Обсуждаем ваши цели, анализируем нишу и конкурентов, определяем целевую аудиторию</p>
                </div>
              </div>
              <div className="hidden md:flex items-center justify-center relative z-10">
                <div className="w-12 h-12 rounded-full bg-primary text-white text-xl font-bold flex items-center justify-center shadow-lg shadow-primary/30">1</div>
              </div>
              <div className="md:w-5/12 md:pl-12"></div>
            </div>

            {/* Step 2 */}
            <div className="md:flex items-center justify-between group">
              <div className="md:w-5/12 mb-8 md:mb-0 md:pr-12"></div>
              <div className="hidden md:flex items-center justify-center relative z-10">
                <div className="w-12 h-12 rounded-full bg-primary text-white text-xl font-bold flex items-center justify-center shadow-lg shadow-primary/30">2</div>
              </div>
              <div className="md:w-5/12 md:pl-12">
                <div className="p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-primary/10 group-hover:border-primary/20">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <DocumentChartBarIcon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">Разработка стратегии</h3>
                  </div>
                  <p className="text-gray-600">Создаем медиаплан, прорабатываем рекламные креативы и настраиваем систему аналитики</p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="md:flex items-center justify-between group">
              <div className="md:w-5/12 mb-8 md:mb-0 md:pr-12 md:text-right">
                <div className="p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-primary/10 group-hover:border-primary/20">
                  <div className="flex items-center gap-4 md:flex-row-reverse mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <RocketLaunchIcon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">Запуск рекламы</h3>
                  </div>
                  <p className="text-gray-600">Запускаем рекламные кампании и начинаем получать первые заявки уже в первый день</p>
                </div>
              </div>
              <div className="hidden md:flex items-center justify-center relative z-10">
                <div className="w-12 h-12 rounded-full bg-primary text-white text-xl font-bold flex items-center justify-center shadow-lg shadow-primary/30">3</div>
              </div>
              <div className="md:w-5/12 md:pl-12"></div>
            </div>

            {/* Step 4 */}
            <div className="md:flex items-center justify-between group">
              <div className="md:w-5/12 mb-8 md:mb-0 md:pr-12"></div>
              <div className="hidden md:flex items-center justify-center relative z-10">
                <div className="w-12 h-12 rounded-full bg-primary text-white text-xl font-bold flex items-center justify-center shadow-lg shadow-primary/30">4</div>
              </div>
              <div className="md:w-5/12 md:pl-12">
                <div className="p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-primary/10 group-hover:border-primary/20">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <ClockIcon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">Оптимизация и масштабирование</h3>
                  </div>
                  <p className="text-gray-600">Анализируем результаты, оптимизируем кампании и масштабируем успешные связки</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <button className="btn-primary text-lg px-8 py-4 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300">
            Начать сотрудничество
          </button>
          <p className="mt-4 text-gray-600">Первые результаты уже через 24 часа</p>
        </div>
      </div>
    </section>
  );
}