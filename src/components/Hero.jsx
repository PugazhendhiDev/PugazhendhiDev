import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Pugazhendhi from "../assets/pugazhendhi.png"
import TornPaper from "../assets/torn_paper.png"

export default function Hero() {
  gsap.registerPlugin(useGSAP);

  useGSAP(() => {
    gsap.from('.text-h1', { y: -200, opacity: 0, duration: 1 });
    gsap.to('.text-h1', {
      y: 0, duration: 1, onComplete: () => {
        document.querySelector(".text-h1")?.classList.add("animate-float");
      }
    });
    gsap.from('.pugazh-image', { y: 200, opacity: 0, duration: 1 });
    gsap.to('.pugazh-image', { y: 0, duration: 1 });
    gsap.from('.text-p', { x: -100, opacity: 0, stagger: 0.5, delay: 0.5 });
    gsap.to('.text-p', {
      x: 0, onComplete: () => {
        document.querySelector(".text-box")?.classList.add("animate-float");
      }
    });
    gsap.from('.torn-paper', { opacity: 0, duration: 1, delay: 1 });
    gsap.to('.torn-paper', {
      y: 0, duration: 1, onComplete: () => {
        document.querySelector(".torn-paper")?.classList.add("animate-float");
      }
    });
  }, []);

  return (
    <div className="content-center h-dvh bg-[--bg-color]">
      <img src={TornPaper} className="animate-float torn-paper absolute w-full max-md:top-0 max-md:h-96 max-md:object-cover md:object-fill size-96 object-cover drop-shadow-[0_0_25px_rgba(3,3,3,0.8)]" />
      <h1 className="text-h1 absolute lg:top-14 xl:top-32 top-32 md:text-9xl text-5xl font-bold text-center gradient-text">Pugazhendhi</h1>
      <div className="text-box absolute md:left-10 lg:left-20 md:bottom-64 md:text-xl max-md:top-52 text-xl text-center md:text-left">
        <p className="text-p gradient-text">Curious mind. Endless questions.</p>
        <p className="text-p gradient-text">Building software & exploring AI</p>
        <p className="text-p gradient-text">Always learning</p>
        <p className="text-p gradient-text">Always exploring</p>
      </div>
      <img src={Pugazhendhi} className="pugazh-image md:w-lg lg:w-xl w-80 absolute bottom-0 drop-shadow-[0_0_25px_rgba(3,3,3,0.8)]" alt="Pugazhendhi" />
    </div>
  )
}
