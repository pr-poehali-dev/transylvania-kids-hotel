import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
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

      {/* Contact Form */}
      <section className="py-16 bg-white/5 backdrop-blur-sm">
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
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
                  />
                  <Input 
                    placeholder="Возраст" 
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
                  />
                </div>
                <Input 
                  placeholder="Ваш телефон" 
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
                />
                <Textarea 
                  placeholder="Дополнительные пожелания" 
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
                />
                <Button className="w-full bg-monster-orange hover:bg-orange-600 text-white font-comic text-lg py-6">
                  🎃 Записаться сейчас!
                </Button>
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