import { BanknotesIcon, ClockIcon, ChartBarIcon } from '@heroicons/react/24/outline';

export default function FinancialOffer() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
            Сравните расходы на маркетинг
          </h2>
          <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto">
            Экономьте до 70% на привлечении клиентов с нашим комплексным решением
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Traditional Approach */}
          <div className="p-8 rounded-2xl bg-white border border-gray-200 shadow-lg">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center">
                <BanknotesIcon className="w-6 h-6 text-gray-600" />
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-800">Традиционный подход</h3>
            </div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3 text-lg text-gray-600">
                <span className="text-red-500">✕</span>
                Зарплата маркетолога: от 80.000₽/мес
              </li>
              <li className="flex items-center gap-3 text-lg text-gray-600">
                <span className="text-red-500">✕</span>
                Налоги и отчисления: ~24.000₽/мес
              </li>
              <li className="flex items-center gap-3 text-lg text-gray-600">
                <span className="text-red-500">✕</span>
                Оплата больничных и отпусков
              </li>
              <li className="flex items-center gap-3 text-lg text-gray-600">
                <span className="text-red-500">✕</span>
                Обучение и повышение квалификации
              </li>
              <li className="flex items-center gap-3 text-lg text-gray-600">
                <span className="text-red-500">✕</span>
                Риск ухода специалиста
              </li>
            </ul>

            <div className="text-2xl font-bold text-gray-900 mb-4">
              от 104.000₽ / месяц
            </div>
            <p className="text-gray-500 text-sm">*без учета рекламного бюджета</p>
          </div>

          {/* Our Solution */}
          <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/10 shadow-lg">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <ChartBarIcon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-800">Наше решение</h3>
            </div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3 text-lg text-gray-600">
                <span className="text-success">✓</span>
                Фиксированная стоимость: 45.000₽/мес
              </li>
              <li className="flex items-center gap-3 text-lg text-gray-600">
                <span className="text-success">✓</span>
                Никаких дополнительных расходов
              </li>
              <li className="flex items-center gap-3 text-lg text-gray-600">
                <span className="text-success">✓</span>
                Команда опытных специалистов
              </li>
              <li className="flex items-center gap-3 text-lg text-gray-600">
                <span className="text-success">✓</span>
                Гарантия результата или возврат денег
              </li>
              <li className="flex items-center gap-3 text-lg text-gray-600">
                <span className="text-success">✓</span>
                Работаем без выходных 24/7
              </li>
            </ul>

            <div className="text-2xl font-bold text-primary mb-4">
              45.000₽ / месяц
            </div>
            <p className="text-gray-500 text-sm">*включая настройку рекламы</p>
          </div>
        </div>

        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 mb-6 px-6 py-3 rounded-full bg-success/10 text-success font-medium">
            <ClockIcon className="w-5 h-5" />
            <span>Экономия времени и денег</span>
          </div>
          
          <p className="text-lg text-gray-600 mb-8">
            И самое главное – мы не берем больничных и отпусков! 😉
          </p>

          <button className="btn-primary text-lg px-8 py-4">
            Получить коммерческое предложение
          </button>
        </div>
      </div>
    </section>
  );
}