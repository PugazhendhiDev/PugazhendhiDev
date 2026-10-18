import { useState } from "react";
import Loader from "./components/Loader";
import Site from "./Site";

export default function App() {
  const [ready, setReady] = useState(false);

  return ready ? <Site /> : <Loader onDone={() => setReady(true)} />;
}