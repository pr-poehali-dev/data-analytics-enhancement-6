import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Максим Орлов",
    role: "Задал испытание: «Побег из подводной тюрьмы»",
    avatar: "/cybersecurity-expert-man.jpg",
    content:
      "Я написал одну строчку — и через минуту смотрел, как шестёрка героев взламывает замки и плывёт к свободе. Это как режиссировать свой мультфильм!",
  },
  {
    name: "Соня Малинина",
    role: "Задала испытание: «Выжить в городе вечного шторма»",
    avatar: "/professional-woman-scientist.png",
    content:
      "Лучший способ провести вечер с детьми. Они сами придумывают испытания, а потом дерутся за то, кто будет их любимый герой. Уже 30 приключений в копилке!",
  },
  {
    name: "Дима Черных",
    role: "Задал испытание: «Ограбление дракона»",
    avatar: "/asian-woman-tech-developer.jpg",
    content:
      "Трикстер в моей команде решил задачу так, как я никогда бы не придумал сам. Каждый раз удивляет — герои реально живут своим характером.",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-card-foreground mb-4 font-sans">Что говорят искатели приключений</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Реальные истории от тех, кто уже отправил своих героев в невозможное
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