import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const features = [
  {
    title: "Мгновенные сообщения",
    description: "Отправляй текст, фото, голосовые и видео-сообщения в секунды. Никаких задержек — как живой разговор.",
    icon: "brain",
    badge: "Быстро",
  },
  {
    title: "Сквозное шифрование",
    description: "Все переписки защищены end-to-end шифрованием. Только вы и ваш собеседник видите сообщения.",
    icon: "lock",
    badge: "Безопасно",
  },
  {
    title: "Групповые чаты",
    description: "Создавай группы для семьи, друзей или команды. До 1000 участников в одном чате.",
    icon: "globe",
    badge: "Вместе",
  },
  {
    title: "Голосовые и видеозвонки",
    description: "Кристально чистый звук и видео даже при слабом интернете. Звони бесплатно по всему миру.",
    icon: "zap",
    badge: "HD-качество",
  },
  {
    title: "Синхронизация устройств",
    description: "Переписка доступна на телефоне, планшете и компьютере одновременно. Никогда не потеряешь историю.",
    icon: "link",
    badge: "Везде",
  },
  {
    title: "Статусы и истории",
    description: "Делись моментами своей жизни через истории, которые исчезают через 24 часа.",
    icon: "target",
    badge: "Моменты",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-sans">Всё для живого общения</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            ChatConnect — это не просто мессенджер. Это пространство для тех, кто важен тебе
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="glow-border hover:shadow-lg transition-all duration-300 slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-3xl">
                    {feature.icon === "brain" && "&#128172;"}
                    {feature.icon === "lock" && "&#128274;"}
                    {feature.icon === "globe" && "&#127760;"}
                    {feature.icon === "zap" && "&#128222;"}
                    {feature.icon === "link" && "&#128241;"}
                    {feature.icon === "target" && "&#10024;"}
                  </span>
                  <Badge variant="secondary" className="bg-accent text-accent-foreground">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
