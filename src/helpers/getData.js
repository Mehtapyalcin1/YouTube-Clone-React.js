import axios from "axios";

// istek için gerekli ayarlar
const options = {
  headers: {
    "X-RapidAPI-Key": "81c27d540emshbe85ecf0b76b495p12c129jsnab1065fae1c0",
    "X-RapidAPI-Host": "yt-api.p.rapidapi.com",
  },
  params: {
    lang: "tr",
    geo: "TR",
  },
};

// yapılan bütün isteklerin ortak olan başlanguc kısmını belirle
axios.defaults.baseURL = "https://yt-api.p.rapidapi.com";

// Parametre olarak aldırğı url'e istek atıp
// Geriye elde etiiği verileri döndüren yardımcı fonk.
export const getData = async (endpoint) => {
  try {
    // api isteği at
    const res = await axios.get(endpoint, options);
    // fonksiyonun çağrıldığı yere veriyi döndür
    return res.data;
  } catch (err) {
    console.log("Verileri çekerken bir sorun oluştu", err);
  }
};
