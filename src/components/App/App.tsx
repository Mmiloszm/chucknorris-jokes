import "../../styles/components/app/styles.scss";
import DownloadForm from "./DownloadForm/DownloadForm";
import JokesForm from "./JokesForm/JokesForm";

function App() {
  return (
    <div className="wrapper">
      <main className="content">
        <div className="dashboard">
          <img
            alt="Chuck Norris photo"
            src={"src/assets/images/photo.jpg"}
            className="photo"
          />
          <p className="joke">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            ipsam pariatur distinctio eaque eligendi! Culpa consectetur odio
            odit laboriosam suscipit.
          </p>

          <JokesForm />
          <DownloadForm />
        </div>
      </main>
    </div>
  );
}

export default App;
