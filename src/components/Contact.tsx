import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Contact = () => {
  const contactInfo = [
    {
      icon: "Phone",
      title: "Телефон",
      value: "+7 (xxx) xxx-xx-xx",
      action: "Позвонить",
    },
    {
      icon: "Mail",
      title: "Email",
      value: "photo@example.com",
      action: "Написать",
    },
    {
      icon: "MessageCircle",
      title: "Telegram",
      value: "@photographer",
      action: "Связаться",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-['Montserrat']">
            Связаться со мной
          </h2>
          <p className="text-xl text-gray-600 font-['Open_Sans']">
            Обсудим детали съемки и выберем идеальное время
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((contact, index) => (
            <Card
              key={index}
              className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon
                    name={contact.icon}
                    className="text-purple-600"
                    size={32}
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 font-['Montserrat']">
                  {contact.title}
                </h3>
                <p className="text-gray-600 mb-4 font-['Open_Sans']">
                  {contact.value}
                </p>
                <Button variant="outline" className="w-full">
                  {contact.action}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 font-['Montserrat']">
              Готовы к фотосессии?
            </h3>
            <p className="text-gray-600 mb-6 font-['Open_Sans']">
              Свяжитесь со мной любым удобным способом, и мы обсудим все детали
            </p>
            <Button
              size="lg"
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3"
            >
              <Icon name="Calendar" className="mr-2" size={20} />
              Записаться на съемку
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
