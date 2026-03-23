import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "Нужно ли уметь программировать?",
      answer:
        "Совсем нет. Просто напишите идею на русском языке — любую, насколько хватит фантазии. ИИ сам разберётся с остальным и создаст полноценную 3D-историю.",
    },
    {
      question: "Сколько времени занимает создание одного приключения?",
      answer:
        "От написания идеи до первой сцены — около 30–60 секунд. Полное приключение со всеми сценами генерируется в течение 2–3 минут.",
    },
    {
      question: "Можно ли переиграть одно и то же испытание?",
      answer:
        "Да! Каждый запуск уникален — ИИ генерирует новые повороты, диалоги и решения. Одно и то же задание никогда не пройдёт одинаково.",
    },
    {
      question: "Кто такие 6 героев? Можно ли их изменить?",
      answer:
        "Шестёрка — постоянная команда с уникальными характерами: воин, маг, трикстер, лекарь, инженер и разведчик. В будущем появится возможность создавать своих персонажей.",
    },
    {
      question: "Можно играть вместе с друзьями?",
      answer:
        "Да, режим совместной игры уже в разработке. Пока можно поделиться ссылкой на приключение — друзья смогут посмотреть вашу историю и запустить своё прохождение.",
    },
    {
      question: "На каких устройствах работает Quest 6?",
      answer:
        "В браузере на любом устройстве — телефоне, планшете или компьютере. Никаких загрузок и установок не нужно.",
    },
  ]

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron">Частые вопросы</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-space-mono">
            Всё, что хотели знать о Quest 6, прежде чем отправить героев в первое испытание.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-red-500/20 mb-4">
                <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-red-400 font-orbitron px-6 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed px-6 pb-4 font-space-mono">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}