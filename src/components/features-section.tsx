import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const features = [
  {
    title: "Любое испытание",
    description: "Задай любую идею — подводный город, ледяная крепость, джунгли будущего. ИИ превратит текст в полноценное 3D-приключение.",
    icon: "brain",
    badge: "ИИ",
  },
  {
    title: "6 уникальных героев",
    description: "Каждый герой имеет характер, способности и реакции. Они взаимодействуют, спорят и помогают друг другу — как в настоящем мультике.",
    icon: "lock",
    badge: "Команда",
  },
  {
    title: "3D-анимация в реальном времени",
    description: "Герои двигаются, сражаются и побеждают в объёмном пространстве. Каждое приключение — уникальный мини-фильм.",
    icon: "globe",
    badge: "3D",
  },
  {
    title: "Динамичный сюжет",
    description: "ИИ придумывает повороты, препятствия и финальный твист. Одно испытание — одна неповторимая история.",
    icon: "zap",
    badge: "Сюжет",
  },
  {
    title: "Сохранение и шеринг",
    description: "Каждое приключение сохраняется. Делись с друзьями, сравнивай прохождения, собирай коллекцию историй.",
    icon: "link",
    badge: "Поделиться",
  },
  {
    title: "Режим мультиплеера",
    description: "Задавайте испытания вместе с друзьями — пусть каждый управляет своим героем или голосует за решения команды.",
    icon: "target",
    badge: "Вместе",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-sans">Как рождается приключение</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Твоя идея — и шесть героев уже в пути. Никакого кода, только воображение
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
                    {feature.icon === "brain" && "&#129504;"}
                    {feature.icon === "lock" && "&#128274;"}
                    {feature.icon === "globe" && "&#127760;"}
                    {feature.icon === "zap" && "&#9889;"}
                    {feature.icon === "link" && "&#128279;"}
                    {feature.icon === "target" && "&#127919;"}
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