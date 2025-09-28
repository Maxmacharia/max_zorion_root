import { useNavigate } from "react-router-dom";

export default function Page2() {
  const navigate = useNavigate();

  return (
    <div>
      <p className="mb-6 text-gray-700">
        I keep thinking about you baby💉🩸❤️ and I can't help myself but dedicate and
        express my feelings🥰❤️ in the letter attached.
      </p>

      <div className="flex gap-4 justify-center">
        <a
          href={`${import.meta.env.BASE_URL}your_letter.pdf`}
          download
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-xl shadow-md transition"
        >
          Download Letter
        </a>

        <button
          onClick={() => navigate("/page3")}
          className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-xl shadow-md transition"
        >
          Click Next
        </button>
      </div>
    </div>
  );
}
