export default function RecentWritingSection() {
  const writings = [
    { title: "Peeking into 2024", date: "5 MONTHS AGO" },
    { title: "Are you asking your why?", date: "7 MONTHS AGO" },
    { title: "Look where you aim", date: "10 MONTHS AGO" },
  ];

  return (
    <div className="max-w-[680px] mx-auto px-4 sm:px-6 lg:px-0 mt-16 mb-28">
      <h2 className="text-sm text-zinc-400 mb-4">Recent writing</h2>
      <ul className="space-y-3">
        {writings.map((item, idx) => (
          <li
            key={idx}
            className="flex justify-between items-center text-[15px]"
          >
            <span className="text-zinc-300">{item.title}</span>
            <span className="text-zinc-500 text-sm whitespace-nowrap">
              {item.date}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
