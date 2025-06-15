export default function ReadViewer({ book, onClose }) {
  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center px-4">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl w-full relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs hover:bg-red-600"
        >
          Close
        </button>
        <h2 className="text-2xl font-semibold mb-2">{book.title}</h2>
        <p className="text-sm text-gray-700 mb-4">by {book.author}</p>
        <div className="max-h-[400px] overflow-y-auto text-gray-800">
          <p className="whitespace-pre-wrap leading-relaxed">{book.content}</p>
        </div>
      </div>
    </div>
  );
}
