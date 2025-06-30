import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Services = () => {
  const services = [
    {
      icon: "Heart",
      title: "Семейные портреты",
      description: "Красивые портреты всей семьи в студии или на природе",
      price: "от 5000 ₽",
    },
    {
      icon: "Baby",
      title: "Детская съемка",
      description: "Нежные кадры с малышами и детьми разного возраста",
      price: "от 4000 ₽",
    },
    {
      icon: "Users",
      title: "Семейные события",
      description: "Дни рождения, праздники и важные семейные моменты",
      price: "от 6000 ₽",
    },
    {
      icon: "Flower",
      title: "Тематические съемки",
      description: "Сезонные и праздничные фотосессии с реквизитом",
      price: "от 5500 ₽",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-['Montserrat']">
            Услуги
          </h2>
          <p className="text-xl text-gray-600 font-['Open_Sans']">
            Выберите подходящий формат съемки для вашей семьи
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon
                    name={service.icon}
                    className="text-purple-600"
                    size={32}
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 font-['Montserrat']">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 font-['Open_Sans']">
                  {service.description}
                </p>
                <div className="text-2xl font-bold text-purple-600 font-['Montserrat']">
                  {service.price}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
