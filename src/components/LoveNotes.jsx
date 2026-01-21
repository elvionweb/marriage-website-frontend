import { useState, useEffect } from "react";
// import axios from "axios";
import api from "../lib/api"

export default function LoveNotes() {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [status, setStatus] = useState(null);
  const [notes, setNotes] = useState([]);

  // =============================
  // Fetch approved notes from backend
  // =============================
  const fetchNotes = async () => {
    try {
      const res = await api.get("/api/notes"); // replace with production URL
      setNotes(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  // =============================
  // Submit new note
  // =============================
  const submitNote = async () => {
    // Frontend validation
    if (!message.trim()) {
      setError("Message is required.");

       // ✅ Auto-hide error after 3 seconds
    setTimeout(() => setError(""), 3000);
      return;
    }
    if (message.length > 350) {
      setError("Message cannot exceed 350 characters.");

      // ✅ Auto-hide error after 3 seconds
    setTimeout(() => setError(""), 3000);
      return;
    }

    try {
      setError("");
      await api.post("/api/notes", {
        name: "Guest",
        message,
      });

      setMessage("");
      setStatus({ type: "success", message: "Message sent successfully! ❤️" });

      // ✅ Auto-hide success message after 3 seconds
      setTimeout(() => setStatus(null), 3000);

      fetchNotes();
    } catch (err) {
      console.error(err);
      setStatus({
        type: "error",
        message: "Error sending message. Try again!",
      });

      // ✅ Auto-hide error message too
      setTimeout(() => setStatus(null), 3000);
    }
  };

  return (
    <section className="py-6 bg-primary text-center px-4">
      <h2 className="text-2xl md:text-4xl font-serif text-blue-600 mb-3 md:mb-6">
        Leave a Note
      </h2>

      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="w-full max-w-xl mx-auto p-4 rounded-lg border bg-white focus:outline-none focus:ring-2 focus:ring-accent"
        rows={4}
        placeholder="Write your message..."
        maxLength={350}
      />

      {error && <p className="text-red-500 mt-2">{error}</p>}

      <button
        onClick={submitNote}
        className="mt-4 mb-6 bg-accent text-white px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition"
      >
        Send Message
      </button>

      {status && (
        <p
          className={`text-sm font-medium mb-4 ${
            status.type === "success" ? "text-green-600" : "text-red-600"
          }`}
        >
          {status.message}
        </p>
      )}

      {/* Display Approved Notes */}
      <div className="max-w-xl mx-auto space-y-4">
        {notes.map((note) => (
          <div
            key={note._id}
            className="p-4 rounded-lg shadow-sm bg-white border"
          >
            <p className="font-semibold">{note.name}</p>
            <p>{note.message}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
