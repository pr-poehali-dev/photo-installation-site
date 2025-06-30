import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-6 font-['Montserrat']">
          Семейные моменты
          <span className="block text-purple-600">навсегда</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto font-['Open_Sans']">
          Профессиональная семейная фотосъемка. Запечатлеваем искренние эмоции и
          создаем воспоминания, которые останутся с вами навсегда.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3"
          >
            <Icon name="Camera" className="mr-2" size={20} />
            Заказать фотосессию
          </Button>
          <Button variant="outline" size="lg" className="px-8 py-3">
            <Icon name="Image" className="mr-2" size={20} />
            Посмотреть работы
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
