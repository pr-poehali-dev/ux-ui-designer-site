import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

export default function Index() {
  const portfolioProjects = [
    {
      id: 1,
      title: "E-commerce Mobile App",
      description: "Современный UI/UX дизайн мобильного приложения для онлайн-покупок",
      category: "Mobile Design",
      tools: ["Figma", "Principle", "Sketch"],
      image: "🛍️",
      prototype: "https://figma.com/proto/example1"
    },
    {
      id: 2,
      title: "Dashboard Analytics",
      description: "Интерактивная панель аналитики с продвинутыми виджетами",
      category: "Web Design",
      tools: ["Figma", "Framer", "Adobe XD"],
      image: "📊",
      prototype: "https://framer.com/prototype2"
    },
    {
      id: 3,
      title: "Banking App Redesign",
      description: "Полный редизайн мобильного банковского приложения",
      category: "UX Research",
      tools: ["Figma", "Miro", "Maze"],
      image: "🏦",
      prototype: "https://figma.com/proto/example3"
    }
  ];

  const skills = [
    { name: "UI Design", level: 95 },
    { name: "UX Research", level: 90 },
    { name: "Prototyping", level: 88 },
    { name: "User Testing", level: 85 },
    { name: "Design Systems", level: 92 },
    { name: "Figma", level: 98 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold text-gray-900">SERGEY IVANOV</div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-600 hover:text-blue-600 transition-colors">Главная</a>
              <a href="#portfolio" className="text-gray-600 hover:text-blue-600 transition-colors">Портфолио</a>
              <a href="#resume" className="text-gray-600 hover:text-blue-600 transition-colors">Резюме</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">Контакты</a>
            </div>
            <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
              <Icon name="Download" size={16} className="mr-2" />
              Скачать CV
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <div className="mb-8">
              <img 
                src="https://cdn.poehali.dev/files/a554ad17-138e-4ad9-8cde-41644db631b4.png" 
                alt="Sergey Ivanov" 
                className="w-32 h-32 rounded-full mx-auto mb-6 shadow-2xl ring-4 ring-blue-100"
              />
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
                SERGEY IVANOV
              </h1>
              <p className="text-2xl text-blue-600 font-medium mb-6">UI/UX Designer</p>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8">
                Создаю цифровые продукты, которые решают реальные проблемы пользователей. 
                Специализируюсь на мобильных приложениях, веб-интерфейсах и дизайн-системах.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <Badge variant="secondary" className="px-4 py-2 text-sm">5+ лет опыта</Badge>
                <Badge variant="secondary" className="px-4 py-2 text-sm">50+ проектов</Badge>
                <Badge variant="secondary" className="px-4 py-2 text-sm">Международный опыт</Badge>
              </div>
              <div className="flex justify-center space-x-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <Icon name="Eye" size={20} className="mr-2" />
                  Посмотреть работы
                </Button>
                <Button variant="outline" size="lg">
                  <Icon name="MessageCircle" size={20} className="mr-2" />
                  Связаться
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Портфолио</h2>
            <p className="text-lg text-gray-600">Мои последние проекты с встроенными прототипами</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioProjects.map((project) => (
              <Card key={project.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardHeader>
                  <div className="text-4xl mb-4">{project.image}</div>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <Badge variant="outline" className="mb-2">{project.category}</Badge>
                    <div className="flex flex-wrap gap-2">
                      {project.tools.map((tool) => (
                        <Badge key={tool} variant="secondary" className="text-xs">{tool}</Badge>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Button variant="outline" size="sm" className="w-full">
                      <Icon name="ExternalLink" size={16} className="mr-2" />
                      Открыть прототип
                    </Button>
                    <Button variant="ghost" size="sm" className="w-full">
                      <Icon name="FileText" size={16} className="mr-2" />
                      Case Study
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Prototype Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Интерактивные прототипы</h2>
            <p className="text-lg text-gray-600">Посмотрите мои работы в действии</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="p-8">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Smartphone" size={24} className="mr-3 text-blue-600" />
                  Mobile Banking App
                </CardTitle>
                <CardDescription>
                  Интерактивный прототип мобильного банкинга с анимациями
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-100 rounded-lg p-8 text-center mb-4">
                  <div className="w-40 h-80 bg-white rounded-2xl mx-auto shadow-lg border-2 border-gray-200 flex items-center justify-center">
                    <div className="text-center">
                      <Icon name="Smartphone" size={48} className="text-blue-600 mx-auto mb-2" />
                      <p className="text-sm text-gray-500">Интерактивный прототип</p>
                    </div>
                  </div>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  <Icon name="Play" size={16} className="mr-2" />
                  Запустить прототип
                </Button>
              </CardContent>
            </Card>

            <Card className="p-8">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Monitor" size={24} className="mr-3 text-blue-600" />
                  Dashboard Analytics
                </CardTitle>
                <CardDescription>
                  Веб-интерфейс с интерактивными графиками и виджетами
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-100 rounded-lg p-8 text-center mb-4">
                  <div className="w-full h-40 bg-white rounded-lg shadow-lg border-2 border-gray-200 flex items-center justify-center">
                    <div className="text-center">
                      <Icon name="BarChart3" size={48} className="text-blue-600 mx-auto mb-2" />
                      <p className="text-sm text-gray-500">Живая демонстрация</p>
                    </div>
                  </div>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  <Icon name="ExternalLink" size={16} className="mr-2" />
                  Открыть демо
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">РЕЗЮМЕ</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Профессиональный UI/UX дизайнер с 6+ годами опыта создания 
              цифровых продуктов для стартапов и крупных компаний
            </p>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">6+</div>
              <div className="text-gray-600">Лет опыта</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">85+</div>
              <div className="text-gray-600">Проектов</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">12</div>
              <div className="text-gray-600">Наград</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">3</div>
              <div className="text-gray-600">Страны</div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-12 mb-20">
            {/* Skills */}
            <div className="lg:col-span-1">
              <h3 className="text-3xl font-bold text-gray-900 mb-8">Экспертиза</h3>
              <div className="space-y-6">
                {skills.map((skill) => (
                  <div key={skill.name} className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex justify-between mb-3">
                      <span className="font-semibold text-gray-900">{skill.name}</span>
                      <span className="text-blue-600 font-bold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full transition-all duration-1000 shadow-sm" 
                        style={{width: `${skill.level}%`}}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div className="lg:col-span-2">
              <h3 className="text-3xl font-bold text-gray-900 mb-8">Опыт работы</h3>
              <div className="space-y-10">
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start">
                    <div className="w-4 h-4 bg-blue-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                        <h4 className="text-xl font-bold text-gray-900">Senior UI/UX Designer</h4>
                        <Badge className="bg-blue-100 text-blue-800 w-fit">2021 - настоящее время</Badge>
                      </div>
                      <p className="text-blue-600 font-medium mb-3">TechCorp • Москва</p>
                      <ul className="text-gray-600 space-y-2">
                        <li>• Руководство командой из 4 дизайнеров</li>
                        <li>• Создание единой дизайн-системы для 8 продуктов</li>
                        <li>• Увеличение конверсии на 35% через UX оптимизацию</li>
                        <li>• Проведение 50+ интервью с пользователями</li>
                      </ul>
                    </div>
                  </div>
                </Card>
                
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start">
                    <div className="w-4 h-4 bg-gray-400 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                        <h4 className="text-xl font-bold text-gray-900">UI/UX Designer</h4>
                        <Badge variant="secondary" className="w-fit">2019 - 2021</Badge>
                      </div>
                      <p className="text-gray-500 font-medium mb-3">StartupXYZ • Удаленно</p>
                      <ul className="text-gray-600 space-y-2">
                        <li>• Дизайн мобильного приложения с 100k+ скачиваний</li>
                        <li>• Создание прототипов в Figma и Principle</li>
                        <li>• A/B тестирование интерфейсов</li>
                        <li>• Работа с продуктовой аналитикой</li>
                      </ul>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start">
                    <div className="w-4 h-4 bg-gray-400 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                        <h4 className="text-xl font-bold text-gray-900">Junior Designer</h4>
                        <Badge variant="secondary" className="w-fit">2018 - 2019</Badge>
                      </div>
                      <p className="text-gray-500 font-medium mb-3">WebStudio • Санкт-Петербург</p>
                      <ul className="text-gray-600 space-y-2">
                        <li>• Создание лендингов и корпоративных сайтов</li>
                        <li>• Изучение принципов UX дизайна</li>
                        <li>• Работа с брендингом и айдентикой</li>
                        <li>• Освоение Sketch, Figma, Adobe Creative Suite</li>
                      </ul>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-8">Образование</h3>
              <Card className="p-6">
                <div className="flex items-center mb-4">
                  <Icon name="GraduationCap" size={24} className="text-blue-600 mr-3" />
                  <div>
                    <h4 className="text-lg font-semibold">Магистратура, Дизайн</h4>
                    <p className="text-gray-600">СПБГУ • 2016-2018</p>
                  </div>
                </div>
                <p className="text-gray-600">Специализация: Графический и веб-дизайн, UX/UI</p>
              </Card>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-8">Сертификаты</h3>
              <div className="space-y-4">
                <Card className="p-4">
                  <div className="flex items-center">
                    <Icon name="Award" size={20} className="text-blue-600 mr-3" />
                    <div>
                      <h4 className="font-semibold">Google UX Design Certificate</h4>
                      <p className="text-sm text-gray-600">2023</p>
                    </div>
                  </div>
                </Card>
                
                <Card className="p-4">
                  <div className="flex items-center">
                    <Icon name="Award" size={20} className="text-blue-600 mr-3" />
                    <div>
                      <h4 className="font-semibold">Adobe Certified Expert</h4>
                      <p className="text-sm text-gray-600">2022</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-4">
                  <div className="flex items-center">
                    <Icon name="Award" size={20} className="text-blue-600 mr-3" />
                    <div>
                      <h4 className="font-semibold">Design Thinking Specialist</h4>
                      <p className="text-sm text-gray-600">2021</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>

          {/* Tools & Technologies */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Инструменты</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
              {[
                { name: "Figma", icon: "🎨" },
                { name: "Sketch", icon: "✏️" },
                { name: "Adobe XD", icon: "🔷" },
                { name: "Principle", icon: "⚡" },
                { name: "Framer", icon: "🔥" },
                { name: "Photoshop", icon: "🖼️" },
                { name: "Illustrator", icon: "🎭" },
                { name: "Miro", icon: "🧠" }
              ].map((tool) => (
                <Card key={tool.name} className="p-4 text-center hover:shadow-lg transition-shadow hover-scale">
                  <div className="text-3xl mb-2">{tool.icon}</div>
                  <div className="font-medium text-sm">{tool.name}</div>
                </Card>
              ))}
            </div>
          </div>

          {/* Download Resume Button */}
          <div className="text-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8 py-4 text-lg">
              <Icon name="Download" size={24} className="mr-3" />
              Скачать полное резюме PDF
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Контакты</h2>
            <p className="text-lg text-gray-600">Готов к новым проектам и сотрудничеству</p>
          </div>

          <Card className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-6">Свяжитесь со мной</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Icon name="Mail" size={20} className="text-blue-600 mr-4" />
                    <span>sergeyivanov1966ivanov@yandex.ru</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="Phone" size={20} className="text-blue-600 mr-4" />
                    <span>+7 (930) 706-65-20</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="MapPin" size={20} className="text-blue-600 mr-4" />
                    <span>Cаров, Россия</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="Globe" size={20} className="text-blue-600 mr-4" />
                    <span>sergeyivanov.design</span>
                  </div>
                </div>

                <Separator className="my-6" />

                <div className="flex space-x-4">
                  <Button variant="outline" size="sm">
                    <Icon name="Linkedin" size={16} className="mr-2" />
                    LinkedIn
                  </Button>
                  <Button variant="outline" size="sm">
                    <Icon name="Github" size={16} className="mr-2" />
                    Behance
                  </Button>
                  <Button variant="outline" size="sm">
                    <Icon name="Twitter" size={16} className="mr-2" />
                    Dribbble
                  </Button>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-6">Отправить сообщение</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Имя</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Ваше имя"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Сообщение</label>
                    <textarea 
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Расскажите о вашем проекте..."
                    ></textarea>
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    <Icon name="Send" size={16} className="mr-2" />
                    Отправить сообщение
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p>&copy; 2024 Sergey Ivanov. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}