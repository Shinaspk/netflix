
import './App.css';
import Row from './components/Row';
import requests from './request';
import Banner from './components/Banner';
import Nav from  './components/Nav'
function App() {
  return (
    <div >
      <Nav/>
     <Banner fetchURL={requests.fetchNetflixOriginals}/>
     <Row isPosture={true} tittle="fetchTrending" fetchURL={requests.fetchTrending} />
     <Row  tittle="NetflixOriginals" fetchURL={requests.fetchNetflixOriginals} />
     
     <Row tittle="fetchTopRated" fetchURL={requests.fetchTopRated} />
     <Row tittle="fetchActionMovies" fetchURL={requests.fetchActionMovies} />
     <Row tittle="fetchComedyMovies" fetchURL={requests.fetchComedyMovies} />
     <Row tittle="fetchHorrorMovies" fetchURL={requests.fetchHorrorMovies} />
     <Row tittle="fetchRomanceMovies" fetchURL={requests.fetchRomanceMovies} />
     <Row tittle="fetchDocumentaries" fetchURL={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
