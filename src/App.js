import  'bootstrap/dist/css/bootstrap.min.css'
import {useState} from 'react'
// import './App.scss'
import { imgViajes, imgProfile } from './assets/illustrations';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav'
import './App.scss'
import Search from './components/Search/Search';
import Footer from './components/Footer/Footer';
import Gallery from './components/Gallery/Gallery';

function App() {

  const [items, setItems] = useState([
    {id:1, name:'Sam Jerremy', description:'#dayAtTheBeach', imgHead:{imgViajes}, imgBody:{imgProfile}},
    {id:2, name:'Sam Jerremy', description:'#dayAtTheBeach', imgHead:{imgViajes}, imgBody:{imgProfile}},
    {id:3, name:'Sam Jerremy', description:'#dayAtTheBeach', imgHead:{imgViajes}, imgBody:{imgProfile}},
    {id:4, name:'Sam Jerremy', description:'#dayAtTheBeach', imgHead:{imgViajes}, imgBody:{imgProfile}},
    {id:5, name:'Sam Jerremy', description:'#dayAtTheBeach', imgHead:{imgViajes}, imgBody:{imgProfile}},
    {id:6, name:'Sam Jerremy', description:'#dayAtTheBeach', imgHead:{imgViajes}, imgBody:{imgProfile}},
  ])

  return (
    <div className="App">
      <Nav />
      <Header />
      <Search />
      <Gallery items={items} />
      <Footer />
    </div>
  );
}

export default App;
