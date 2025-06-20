import { useState } from "react";
import { Button } from "../ui/button";
import { jwtDecode } from "jwt-decode";
import api from "@/config/axios";

const moods = [
  { value: "happy", emoji: "😊" },
  { value: "good", emoji: "🙂" },
  { value: "neutral", emoji: "😐" },
  { value: "sad", emoji: "😢" },
  { value: "angry", emoji: "😠" },
];

export default function BlogEntry() {
  const [selectedMood, setSelectedMood] = useState(null);
  const [note, setNote] = useState("");

  const today = new Date();

  const handleSubmit = async () => {
    if (!selectedMood) return alert("Pick a mood!");

    const listOfCookie = document.cookie.split(";");

    let token = "";

    listOfCookie.forEach((element) => {
      if (element.trim().startsWith("jwt_token")) {
        token = element.trim().split("=")[1];
      }
    });

    const decoded = jwtDecode(token);

    const res = await api.post("/entry/create/", {
      user: decoded.email,
      mood: selectedMood,
      note: note,
    });
    if (res.status === 201) {
      alert("Done");
    }

    console.log(res.data);
  };

  return (
    <div className="p-4 bg-white rounded-xl shadow-md">
      <h1 className="text-4xl font-semibold mb-5">
        How are you feeling today?
      </h1>
      <p className="my-4 text-lg text-gray-700 tracking-wider">
        {today.toLocaleDateString("IN").replace(/\//g, "-")}
      </p>
      <div className="flex gap-3 mb-4">
        {moods.map((m) => (
          <div key={m.value} className="relative group inline-block">
            <button
              className={`text-3xl p-2 rounded-full ${
                selectedMood === m.value ? "bg-blue-200" : ""
              } cursor-pointer relative`}
              onClick={() => setSelectedMood(m.value)}
            >
              {m.emoji}
            </button>

            <span
              className="absolute -top-2 -right-2 z-10 bg-slate-900 text-white text-xs px-2 py-1 rounded 
                 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"
            >
              {m.value}
            </span>
          </div>
        ))}
      </div>
      <textarea
        placeholder="Want to add a note?"
        value={note}
        onChange={(e) => setNote(e.target.value)}
        className="w-5/12 min-h-2/5 block border p-2 rounded mb-2 "
      />
      <Button onClick={handleSubmit} className="text-white px-4 py-2 rounded">
        Submit
      </Button>
    </div>
  );
}
