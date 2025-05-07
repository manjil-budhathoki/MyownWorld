import ProfileCard from '../components/ProfileCard';
import LinksGrid from '../components/LinksGrid';
import AboutSection from '../components/AboutSection';
import FooterSection from '../components/FooterSection';
import FloatingMenu from '../components/FloatingMenu';

export default function Home() {
  return (
    <main className="min-h-screen flex justify-center px-4 py-10 font-sans">
      <div className="w-full max-w-xl flex flex-col gap-8">
        <ProfileCard />
        <LinksGrid />
        <AboutSection />
        <FooterSection />
        <FloatingMenu />
      </div>
    </main>
  );
}
