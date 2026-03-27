import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "ChatConnect — бесплатный?",
      answer:
        "Да, базовый функционал полностью бесплатен: сообщения, звонки, групповые чаты и истории. В будущем появится премиум-план с дополнительными возможностями.",
    },
    {
      question: "Мои сообщения действительно защищены?",
      answer:
        "Абсолютно. Мы используем end-to-end шифрование — это значит, что даже мы не можем прочитать ваши сообщения. Только вы и ваш собеседник.",
    },
    {
      question: "На каких устройствах работает приложение?",
      answer:
        "ChatConnect доступен на iOS, Android, и в браузере. Все сообщения синхронизируются между устройствами в реальном времени.",
    },
    {
      question: "Можно ли общаться с иностранными номерами?",
      answer:
        "Да, ChatConnect работает по всему миру. Звонки и сообщения бесплатны для всех пользователей приложения, независимо от страны.",
    },
    {
      question: "Есть ли ограничения на размер файлов?",
      answer:
        "Можно отправлять файлы до 2 ГБ: фото, видео, документы, аудио. Для фото доступна отправка в оригинальном качестве.",
    },
    {
      question: "Что происходит с удалёнными сообщениями?",
      answer:
        "Удалённые сообщения исчезают навсегда — с вашего устройства и устройства собеседника. Мы не храним копии удалённых данных.",
    },
  ]

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron">Частые вопросы</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-space-mono">
            Ответы на самые популярные вопросы о ChatConnect
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
