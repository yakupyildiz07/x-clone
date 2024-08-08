import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { Explore } from "./components/Keşfet/Explore";
import { Notifications } from "./components/Bildirimler/Notifications";
import { Messages } from "./components/Mesajlar/Messages";
import { Grok } from "./components/Grok/Grok";
import { Saved } from "./components/Yerİşareti/Saved";
import { Profile } from "./components/Profil/Profile";
import { Communities } from "./components/Topluluklar/Communities";
import { Premium } from "./components/Premium/Premium";
import Onaylı from "./components/onaylı";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/notifications" element={<Notifications/>}/>
        <Route path="/messages" element={<Messages/>}/>
        <Route path="/grok" element={<Grok />} />
        <Route path="/bookmarks" element={<Saved />} />
        <Route path="/communities" element={<Communities />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/premium" element={<Premium />} />
        </Routes>
    </div>
  );
}

export default App;
