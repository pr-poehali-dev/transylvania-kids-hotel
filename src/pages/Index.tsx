import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-monster-purple via-monster-blue to-monster-turquoise">
      {/* Header */}
      <header className="bg-white/10 backdrop-blur-sm border-b border-white/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <h1 className="font-comic text-2xl font-bold text-white">
                👻 Отель "Трансильвания"
              </h1>
            </div>
            <Button className="bg-monster-orange hover:bg-orange-600 text-white font-semibold px-6">
              Записаться
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-comic text-5xl md:text-7xl font-bold text-white mb-6 animate-bounce-gentle">
              Где монстры учат английский! 🎃
            </h2>
            <p className="text-xl md:text-2xl text-white/90 mb-8 font-sans">
              Развлекательный центр для детей в ЖК "Спутник"<br/>
              Играем, учимся и веселимся до ночи!
            </p>
            {/* УТП блок */}
            <div className="bg-black/40 backdrop-blur-sm rounded-3xl p-8 mb-12 border-4 border-monster-yellow shadow-2xl">
              <h3 className="font-comic text-4xl font-bold text-monster-yellow mb-6 text-center animate-bounce-gentle">
                🎯 ЕДИНСТВЕННЫЙ В ГОРОДЕ!
              </h3>
              <div className="grid md:grid-cols-4 gap-6 text-center">
                <div className="bg-monster-orange/30 rounded-2xl p-6 border-2 border-monster-orange">
                  <div className="text-5xl mb-3">🌙</div>
                  <h4 className="font-comic text-xl text-white mb-3 font-bold">До 22:00 и 23:00!</h4>
                  <p className="text-white font-semibold">Будни до 22:00<br/>Выходные до 23:00</p>
                </div>
                <div className="bg-monster-blue/30 rounded-2xl p-6 border-2 border-monster-blue">
                  <div className="text-5xl mb-3">🏨</div>
                  <h4 className="font-comic text-xl text-white mb-3 font-bold">НАСТОЯЩИЙ ОТЕЛЬ!</h4>
                  <p className="text-white font-semibold">Дети думают что в настоящем отеле и идут с удовольствием!</p>
                </div>
                <div className="bg-monster-green/30 rounded-2xl p-6 border-2 border-monster-green">
                  <div className="text-5xl mb-3">👨‍🏫</div>
                  <h4 className="font-comic text-xl text-white mb-3 font-bold">Носители языка!</h4>
                  <p className="text-white font-semibold">Настоящие англичане и американцы</p>
                </div>
                <div className="bg-monster-pink/30 rounded-2xl p-6 border-2 border-monster-pink">
                  <div className="text-5xl mb-3">📹</div>
                  <h4 className="font-comic text-xl text-white mb-3 font-bold">Смотрите удалённо!</h4>
                  <p className="text-white font-semibold">Видеонаблюдение онлайн для родителей</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Badge className="bg-monster-yellow text-black text-lg px-4 py-2 animate-float">
                👶 Дошкольники
              </Badge>
              <Badge className="bg-monster-pink text-black text-lg px-4 py-2 animate-float" style={{animationDelay: '0.5s'}}>
                🧒 Младшие школьники
              </Badge>
              <Badge className="bg-monster-green text-white text-lg px-4 py-2 animate-float" style={{animationDelay: '1s'}}>
                🎯 Носители языка
              </Badge>
            </div>
            <div className="relative">
              <img 
                src="/img/4e501d8d-502e-478d-91dc-9db115bebf76.jpg" 
                alt="Дружелюбные монстры отеля Трансильвания"
                className="mx-auto rounded-3xl shadow-2xl max-w-full h-auto animate-fade-in"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <h3 className="font-comic text-4xl font-bold text-center text-white mb-12">
            🏰 Почему вам понравится
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-monster-orange/20 border-monster-orange border-2 hover:scale-105 transition-transform">
              <CardHeader className="text-center">
                <Icon name="Clock" size={48} className="mx-auto text-monster-yellow mb-4" />
                <CardTitle className="font-comic text-white">Удобное время</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/90 text-center">
                  Работаем до 22:00 (будни)<br/>
                  до 23:00 (выходные)
                </p>
              </CardContent>
            </Card>

            <Card className="bg-monster-blue/20 border-monster-blue border-2 hover:scale-105 transition-transform">
              <CardHeader className="text-center">
                <Icon name="Shield" size={48} className="mx-auto text-monster-yellow mb-4" />
                <CardTitle className="font-comic text-white">Безопасность 24/7</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/90 text-center">
                  Видеонаблюдение<br/>
                  Профессиональные аниматоры
                </p>
              </CardContent>
            </Card>

            <Card className="bg-monster-green/20 border-monster-green border-2 hover:scale-105 transition-transform">
              <CardHeader className="text-center">
                <Icon name="Users" size={48} className="mx-auto text-monster-yellow mb-4" />
                <CardTitle className="font-comic text-white">Носители языка</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/90 text-center">
                  Играем и учим<br/>
                  без зубрежки!
                </p>
              </CardContent>
            </Card>

            <Card className="bg-monster-pink/20 border-monster-pink border-2 hover:scale-105 transition-transform">
              <CardHeader className="text-center">
                <Icon name="Baby" size={48} className="mx-auto text-monster-yellow mb-4" />
                <CardTitle className="font-comic text-white">От 3-х лет</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/90 text-center">
                  Можно оставлять<br/>
                  без взрослых
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Themed Rooms Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h3 className="font-comic text-4xl font-bold text-center text-white mb-12">
            🎪 Наши тематические комнаты
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all">
              <CardHeader>
                <CardTitle className="font-comic text-2xl text-monster-yellow">
                  🧛‍♂️ Замок Дракулы
                </CardTitle>
                <CardDescription className="text-white/80">
                  Для дошкольников 3-6 лет
                </CardDescription>
              </CardHeader>
              <CardContent>
                <img 
                  src="/img/c057f74e-c0ca-4460-bbc9-43562e40d985.jpg" 
                  alt="Тематическая комната замок Дракулы"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <p className="text-white/90 mb-4">
                  Развивающие игры и первые английские слова в атмосфере дружелюбного замка
                </p>
                <Button className="w-full bg-monster-purple hover:bg-purple-600 text-white">
                  Забронировать
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all">
              <CardHeader>
                <CardTitle className="font-comic text-2xl text-monster-yellow">
                  🐺 Логово Оборотня
                </CardTitle>
                <CardDescription className="text-white/80">
                  Для школьников 7-12 лет
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="w-full h-48 bg-monster-orange/30 rounded-lg mb-4 flex items-center justify-center">
                  <Icon name="Gamepad2" size={64} className="text-monster-yellow" />
                </div>
                <p className="text-white/90 mb-4">
                  Увлекательные квесты и языковая практика с элементами приключений
                </p>
                <Button className="w-full bg-monster-orange hover:bg-orange-600 text-white">
                  Забронировать
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all">
              <CardHeader>
                <CardTitle className="font-comic text-2xl text-monster-yellow">
                  👻 Дом Привидений
                </CardTitle>
                <CardDescription className="text-white/80">
                  Смешанные группы
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="w-full h-48 bg-monster-blue/30 rounded-lg mb-4 flex items-center justify-center">
                  <Icon name="Music" size={64} className="text-monster-yellow" />
                </div>
                <p className="text-white/90 mb-4">
                  Интерактивные представления и музыкальные игры на английском языке
                </p>
                <Button className="w-full bg-monster-blue hover:bg-blue-600 text-white">
                  Забронировать
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Safety & Security Section */}
      <section className="py-16 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <h3 className="font-comic text-4xl font-bold text-center text-white mb-12">
            🛡️ Камеры и меры безопасности
          </h3>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-monster-green/20 border-monster-green border-2">
                <CardHeader>
                  <Icon name="Camera" size={48} className="text-monster-yellow mb-4" />
                  <CardTitle className="font-comic text-2xl text-white">Видеонаблюдение</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-white/90 space-y-2">
                    <li>• Камеры во всех игровых зонах</li>
                    <li>• Доступ для родителей через приложение</li>
                    <li>• Запись 24/7 для безопасности</li>
                    <li>• Профессиональный мониторинг</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-monster-blue/20 border-monster-blue border-2">
                <CardHeader>
                  <Icon name="ShieldCheck" size={48} className="text-monster-yellow mb-4" />
                  <CardTitle className="font-comic text-2xl text-white">Профессиональная команда</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-white/90 space-y-2">
                    <li>• Сертифицированные аниматоры</li>
                    <li>• Педагоги с опытом работы с детьми</li>
                    <li>• Носители английского языка</li>
                    <li>• Медицинская подготовка персонала</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="py-16 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <h3 className="font-comic text-4xl font-bold text-center text-white mb-12">
            📅 Расписание работы
          </h3>
          <div className="max-w-4xl mx-auto">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader className="text-center">
                <CardTitle className="font-comic text-2xl text-monster-yellow">
                  🕐 График работы отеля
                </CardTitle>
                <CardDescription className="text-white/80">
                  Выберите удобное время для посещения
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow className="border-white/20">
                      <TableHead className="text-monster-yellow font-comic text-lg">День недели</TableHead>
                      <TableHead className="text-monster-yellow font-comic text-lg">Время работы</TableHead>
                      <TableHead className="text-monster-yellow font-comic text-lg">Программы</TableHead>
                      <TableHead className="text-monster-yellow font-comic text-lg">Возрастные группы</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow className="border-white/10 bg-monster-blue/10">
                      <TableCell className="text-white font-bold">Понедельник</TableCell>
                      <TableCell className="text-white font-bold">10:00 - 22:00</TableCell>
                      <TableCell className="text-white">Замок Дракулы, Логово Оборотня</TableCell>
                      <TableCell className="text-white">3-12 лет</TableCell>
                    </TableRow>
                    <TableRow className="border-white/10 bg-monster-green/10">
                      <TableCell className="text-white font-bold">Вторник</TableCell>
                      <TableCell className="text-white font-bold">10:00 - 22:00</TableCell>
                      <TableCell className="text-white">Дом Привидений, Квесты</TableCell>
                      <TableCell className="text-white">5-12 лет</TableCell>
                    </TableRow>
                    <TableRow className="border-white/10 bg-monster-purple/10">
                      <TableCell className="text-white font-bold">Среда</TableCell>
                      <TableCell className="text-white font-bold">10:00 - 22:00</TableCell>
                      <TableCell className="text-white">Все программы</TableCell>
                      <TableCell className="text-white">3-12 лет</TableCell>
                    </TableRow>
                    <TableRow className="border-white/10 bg-monster-pink/10">
                      <TableCell className="text-white font-bold">Четверг</TableCell>
                      <TableCell className="text-white font-bold">10:00 - 22:00</TableCell>
                      <TableCell className="text-white">Театральные постановки</TableCell>
                      <TableCell className="text-white">6-12 лет</TableCell>
                    </TableRow>
                    <TableRow className="border-white/10 bg-monster-turquoise/10">
                      <TableCell className="text-white font-bold">Пятница</TableCell>
                      <TableCell className="text-white font-bold">10:00 - 22:00</TableCell>
                      <TableCell className="text-white">Вечеринки монстров</TableCell>
                      <TableCell className="text-white">3-12 лет</TableCell>
                    </TableRow>
                    <TableRow className="border-white/10 bg-monster-orange/10">
                      <TableCell className="text-monster-yellow font-semibold">Суббота</TableCell>
                      <TableCell className="text-monster-yellow font-semibold">10:00 - 23:00</TableCell>
                      <TableCell className="text-monster-yellow">Все программы + Ночные квесты</TableCell>
                      <TableCell className="text-monster-yellow">3-14 лет</TableCell>
                    </TableRow>
                    <TableRow className="border-white/10 bg-monster-orange/10">
                      <TableCell className="text-monster-yellow font-semibold">Воскресенье</TableCell>
                      <TableCell className="text-monster-yellow font-semibold">10:00 - 23:00</TableCell>
                      <TableCell className="text-monster-yellow">Семейные программы</TableCell>
                      <TableCell className="text-monster-yellow">Вся семья</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
                <div className="mt-6 p-4 bg-monster-purple/20 rounded-lg">
                  <p className="text-white/90 text-center">
                    💡 <strong>Специальные предложения:</strong> В выходные действуют семейные тарифы и ночные квесты до 23:00!
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h3 className="font-comic text-4xl font-bold text-center text-white mb-12">
            ❓ Вопросы и ответы
          </h3>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-white/10 backdrop-blur-sm rounded-lg border-white/20">
                <AccordionTrigger className="px-6 py-4 text-white font-comic text-lg">
                  С какого возраста можно оставлять ребенка?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-white/90">
                  С 3-х лет можно оставлять без взрослого. До 3-х лет ребенок находится с родителем или дежурным "вампиром".
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-white/10 backdrop-blur-sm rounded-lg border-white/20">
                <AccordionTrigger className="px-6 py-4 text-white font-comic text-lg">
                  Какой график работы отеля?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-white/90">
                  Будни: до 22:00, выходные: до 23:00. Мы работаем каждый день, чтобы родители могли планировать свое время.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-white/10 backdrop-blur-sm rounded-lg border-white/20">
                <AccordionTrigger className="px-6 py-4 text-white font-comic text-lg">
                  Нужно ли знание английского языка?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-white/90">
                  Нет! Мы работаем с детьми любого уровня. Наши носители языка создают естественную языковую среду через игры.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-white/10 backdrop-blur-sm rounded-lg border-white/20">
                <AccordionTrigger className="px-6 py-4 text-white font-comic text-lg">
                  Как происходит бронирование?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-white/90">
                  Бронирование происходит через сайт, как в обычном отеле. Выбираете время, программу и комнату для вашего ребенка.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-16 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <h3 className="font-comic text-4xl font-bold text-center text-white mb-12">
            📸 Фотогалерея отеля
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative group">
              <img 
                src="/img/4e501d8d-502e-478d-91dc-9db115bebf76.jpg" 
                alt="Монстры отеля Трансильвания"
                className="w-full h-64 object-cover rounded-3xl border-4 border-monster-orange shadow-2xl group-hover:scale-105 transition-transform"
              />
              <div className="absolute inset-0 bg-monster-orange/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <div className="relative group">
              <img 
                src="/img/c057f74e-c0ca-4460-bbc9-43562e40d985.jpg" 
                alt="Тематические комнаты"
                className="w-full h-64 object-cover rounded-3xl border-4 border-monster-blue shadow-2xl group-hover:scale-105 transition-transform"
              />
              <div className="absolute inset-0 bg-monster-blue/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <div className="relative group">
              <img 
                src="/img/d407c55c-9cab-4277-b76f-de6ad3cf7948.jpg" 
                alt="Игровые зоны отеля"
                className="w-full h-64 object-cover rounded-3xl border-4 border-monster-green shadow-2xl group-hover:scale-105 transition-transform"
              />
              <div className="absolute inset-0 bg-monster-green/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <h3 className="font-comic text-4xl font-bold text-center text-white mb-12">
            🗺️ Как нас найти
          </h3>
          <div className="max-w-4xl mx-auto">
            <Card className="bg-black/40 backdrop-blur-sm border-monster-yellow border-4">
              <CardHeader className="text-center">
                <CardTitle className="font-comic text-3xl text-monster-yellow">
                  📍 Отель "Трансильвания"
                </CardTitle>
                <CardDescription className="text-white text-lg font-semibold">
                  ЖК "Спутник", ул. Липовой Рощи, 6г1 (бывший surf coffee)
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-monster-turquoise/20 rounded-2xl p-6 border-2 border-monster-turquoise">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="text-center">
                      <Icon name="MapPin" size={48} className="mx-auto text-monster-yellow mb-4" />
                      <h4 className="font-comic text-xl text-white mb-2">Местоположение</h4>
                      <p className="text-white font-semibold">
                        Центр города<br/>
                        Удобная парковка<br/>
                        Рядом магазины
                      </p>
                    </div>
                    <div className="text-center">
                      <Icon name="Car" size={48} className="mx-auto text-monster-yellow mb-4" />
                      <h4 className="font-comic text-xl text-white mb-2">Как добраться</h4>
                      <p className="text-white font-semibold">
                        На авто: 5 мин от центра<br/>
                        На общественном транспорте<br/>
                        Остановка "Спутник"
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h3 className="font-comic text-4xl font-bold text-center text-white mb-12">
            📞 Записаться на открытие
          </h3>
          <div className="max-w-2xl mx-auto">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader className="text-center">
                <CardTitle className="font-comic text-2xl text-monster-yellow">
                  🎁 Первым гостям - сюрприз!
                </CardTitle>
                <CardDescription className="text-white/80">
                  Успейте записаться на открытие
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input 
                    placeholder="Имя ребенка" 
                    className="bg-black/40 border-monster-yellow border-2 text-white placeholder:text-white font-semibold"
                    required
                  />
                  <Input 
                    placeholder="Возраст ребенка" 
                    className="bg-black/40 border-monster-orange border-2 text-white placeholder:text-white font-semibold"
                    required
                  />
                </div>
                <Input 
                  placeholder="Ваш телефон для связи" 
                  className="bg-black/40 border-monster-green border-2 text-white placeholder:text-white font-semibold"
                  required
                />
                <Button className="w-full bg-monster-orange hover:bg-orange-700 text-white font-comic text-xl py-8 border-4 border-monster-yellow shadow-2xl">
                  🎃 ЗАПИСАТЬСЯ СЕЙЧАС!
                </Button>
                <p className="text-center text-white/80 mt-4">
                  ☎️ Или позвоните: <span className="font-bold text-monster-yellow">+7 903 777 03 55</span>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-comic text-xl text-monster-yellow mb-4">📍 Адрес</h4>
              <p className="text-white/90">
                ЖК "Спутник"<br/>
                ул. Липовой Рощи, 6к1<br/>
                (бывший surf coffee)
              </p>
            </div>
            <div>
              <h4 className="font-comic text-xl text-monster-yellow mb-4">📞 Контакты</h4>
              <p className="text-white/90">
                Телефон: +7 903 777 03 55<br/>
                Открытие совсем скоро!
              </p>
            </div>
            <div>
              <h4 className="font-comic text-xl text-monster-yellow mb-4">⏰ График</h4>
              <p className="text-white/90">
                Будни: до 22:00<br/>
                Выходные: до 23:00
              </p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/20 text-center">
            <p className="text-white/70">
              © 2024 Отель "Трансильвания" - Где монстры учат английский! 👻
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;