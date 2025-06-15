import { useState } from "react";
import BookCard from "./BookCard";
import ReadViewer from "./ReadViewer";

const sampleBooks = {
  want: [
    {
      title: "Atomic Habits",
      author: "James Clear",
      cover: "/atomic.jpg",
      content: "Start small, build habits, transform your identity...",
    },
    {
      title: "Deep Work",
      author: "Cal Newport",
      cover: "/deepwork.jpg",
      content: "Deep work is the ability to focus without distraction...",
    },
  ],
  reading: [
    {
      title: "Almanack of Naval",
      author: "Eric Jorgenson",
      cover: "/naval.jpg",
      content: "Naval’s wisdom is built around leverage and clarity...",
    },
  ],
  board: [
    {
      title: "Quote",
      content: "Reading is the quietest and most constant of friends.",
    },
  ],
};

export default function LibraryTabs() {
  const [activeTab, setActiveTab] = useState("want");
  const [selectedBook, setSelectedBook] = useState(null);

  const tabButton = (key, label) => (
    <button
      onClick={() => {
        setSelectedBook(null);
        setActiveTab(key);
      }}
      className={`px-4 py-2 rounded-full text-sm font-medium border ${
        activeTab === key
          ? "bg-black text-white border-black"
          : "bg-gray-100 hover:bg-gray-200"
      }`}
    >
      {label}
    </button>
  );

  return (
    <>
      {/* Tabs */}
      <div className="flex gap-4 mb-6">
        {tabButton("want", "Want to Read")}
        {tabButton("reading", "Currently Reading")}
        {tabButton("board", "My Board")}
      </div>

      {/* Viewer */}
      {selectedBook && (
        <ReadViewer book={selectedBook} onClose={() => setSelectedBook(null)} />
      )}

      {/* Shelf Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {activeTab === "board" &&
          sampleBooks.board.map((note, i) => (
            <div
              key={i}
              className="p-4 bg-yellow-100 border-l-4 border-yellow-400 rounded-lg shadow"
            >
              <h3 className="text-lg font-semibold mb-2">{note.title}</h3>
              <p className="text-sm text-gray-800">{note.content}</p>
            </div>
          ))}

        {activeTab !== "board" &&
          sampleBooks[activeTab].map((book, i) => (
            <BookCard key={i} {...book} onClick={() => setSelectedBook(book)} />
          ))}
      </div>
    </>
  );
}
