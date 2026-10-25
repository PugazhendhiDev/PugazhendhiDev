import { useEffect, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Loader from "./components/Loader";
import Site from "./Site";

export default function App() {
  const [ready, setReady] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (done) ScrollTrigger.refresh();
  }, [done]);

  return (
    <>
      {ready && <Site />}
      {!done && (
        <Loader
          onReady={() => setReady(true)}
          onDone={() => setDone(true)}
        />
      )}
    </>
  );
}