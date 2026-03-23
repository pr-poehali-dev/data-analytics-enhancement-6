import { useState } from "react"

const characters = [
  {
    id: 1,
    name: "Торн",
    role: "Воин",
    emoji: "⚔️",
    color: "from-red-900/40 to-red-600/10",
    borderColor: "border-red-500/40",
    glowColor: "shadow-red-500/20",
    activeColor: "border-red-500",
    description: "Первым бросается в бой. Не думает — действует. Иногда это спасает команду, иногда создаёт проблемы.",
    trait: "Бесстрашный",
    skills: ["Рукопашный бой", "Выносливость", "Боевой клич"],
  },
  {
    id: 2,
    name: "Лира",
    role: "Маг",
    emoji: "✨",
    color: "from-purple-900/40 to-purple-600/10",
    borderColor: "border-purple-500/40",
    glowColor: "shadow-purple-500/20",
    activeColor: "border-purple-500",
    description: "Видит то, чего не замечают другие. Знает древние заклинания и никогда не торопится без причины.",
    trait: "Мудрая",
    skills: ["Магия огня", "Предвидение", "Щиты"],
  },
  {
    id: 3,
    name: "Фокс",
    role: "Трикстер",
    emoji: "🦊",
    color: "from-orange-900/40 to-orange-600/10",
    borderColor: "border-orange-500/40",
    glowColor: "shadow-orange-500/20",
    activeColor: "border-orange-500",
    description: "Выходит из любой ситуации с улыбкой. Его план всегда безумный — и почти всегда работает.",
    trait: "Хитрый",
    skills: ["Маскировка", "Ловушки", "Переговоры"],
  },
  {
    id: 4,
    name: "Ивана",
    role: "Лекарь",
    emoji: "💚",
    color: "from-green-900/40 to-green-600/10",
    borderColor: "border-green-500/40",
    glowColor: "shadow-green-500/20",
    activeColor: "border-green-500",
    description: "Держит команду в живых даже в самых безнадёжных ситуациях. Тихая снаружи, стальная внутри.",
    trait: "Стойкая",
    skills: ["Исцеление", "Яды", "Природная магия"],
  },
  {
    id: 5,
    name: "Коупер",
    role: "Инженер",
    emoji: "⚙️",
    color: "from-blue-900/40 to-blue-600/10",
    borderColor: "border-blue-500/40",
    glowColor: "shadow-blue-500/20",
    activeColor: "border-blue-500",
    description: "Если можно что-то сломать или починить — это к нему. Строит гаджеты из подручных материалов за минуту.",
    trait: "Изобретательный",
    skills: ["Механика", "Взрывчатка", "Взлом замков"],
  },
  {
    id: 6,
    name: "Зара",
    role: "Разведчик",
    emoji: "👁️",
    color: "from-cyan-900/40 to-cyan-600/10",
    borderColor: "border-cyan-500/40",
    glowColor: "shadow-cyan-500/20",
    activeColor: "border-cyan-500",
    description: "Знает маршрут ещё до того, как команда тронулась. Молчит, наблюдает, замечает всё.",
    trait: "Проницательная",
    skills: ["Слежка", "Стрельба из лука", "Картография"],
  },
]

export function CharactersSection() {
  const [active, setActive] = useState<number | null>(null)

  return (
    <section id="characters" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-3xl md:text-5xl font-bold text-white mb-6">
            Команда из <span className="text-red-500">6 героев</span>
          </h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Каждый персонаж — живой характер со своим взглядом на мир. Нажми на героя, чтобы узнать его лучше.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {characters.map((char) => (
            <div
              key={char.id}
              onClick={() => setActive(active === char.id ? null : char.id)}
              className={`
                relative cursor-pointer rounded-2xl border bg-gradient-to-br p-6 transition-all duration-300
                ${char.color} ${char.borderColor}
                hover:shadow-lg hover:${char.glowColor} hover:scale-[1.02]
                ${active === char.id ? `${char.activeColor} shadow-lg ${char.glowColor} scale-[1.02]` : ""}
              `}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="text-5xl">{char.emoji}</div>
                <div>
                  <h3 className="font-orbitron text-xl font-bold text-white">{char.name}</h3>
                  <p className="text-gray-400 text-sm font-space-mono">{char.role}</p>
                  <span className="inline-block mt-1 text-xs bg-white/10 text-white/70 rounded-full px-2 py-0.5">
                    {char.trait}
                  </span>
                </div>
              </div>

              <p className="text-gray-300 text-sm leading-relaxed mb-4">{char.description}</p>

              <div
                className={`overflow-hidden transition-all duration-500 ${active === char.id ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}
              >
                <div className="border-t border-white/10 pt-4">
                  <p className="text-xs text-gray-500 font-space-mono mb-2 uppercase tracking-wider">Навыки</p>
                  <div className="flex flex-wrap gap-2">
                    {char.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs bg-white/5 border border-white/10 text-white/70 rounded-lg px-3 py-1"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="absolute top-4 right-4 text-white/20 text-xs font-orbitron">#{char.id}</div>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-600 text-sm mt-10 font-space-mono">
          Все шестеро участвуют в каждом приключении — без исключений
        </p>
      </div>
    </section>
  )
}

export default CharactersSection
