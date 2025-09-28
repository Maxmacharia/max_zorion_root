import { Routes, Route } from "react-router-dom";
import EmojiBackground from "./components/EmojiBackground";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import Page4 from "./pages/Page4";

export default function App() {
  return (
    <div className="relative min-h-screen bg-pink-50 overflow-hidden">
      {/* Floating emoji background */}
      <EmojiBackground />

      {/* Content */}
      <div className="relative z-10 flex justify-center items-center min-h-screen">
        <div className="bg-white/80 backdrop-blur-md shadow-lg rounded-2xl p-6 max-w-xl w-full text-center">
          <Routes>
            <Route path="/" element={<Page1 />} />
            <Route path="/page2" element={<Page2 />} />
            <Route path="/page3" element={<Page3 />} />
            <Route path="/page4" element={<Page4 />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
