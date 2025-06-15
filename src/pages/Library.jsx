import FloatingMenu from "../components/FloatingMenu";
import LibraryTabs from "../components/LibraryTabs";

export default function Library() {
  return (
    <div className="min-h-screen bg-white text-black p-8">
      <h1 className="text-3xl font-bold mb-6">📚 My Library</h1>
      <LibraryTabs />
      <FloatingMenu />
    </div>
  );
}
