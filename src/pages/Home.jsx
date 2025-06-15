import ProfileCard from '../components/ProfileCard';
import LinksGrid from '../components/LinksSection';
import AboutSection from '../components/AboutSection';
import FloatingMenu from '../components/FloatingMenu';
import NowSection from '../components/NowSection';
import ConnectSection from '../components/ConnectSection';
import FooterSection from '../components/FooterSection';

export default function Home() {
  return (
    <main className="min-h-screen flex justify-center px-4 py-10 font-sans">
      <div className="w-full max-w-xl flex flex-col gap-8">
        <ProfileCard />
        <AboutSection />
        <LinksGrid />
        <NowSection />
        <ConnectSection />
        <FooterSection />
        <FloatingMenu />
      </div>
    </main>
  );
}
