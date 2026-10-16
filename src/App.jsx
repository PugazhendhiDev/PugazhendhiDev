import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function App() {
  gsap.registerPlugin(useGSAP);

  useGSAP(() => {
    gsap.to('.txt', { repeat: -1, opacity: 0.5, rotate: 360, duration: 2 });
  }, []);

  return (
    <div className="txt min-h-screen bg-gray-100 flex items-center justify-center">
      App
    </div>
  )
}
