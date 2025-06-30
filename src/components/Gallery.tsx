import { Card } from "@/components/ui/card";

const Gallery = () => {
  const photos = [
    {
      src: "/placeholder.svg",
      alt: "Семейная фотосессия 1",
      title: "Семья в парке",
    },
    {
      src: "/placeholder.svg",
      alt: "Семейная фотосессия 2",
      title: "Детский портрет",
    },
    {
      src: "/placeholder.svg",
      alt: "Семейная фотосессия 3",
      title: "Праздничная съемка",
    },
    {
      src: "/placeholder.svg",
      alt: "Семейная фотосессия 4",
      title: "Студийный портрет",
    },
    {
      src: "/placeholder.svg",
      alt: "Семейная фотосессия 5",
      title: "На природе",
    },
    {
      src: "/placeholder.svg",
      alt: "Семейная фотосессия 6",
      title: "Домашняя съемка",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-['Montserrat']">
            Галерея работ
          </h2>
          <p className="text-xl text-gray-600 font-['Open_Sans']">
            Примеры наших семейных фотосессий
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {photos.map((photo, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-square relative overflow-hidden">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <p className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-['Open_Sans']">
                    {photo.title}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
