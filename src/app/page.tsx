import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Story from "./components/Story";
import Gallery from "./components/Gallery";
import RSVP from "./components/RSVP";
import MusicPlayer from "./components/MusicPlayer";
export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Story />
      <Gallery />
      <RSVP />
      <MusicPlayer />
    </main>
  );
}