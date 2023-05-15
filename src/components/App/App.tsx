import { getJoke } from "lib/api";
import "../../styles/components/app/styles.scss";
import DownloadForm from "./DownloadForm/DownloadForm";
import JokesForm from "./JokesForm/JokesForm";
import { useEffect, useState } from "react";

function App() {
  const [joke, setJoke] = useState("");
  const [custom, setCustom] = useState(false);

  useEffect(() => {
    const fetchJoke = async () => {
      const newJoke = await getJoke();
      setJoke(newJoke.value);
    };
    fetchJoke();
  }, []);
  return (
    <div className="wrapper">
      <main className="content">
        <div className="dashboard">
          <div className="photo-wrapper">
            <img
              alt="Chuck Norris photo"
              src={custom ? "images/unknown.jpg" : "images/photo.jpg"}
              className={custom ? "custom" : "photo"}
            />
          </div>
          {!joke ? (
            <p className="joke">Loading...</p>
          ) : (
            <p className="joke">{joke}</p>
          )}

          <JokesForm setJoke={setJoke} setCustom={setCustom} />
          <DownloadForm />
        </div>
      </main>
    </div>
  );
}

export default App;
