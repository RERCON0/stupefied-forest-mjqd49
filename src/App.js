import React, { useState, useEffect } from "react";

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [count, setCount] = useState(0);

  // Демонстрация эффектов React
  useEffect(() => {
    setIsVisible(true);

    // Автоматическое переключение отзывов
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Данные для лендинга
  const features = [
    {
      id: 1,
      title: "Компонентный подход",
      description:
        "React позволяет разбить интерфейс на независимые компоненты, которые можно переиспользовать",
      icon: "📦",
    },
    {
      id: 2,
      title: "Виртуальный DOM",
      description:
        "Оптимизирует обновления интерфейса, делая приложения быстрее",
      icon: "⚡",
    },
    {
      id: 3,
      title: "Однонаправленный поток данных",
      description: "Предсказуемое поведение и легкий дебаггинг приложения",
      icon: "🔄",
    },
    {
      id: 4,
      title: "JSX синтаксис",
      description:
        "Интуитивно понятное написание компонентов, сочетающее HTML и JavaScript",
      icon: "🔍",
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: "Алексей Иванов",
      company: "ТехноСтарт",
      text: "Благодаря React мы сократили время разработки на 40% и улучшили производительность нашего сайта.",
    },
    {
      id: 2,
      name: "Мария Петрова",
      company: "ДизайнПро",
      text: "React дал нам возможность создавать интерактивные интерфейсы, которые нравятся нашим клиентам.",
    },
    {
      id: 3,
      name: "Дмитрий Сидоров",
      company: "WebМастер",
      text: "Компонентный подход React позволил нам эффективно управлять большим проектом и легко масштабировать его.",
    },
  ];

  // Обработчики событий
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div
      className={`min-h-screen font-sans text-gray-800 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{ transition: "opacity 1s ease-in-out" }}
    >
      {/* Навигационная панель */}
      <nav className="bg-white shadow-md">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <span className="text-blue-600 text-2xl font-bold">
                ReactLanding
              </span>
            </div>

            {/* Мобильное меню */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-500 hover:text-blue-600 focus:outline-none"
              >
                {isMenuOpen ? "✕" : "☰"}
              </button>
            </div>

            {/* Десктопное меню */}
            <div className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-500 hover:text-blue-600">
                Возможности
              </a>
              <a
                href="#testimonials"
                className="text-gray-500 hover:text-blue-600"
              >
                Отзывы
              </a>
              <a href="#pricing" className="text-gray-500 hover:text-blue-600">
                Цены
              </a>
              <a href="#contact" className="text-gray-500 hover:text-blue-600">
                Контакты
              </a>
            </div>

            <div className="hidden md:block">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition duration-300">
                Начать бесплатно
              </button>
            </div>
          </div>

          {/* Мобильное меню (открывается/закрывается) */}
          {isMenuOpen && (
            <div className="md:hidden py-3">
              <a
                href="#features"
                className="block py-2 text-gray-500 hover:text-blue-600"
              >
                Возможности
              </a>
              <a
                href="#testimonials"
                className="block py-2 text-gray-500 hover:text-blue-600"
              >
                Отзывы
              </a>
              <a
                href="#pricing"
                className="block py-2 text-gray-500 hover:text-blue-600"
              >
                Цены
              </a>
              <a
                href="#contact"
                className="block py-2 text-gray-500 hover:text-blue-600"
              >
                Контакты
              </a>
              <button className="mt-3 w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition duration-300">
                Начать бесплатно
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Главный баннер */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <div className="max-w-6xl mx-auto px-4 py-24 md:py-32">
          <div className="md:w-2/3">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Создавайте современные веб-приложения с React
            </h1>
            <p className="text-xl mb-8">
              React делает разработку интерактивных интерфейсов простой и
              эффективной. Начните с нами сегодня!
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-white text-blue-600 hover:bg-gray-100 font-medium py-3 px-6 rounded-lg transition duration-300">
                Узнать больше
              </button>
              <button className="bg-transparent hover:bg-blue-700 border border-white font-medium py-3 px-6 rounded-lg transition duration-300">
                Запросить демо
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Демонстрация интерактивности (счетчик) */}
      <div className="max-w-6xl mx-auto px-4 py-8 text-center">
        <div className="inline-block bg-gray-100 rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4">
            Интерактивность React в действии:
          </h3>
          <div className="text-3xl font-bold mb-4">{count}</div>
          <button
            onClick={handleIncrement}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition duration-300"
          >
            Увеличить счетчик
          </button>
          <p className="mt-4 text-gray-600">
            Состояние обновляется мгновенно без перезагрузки страницы!
          </p>
        </div>
      </div>

      {/* Секция возможностей */}
      <div id="features" className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Возможности React</h2>
          <p className="text-xl text-gray-600">
            Почему стоит использовать React для вашего проекта
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Секция отзывов */}
      <div id="testimonials" className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Отзывы клиентов</h2>
            <p className="text-xl text-gray-600">
              Что говорят о нашем решении на React
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="relative h-48">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className="absolute top-0 left-0 w-full transition-opacity duration-1000"
                  style={{ opacity: activeTestimonial === index ? 1 : 0 }}
                >
                  <p className="text-lg italic mb-4">"{testimonial.text}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-gray-600">{testimonial.company}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-4">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`mx-1 w-3 h-3 rounded-full ${
                    activeTestimonial === index ? "bg-blue-600" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Призыв к действию */}
      <div id="cta" className="bg-blue-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Готовы начать с React?</h2>
          <p className="text-xl mb-8">
            Присоединяйтесь к тысячам разработчиков, которые уже используют
            React
          </p>
          <button className="bg-white text-blue-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition duration-300 text-lg">
            Начать бесплатно
          </button>
        </div>
      </div>

      {/* Подвал */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">ReactLanding</h3>
              <p className="text-gray-400">
                Современные лендинги с использованием React
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Возможности</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Компоненты
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Производительность
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    SEO-оптимизация
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Аналитика
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    О нас
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Блог
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Карьера
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Контакты
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Подписаться на новости</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Ваш email"
                  className="px-4 py-2 w-full rounded-l-lg text-gray-800"
                />
                <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r-lg transition duration-300">
                  →
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>© 2025 ReactLanding. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
