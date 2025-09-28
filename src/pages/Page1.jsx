import { useNavigate } from "react-router-dom";

export default function Page1() {
  const navigate = useNavigate();

  return (
    <div>
      <h1 className="text-3xl font-bold text-pink-700 mb-4">My Love ❤️</h1>
      <img
        src={`${import.meta.env.BASE_URL}ruth.png`}
        alt="Ruth"
        className="mx-auto rounded-xl shadow-md w-60 mb-4"
      />
      <p className="mb-6 text-gray-700">
        The best Lady💯😍 I deeply fell in love with🥰, and with a beautiful smile😊 and a good looking body💦💖❤️. I have no way to get you flowers or gifts but baby❤️ this is what I have for you😘. 
      </p>
      <button
        onClick={() => navigate("/page2")}
        className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-xl shadow-md transition"
      >
        Click Next
      </button>
    </div>
  );
}
