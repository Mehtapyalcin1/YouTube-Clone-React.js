import { createContext, useEffect, useState } from "react";
import { categories } from "../constants";
import { getData } from "../helpers/getData";

//1) context temelini oluştur
export const VideoContext = createContext();

//2) Sağlayıcı tanımla
export const VideoProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [videos, setVideos] = useState(null);

  // kategori her değiştiğinde api'den veriyi al
  useEffect(() => {
    // menü seçildiye fonksiyonu durdur
    if (selectedCategory.type === "menu") return;

    // önceki kategorinin verilerini temizle(loader çalışsın)
    setVideos(null);

    // type'i home ise home endpointine istek at
    if (selectedCategory.type === "home") {
      getData("/home").then((res) => setVideos(res.data));
    }

    // type'i trending ise trending endpointine istek at
    if (selectedCategory.type === "trending") {
      getData("/trending").then((res) => setVideos(res.data));
    }

    // type'i category ise o zaman searh endpointine istek at
    if (selectedCategory.type === "category") {
      getData(`/search?query=${selectedCategory.name}`).then((res) =>
        setVideos(res.data)
      );
    }
  }, [selectedCategory]);
  return (
    <VideoContext.Provider
      value={{ videos, selectedCategory, setSelectedCategory }}
    >
      {children}
    </VideoContext.Provider>
  );
};
