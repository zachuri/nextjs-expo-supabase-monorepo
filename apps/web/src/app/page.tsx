import Footer from '@/components/Footer';
import Header from '@/components/Header';

import WelcomeCard from '@/components/WelcomeCard';

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 flex items-center justify-center">
        <WelcomeCard />
      </main>
      <Footer />
    </div>
  );
}
