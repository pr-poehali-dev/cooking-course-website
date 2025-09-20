import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import Icon from '@/components/ui/icon'

const Index = () => {
  const [activeTab, setActiveTab] = useState('home')

  const courses = [
    {
      id: 1,
      title: 'Основы европейской кухни',
      description: 'Изучите классические техники приготовления блюд европейской кухни',
      duration: '8 недель',
      level: 'Начинающий',
      price: '25 000 ₽',
      image: '/img/c36f2508-0a37-4ec9-bf2f-1d949d085a84.jpg',
      program: [
        'Неделя 1-2: Основы кулинарии и техники нарезки',
        'Неделя 3-4: Соусы и заправки',
        'Неделя 5-6: Мясные блюда и гарниры',
        'Неделя 7-8: Десерты и выпечка'
      ],
      skills: ['Техники нарезки', 'Приготовление соусов', 'Термическая обработка', 'Презентация блюд']
    },
    {
      id: 2,
      title: 'Профессиональная выпечка',
      description: 'Освойте искусство создания хлеба, тортов и кондитерских изделий',
      duration: '6 недель',
      level: 'Продвинутый',
      price: '30 000 ₽',
      image: '/img/ebf9ef56-10fa-4820-a2d0-3b00f1dee363.jpg',
      program: [
        'Неделя 1: Дрожжевое тесто и хлебобулочные изделия',
        'Неделя 2: Песочное и слоёное тесто',
        'Неделя 3-4: Бисквиты и торты',
        'Неделя 5-6: Крема, глазури и украшения'
      ],
      skills: ['Работа с тестом', 'Температурные режимы', 'Декорирование', 'Профессиональное оборудование']
    },
    {
      id: 3,
      title: 'Азиатская кулинария',
      description: 'Познайте секреты приготовления блюд азиатской кухни',
      duration: '10 недель',
      level: 'Средний',
      price: '28 000 ₽',
      image: '/img/c36f2508-0a37-4ec9-bf2f-1d949d085a84.jpg',
      program: [
        'Неделя 1-2: Японская кухня: суши, роллы, супы',
        'Неделя 3-4: Китайская кухня: вок, димсамы',
        'Неделя 5-6: Тайская кухня: карри, лапша',
        'Неделя 7-8: Корейская кухня: кимчи, барбекю',
        'Неделя 9-10: Индийская кухня: специи, тандыр'
      ],
      skills: ['Работа с воком', 'Использование специй', 'Ферментация', 'Азиатские техники']
    }
  ]

  const navigation = [
    { id: 'home', label: 'Главная', icon: 'Home' },
    { id: 'about', label: 'О нас', icon: 'Users' },
    { id: 'courses', label: 'Курсы', icon: 'BookOpen' },
    { id: 'gallery', label: 'Галерея', icon: 'Image' },
    { id: 'events', label: 'Мероприятия', icon: 'Calendar' },
    { id: 'contacts', label: 'Контакты', icon: 'Phone' }
  ]

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <div className="space-y-20">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-white overflow-hidden">
              <div className="absolute inset-0 bg-[url('/img/c36f2508-0a37-4ec9-bf2f-1d949d085a84.jpg')] bg-cover bg-center opacity-10"></div>
              <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
                <h1 className="text-6xl font-bold text-gray-800 mb-6 animate-fade-in">
                  Кулинарная академия
                  <span className="text-primary block mt-2">MasterChef</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto animate-fade-in">
                  Откройте для себя мир профессиональной кулинарии. Изучите секреты великих шефов и создавайте кулинарные шедевры
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-lg" onClick={() => setActiveTab('contacts')}>
                    <Icon name="PlayCircle" className="mr-2" size={20} />
                    Записаться на курс
                  </Button>
                  <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10 px-8 py-3 text-lg" onClick={() => setActiveTab('courses')}>
                    <Icon name="FileText" className="mr-2" size={20} />
                    Программы обучения
                  </Button>
                </div>
              </div>
            </section>

            {/* Features */}
            <section className="py-20 px-6">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Почему выбирают нас</h2>
                <div className="grid md:grid-cols-3 gap-8">
                  <Card className="text-center hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon name="Award" size={32} className="text-primary" />
                      </div>
                      <CardTitle>Профессиональные повара</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">Обучение от шеф-поваров с международным опытом и мишленовскими звездами</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="text-center hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon name="Utensils" size={32} className="text-primary" />
                      </div>
                      <CardTitle>Современное оборудование</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">Профессиональные кухни с новейшим оборудованием для комфортного обучения</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="text-center hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon name="Certificate" size={32} className="text-primary" />
                      </div>
                      <CardTitle>Сертификация</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">Получите официальный сертификат о прохождении курса профессиональной кулинарии</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </section>

            {/* Courses Preview */}
            <section className="py-20 px-6 bg-gray-50">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Популярные курсы</h2>
                <div className="grid md:grid-cols-3 gap-8">
                  {courses.slice(0, 3).map((course) => (
                    <Card key={course.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                      <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${course.image})` }}></div>
                      <CardHeader>
                        <div className="flex justify-between items-start mb-2">
                          <Badge variant="secondary">{course.level}</Badge>
                          <span className="text-primary font-bold text-lg">{course.price}</span>
                        </div>
                        <CardTitle className="text-xl">{course.title}</CardTitle>
                        <CardDescription>{course.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                          <span><Icon name="Clock" size={16} className="inline mr-1" />{course.duration}</span>
                        </div>
                        <Button className="w-full bg-primary hover:bg-primary/90" onClick={() => setActiveTab('courses')}>
                          Подробнее
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </section>
          </div>
        )

      case 'courses':
        return (
          <div className="py-20 px-6">
            <div className="max-w-6xl mx-auto">
              <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">Программы обучения</h1>
              <div className="space-y-8">
                {courses.map((course) => (
                  <Card key={course.id} className="overflow-hidden">
                    <div className="md:flex">
                      <div className="md:w-1/3 h-64 md:h-auto bg-cover bg-center" style={{ backgroundImage: `url(${course.image})` }}></div>
                      <div className="md:w-2/3 p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-2">{course.title}</h3>
                            <p className="text-gray-600 mb-4">{course.description}</p>
                            <div className="flex gap-4 text-sm text-gray-600 mb-4">
                              <span><Icon name="Clock" size={16} className="inline mr-1" />{course.duration}</span>
                              <Badge variant="outline">{course.level}</Badge>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-primary mb-2">{course.price}</div>
                            <Button size="sm" className="bg-primary hover:bg-primary/90" onClick={() => setActiveTab('contacts')}>
                              Записаться
                            </Button>
                          </div>
                        </div>
                        
                        <Accordion type="single" collapsible className="w-full">
                          <AccordionItem value="program">
                            <AccordionTrigger className="text-left">
                              <Icon name="BookOpen" size={20} className="mr-2" />
                              Программа курса
                            </AccordionTrigger>
                            <AccordionContent>
                              <ul className="space-y-2">
                                {course.program.map((item, index) => (
                                  <li key={index} className="flex items-start">
                                    <Icon name="CheckCircle" size={16} className="text-primary mr-2 mt-1 flex-shrink-0" />
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </AccordionContent>
                          </AccordionItem>
                          
                          <AccordionItem value="skills">
                            <AccordionTrigger className="text-left">
                              <Icon name="Star" size={20} className="mr-2" />
                              Навыки, которые вы получите
                            </AccordionTrigger>
                            <AccordionContent>
                              <div className="flex flex-wrap gap-2">
                                {course.skills.map((skill, index) => (
                                  <Badge key={index} variant="secondary">{skill}</Badge>
                                ))}
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        )

      case 'about':
        return (
          <div className="py-20 px-6">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">О нашей академии</h1>
              <div className="prose prose-lg mx-auto text-gray-600">
                <p className="text-xl leading-relaxed mb-8">
                  Кулинарная академия MasterChef — это место, где рождаются настоящие профессионалы кулинарного искусства. 
                  Более 10 лет мы обучаем людей готовить не просто еду, а создавать кулинарные шедевры.
                </p>
                <div className="grid md:grid-cols-2 gap-8 my-12">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Icon name="Users" size={24} className="mr-2 text-primary" />
                        Наша команда
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>Команда из 15 профессиональных шефов с международным опытом работы в лучших ресторанах мира</p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Icon name="GraduationCap" size={24} className="mr-2 text-primary" />
                        Выпускники
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>Более 2000 выпускников работают в ведущих ресторанах и открыли собственные заведения</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        )

      case 'gallery':
        return (
          <div className="py-20 px-6">
            <div className="max-w-6xl mx-auto">
              <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">Галерея</h1>
              <div className="grid md:grid-cols-3 gap-6">
                {Array.from({ length: 6 }).map((_, index) => (
                  <div key={index} className="aspect-square bg-cover bg-center rounded-lg overflow-hidden shadow-lg" 
                       style={{ backgroundImage: `url(${index % 2 === 0 ? '/img/c36f2508-0a37-4ec9-bf2f-1d949d085a84.jpg' : '/img/ebf9ef56-10fa-4820-a2d0-3b00f1dee363.jpg'})` }}>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )

      case 'events':
        return (
          <div className="py-20 px-6">
            <div className="max-w-6xl mx-auto">
              <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">Мероприятия</h1>
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Icon name="Calendar" size={24} className="mr-2 text-primary" />
                      Мастер-класс "Французская выпечка"
                    </CardTitle>
                    <CardDescription>15 октября 2024, 18:00</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>Изучите секреты создания классических французских десертов с шеф-кондитером Анной Дюбуа</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Icon name="Calendar" size={24} className="mr-2 text-primary" />
                      Кулинарное шоу "Азиатские вкусы"
                    </CardTitle>
                    <CardDescription>22 октября 2024, 19:30</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>Откройте для себя многообразие азиатской кухни в интерактивном кулинарном шоу</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        )

      case 'contacts':
        return (
          <div className="py-20 px-6">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">Запись на курсы</h1>
              <div className="grid md:grid-cols-2 gap-12">
                <Card>
                  <CardHeader>
                    <CardTitle>Форма записи</CardTitle>
                    <CardDescription>Заполните форму и мы свяжемся с вами в течение дня</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Имя</label>
                      <Input placeholder="Ваше имя" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Телефон</label>
                      <Input placeholder="+7 (999) 123-45-67" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <Input type="email" placeholder="your@email.com" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Интересующий курс</label>
                      <select className="w-full p-2 border rounded-md">
                        <option>Выберите курс</option>
                        {courses.map(course => (
                          <option key={course.id}>{course.title}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Сообщение</label>
                      <Textarea placeholder="Дополнительная информация..." />
                    </div>
                    <Button className="w-full bg-primary hover:bg-primary/90">
                      <Icon name="Send" size={20} className="mr-2" />
                      Отправить заявку
                    </Button>
                  </CardContent>
                </Card>
                
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Icon name="MapPin" size={24} className="mr-2 text-primary" />
                        Адрес
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>г. Москва, ул. Кулинарная, д. 123</p>
                      <p className="text-sm text-gray-600 mt-2">Ближайшая станция метро: Площадь Революции</p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Icon name="Phone" size={24} className="mr-2 text-primary" />
                        Телефон
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>+7 (495) 123-45-67</p>
                      <p className="text-sm text-gray-600 mt-2">Ежедневно с 9:00 до 21:00</p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Icon name="Mail" size={24} className="mr-2 text-primary" />
                        Email
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>info@masterchef-academy.ru</p>
                      <p className="text-sm text-gray-600 mt-2">Ответим в течение часа</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        )

      default:
        return (
          <div className="py-20 px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-6 text-gray-800">Раздел в разработке</h1>
              <p className="text-xl text-gray-600">Этот раздел скоро будет доступен</p>
            </div>
          </div>
        )
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-primary">MasterChef Academy</div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
                    activeTab === item.id
                      ? 'bg-primary text-white'
                      : 'text-gray-600 hover:text-primary hover:bg-primary/10'
                  }`}
                >
                  <Icon name={item.icon as any} size={20} />
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
            
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button variant="ghost" size="sm">
                <Icon name="Menu" size={24} />
              </Button>
            </div>
          </div>
          
          {/* Mobile Navigation */}
          <div className="md:hidden border-t pt-4 pb-4">
            <div className="grid grid-cols-2 gap-2">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors text-sm ${
                    activeTab === item.id
                      ? 'bg-primary text-white'
                      : 'text-gray-600 hover:text-primary hover:bg-primary/10'
                  }`}
                >
                  <Icon name={item.icon as any} size={16} />
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Content */}
      <main className="min-h-screen">
        {renderContent()}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">MasterChef Academy</h3>
              <p className="text-gray-300">Откройте для себя мир профессиональной кулинарии</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-300">
                <p><Icon name="Phone" size={16} className="inline mr-2" />+7 (495) 123-45-67</p>
                <p><Icon name="Mail" size={16} className="inline mr-2" />info@masterchef-academy.ru</p>
                <p><Icon name="MapPin" size={16} className="inline mr-2" />г. Москва, ул. Кулинарная, д. 123</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Социальные сети</h4>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white">
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white">
                  <Icon name="Facebook" size={20} />
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white">
                  <Icon name="Youtube" size={20} />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2024 MasterChef Academy. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Index