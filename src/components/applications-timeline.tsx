import { Timeline } from "@/components/ui/timeline"

export function ApplicationsTimeline() {
  const data = [
    {
      title: "Шаг 1: Придумай испытание",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Напиши любую идею в свободной форме. Чем безумнее — тем интереснее. ИИ поймёт даже самые 
            фантастические сценарии и превратит их в полноценную историю с локациями, врагами и целью.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              «Спасти принцессу из замка на облаке»
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              «Выжить в городе роботов будущего»
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              «Найти артефакт в джунглях динозавров»
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Шаг 2: Герои оживают",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Шесть уникальных персонажей принимают вызов. Каждый реагирует по-своему: воин рвётся в бой, 
            маг ищет хитрый обход, а трикстер уже придумывает нестандартное решение.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Уникальные характеры и диалоги
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Командная динамика и конфликты внутри группы
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Каждый герой влияет на исход приключения
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Шаг 3: Смотри мультфильм",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Приключение разворачивается как 3D-мультсериал. Анимированные сцены, саундтрек под настроение, 
            неожиданные повороты сюжета — и финальный эпичный момент, который захочется пересмотреть.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              3D-сцены с анимированными персонажами
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Динамичный саундтрек под каждую сцену
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Поделись приключением с друзьями одной ссылкой
            </div>
          </div>
        </div>
      ),
    },
  ]

  return (
    <section id="how-it-works" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-6">Как это работает</h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            От идеи до мультфильма — три простых шага. Никаких настроек, никаких ограничений фантазии.
          </p>
        </div>

        <div className="relative">
          <Timeline data={data} />
        </div>
      </div>
    </section>
  )
}