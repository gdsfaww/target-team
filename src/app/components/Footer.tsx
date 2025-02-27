'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaGithub, FaTwitter, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Здесь можно добавить логику отправки email на сервер
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold mb-4">О компании</h3>
            <p className="text-gray-300">
              Мы создаем инновационные решения, которые помогают бизнесу расти и развиваться в цифровую эпоху.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <FaGithub size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <FaTwitter size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <FaLinkedin size={24} />
              </a>
              <a href="mailto:info@example.com" className="text-gray-400 hover:text-white transition-colors">
                <FaEnvelope size={24} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-300 hover:text-white transition-colors">Главная</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors">О нас</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-white transition-colors">Услуги</Link></li>
              <li><Link href="/projects" className="text-gray-300 hover:text-white transition-colors">Проекты</Link></li>
              <li><Link href="/blog" className="text-gray-300 hover:text-white transition-colors">Блог</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Контакты</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Контакты</h3>
            <address className="not-italic text-gray-300">
              <p>ул. Технологическая, 42</p>
              <p>г. Москва, 123456</p>
              <p className="mt-2">Email: info@example.com</p>
              <p>Телефон: +7 (495) 123-4567</p>
            </address>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Подписка на новости</h3>
            <p className="text-gray-300 mb-4">Будьте в курсе наших последних новостей и обновлений</p>
            {subscribed ? (
              <div className="bg-green-600 text-white p-3 rounded">
                Спасибо за подписку!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col space-y-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Ваш email"
                  className="px-4 py-2 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <button 
                  type="submit" 
                  className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition-colors"
                >
                  Подписаться
                </button>
              </form>
            )}
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400">
          <p>&copy; {currentYear} Ваша Компания. Все права защищены.</p>
          <div className="mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-white transition-colors mr-4">Политика конфиденциальности</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Условия использования</Link>
          </div>
        </div>
        
        <div className="text-center mt-6 text-gray-500 text-sm">
          Разработано <a href="https://t.me/targetpage" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">@targetpage</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;