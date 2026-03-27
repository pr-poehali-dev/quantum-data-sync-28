import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Анна Смирнова",
    role: "Мама двоих детей, Москва",
    avatar: "/professional-woman-scientist.png",
    content:
      "Переехала в другой город, но благодаря ChatConnect каждый день вижу детей и общаюсь с родителями. Как будто и не уезжала!",
  },
  {
    name: "Дмитрий Петров",
    role: "Студент, Санкт-Петербург",
    avatar: "/cybersecurity-expert-man.jpg",
    content:
      "Наша студенческая группа в ChatConnect — это лучшее, что могло случиться. Быстро, удобно, без лишней рекламы и слежки.",
  },
  {
    name: "Мария Ким",
    role: "Фрилансер, Новосибирск",
    avatar: "/asian-woman-tech-developer.jpg",
    content:
      "Звонки с семьёй каждый вечер — теперь это ритуал. Качество связи отличное, даже когда интернет слабый. Очень рада, что нашла это приложение.",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-card-foreground mb-4 font-sans">Нам доверяют миллионы</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Реальные истории людей, которые нашли в ChatConnect больше, чем просто мессенджер
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="glow-border slide-up" style={{ animationDelay: `${index * 0.15}s` }}>
              <CardContent className="p-6">
                <p className="text-card-foreground mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-primary">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
