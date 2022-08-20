import './App.css';
import Link from "./components/Link";
import UserAvatar from './components/UserAvatar';

const NAME = "Claire";

function App() {
  const Links = [{ link: "https://tiktok.com", title: "My fav app" }, { link: "https://clairehh.com", title: "My website" }]
  return (
    <div className="App">
      <header id="stack" className="App-header">
        {NAME}'s LinkTree
        <UserAvatar alt={`Avatar for ${NAME}`} src='' />
      </header>
      <div id="stack">
        {Links.map(i => (
          <Link link={i.link} title={i.title} />
        ))}
      </div>
    </div>
  );
}

export default App;
