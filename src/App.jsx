import { useEffect, useState } from "react";
import { flushSync } from "react-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Loader from "./components/Loader";
import Site from "./Site";

export default function App() {
  const [ready, setReady] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!done) return;
    const id = setTimeout(() => ScrollTrigger.refresh(), 3000);
    return () => clearTimeout(id);
  }, [done]);

  return (
    <>
      {ready && <Site />}
      {!done && (
        <Loader
          onReady={() => flushSync(() => setReady(true))}
          onDone={() => setDone(true)}
        />
      )}
    </>
  );
}