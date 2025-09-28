import { useNavigate } from "react-router-dom";

export default function Page3() {
  const navigate = useNavigate();

  return (
    <div>
      <p className="mb-6 text-gray-700">
        I am not a poet😂 but poems says a lot in short and minimal words. I have a
        lot to say which could not fit on the letter💗❤️. Before you say you don't
        like poems😂, please read it❤️ then say those words. Kidding...😂😂
      </p>

      <div className="text-left bg-pink-100 rounded-xl p-4 mb-6 text-gray-800">
        <p>In crowded rooms where the air feels thin,</p>
        <p>You fight your battles, yet hold it within.</p>
        <p>Sharing beds, with no space to breathe,</p>
        <p>But love, my heart will never leave.</p>
        <br />
        <p>Though food is bitter, and nights are long,</p>
        <p>Your spirit, my darling, remains so strong.</p>
        <p>Every ache, every tear, every silent plea,</p>
        <p>You can lay them down, and lean on me.</p>
        <br />
        <p>For soon the tickets will open the sky,</p>
        <p>And home will whisper, “You’ve survived.”</p>
        <p>Hold on, my love, just a little more—</p>
        <p>Freedom waits at Kenya’s shore.</p>
        <br />
        <p>Until that day, let my love be your light,</p>
        <p>To warm you through the coldest night.</p>
        <p>You are my heart, my soul’s desire,</p>
        <p>The flame that keeps my spirit on fire.</p>
      </div>

      <button
        onClick={() => navigate("/page4")}
        className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-xl shadow-md transition"
      >
        Click Next
      </button>
    </div>
  );
}
