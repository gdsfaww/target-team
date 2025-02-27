export default function OwnerNeeds() {
  return (
    <section className="min-h-screen flex items-center py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
            Главные критерии выбора маркетолога
          </h2>
          <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto px-4">
            Мы знаем, что важно для собственников бизнеса, и готовы предложить решение, которое превзойдет ваши ожидания
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16 lg:mb-20 px-4">
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/10 hover:shadow-xl hover:scale-105 transition-all duration-300 group">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg className="w-8 h-8 sm:w-10 sm:h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-gray-900">Проверенный опыт</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Более 3 лет успешной работы с различными нишами бизнеса и сотни довольных клиентов подтверждают нашу экспертизу
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-success/5 to-success/10 border border-success/10 hover:shadow-xl hover:scale-105 transition-all duration-300 group">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-success/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg className="w-8 h-8 sm:w-10 sm:h-10 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-gray-900">Реальные кейсы</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Документируем все этапы работы и открыто делимся результатами. Вы всегда можете оценить эффективность наших стратегий
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/10 hover:shadow-xl hover:scale-105 transition-all duration-300 group">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg className="w-8 h-8 sm:w-10 sm:h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-gray-900">Индивидуальный подход</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Разрабатываем уникальную стратегию под ваш бизнес, учитывая специфику ниши, конкурентов и целевую аудиторию
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-50 via-white to-blue-50 rounded-3xl p-6 sm:p-8 lg:p-12 shadow-xl border border-blue-100/50">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 lg:mb-12 text-gray-900">Как мы усиливаем ваш отдел продаж</h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <div>
                <h4 className="text-lg sm:text-xl font-semibold mb-2">Увеличиваем поток заявок</h4>
                <p className="text-base sm:text-lg text-gray-600">Обеспечиваем стабильный приток горячих лидов для вашего бизнеса</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-success/10 flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <h4 className="text-lg sm:text-xl font-semibold mb-2">Снижаем стоимость лида</h4>
                <p className="text-base sm:text-lg text-gray-600">Оптимизируем рекламные кампании для максимальной эффективности</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 className="text-lg sm:text-xl font-semibold mb-2">Повышаем качество лидов</h4>
                <p className="text-base sm:text-lg text-gray-600">Настраиваем точный таргетинг на вашу целевую аудиторию</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}