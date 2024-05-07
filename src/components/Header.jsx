import { Link, useNavigate } from "react-router-dom";
import { IoIosSearch, IoMdVideocam } from "react-icons/io";
import { FaBell } from "react-icons/fa";

const Header = () => {
  const navigate = useNavigate();

  // form gönderilince tetiklenir
  const handleSubmit = (e) => {
    e.preventDefault();

    // inputa girilen veri
    const text = e.target[0].value;

    // kullanıcıyı sonuçlar sayfasına yönlendir
    //  parametre olarak aratılan terimi ekle
    navigate(`/results?search_query=${text}`);
  };
  return (
    <div className="flex justify-between items-center p-4 ">
      <Link to={"/"} className="flex items-center gap-[10px]">
        <img className="w-[50px]" src="/youtube.png" alt="youtube logo" />
        <h1 className="hidden md:block text-2xl">Youtube</h1>
      </Link>

      <form
        onSubmit={handleSubmit}
        className="flex items-center border border-[rgb(123,123,123)] rounded-[20px] overflow-hidden"
      >
        <input
          className="px-3 py-1 bg-black text-white outline-none"
          type="text"
        />
        <button className="border-l px-2 text-xl ">
          <IoIosSearch />
        </button>
      </form>

      <div className="flex gap-3 text-xl cursor-pointer">
        <FaBell className="hover:text-gray-400 transition duration-[400ms]" />
        <IoMdVideocam className="hover:text-gray-400 transition duration-[400ms]" />
      </div>
    </div>
  );
};

export default Header;
