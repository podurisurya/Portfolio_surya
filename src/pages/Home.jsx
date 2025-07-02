import Navbar from '../components/Navbar';
import RSVPForm from '../components/RSVPForm';
import WhenWhereSection from '../components/WhenWhereSection';
import AlbumSection from '../components/AlbumSection';
import Footer from '../components/Footer';
import Schedules from '../components/Schedules';
import ContentTwo from '../components/ContentTwo';
import ContentOne from '../components/ContentOne';

const Home = () => {
  const weddingDate = new Date('2024-11-15T00:00:00');
  const now = new Date();
  const diff = weddingDate - now;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  return (
    <div className="min-h-screen flex flex-col bg-white text-center">
      <Navbar links={['Home', 'Schedules', 'RSVP', 'Gallery', 'Gift Registry']} />
      <main className="flex-grow relative">
        {/* <section className="py-10 relative h-[500px] w-full">
          <div className="absolute inset-0 bg-white opacity-90" style={{ backgroundImage: 'url("https://t3.ftcdn.net/jpg/13/18/85/24/360_F_1318852489_XCMqq6HJkCv0WLNdHPombRtC1J0rwUeC.jpg")', backgroundSize: 'fit', backgroundPosition: 'center',backgroundRepeat: 'no-repeat',width: '100%', height: '100%' }}></div>
          <div className="relative z-10">
            <h1 className="text-4xl font-cursive text-green-800">Wedding</h1>
            <div className="flex justify-center mt-4">
              <img src="/placeholder-couple.jpg" alt="Ritesh & Joya" className="w-1/3 rounded-lg shadow-lg" />
            </div>
            <h2 className="text-5xl font-cursive mt-4">Ritesh & Joya</h2>
            <p className="text-xl mt-2">Our Big Day: November 15, 2024</p>
            <div className="flex justify-center mt-4 space-x-4 text-green-800">
              <div><span className="text-4xl">{days}</span> Days</div>
              <div><span className="text-4xl">{hours}</span> Hours</div>
              <div><span className="text-4xl">{minutes}</span> Mins</div>
              <div><span className="text-4xl">{seconds}</span> Secs</div>
            </div>
          </div>
        </section> */}
        <ContentOne/>
        <ContentTwo/>
        <Schedules/>
        <section id="rsvp" className="py-10">
          <RSVPForm />
        </section>
        <WhenWhereSection />
        <AlbumSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;