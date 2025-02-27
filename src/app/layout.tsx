import type { Metadata } from 'next';
import './globals.css'; // Используем правильный путь к CSS
import Footer from './components/Footer';
import Header from './components/Header';

export const metadata: Metadata = {
  title: 'Команда Кривицкого - Таргетированная реклама ВКонтакте',
  description: 'Настраиваем эффективную рекламу во ВКонтакте. Гарантируем поток целевых клиентов от 290₽ за заявку',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}