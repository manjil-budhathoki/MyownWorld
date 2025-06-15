export default function BookCard({ title, author, cover, onClick }) {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer relative flex flex-col items-center bg-white border rounded-lg shadow hover:shadow-lg transition-all"
    >
      <img
        src={cover}
        alt={title}
        className="w-full h-64 object-cover rounded-t-lg"
      />
      <div className="p-3 w-full text-center">
        <h2 className="font-bold text-md">{title}</h2>
        <p className="text-sm text-gray-500">{author}</p>
      </div>
    </div>
  );
}
