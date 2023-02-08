import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Header from "./components/Header";
import Home from "./pages/Home";
import TeamRegistration from "./pages/TeamRegistration";
import PlayerRegistration from "./pages/PlayerRegistration";
import PlayersList from "./pages/PlayersList";
import PlayerDetails from "./pages/PlayerDetails";
// import Erro404 from './Components/Error/404';
// import Main from './Components/Main';
// import Home from './Components/Home/home.jsx';
// import Message from './Components/Message/message';
// import Geo from './Components/Geo/geo';
// import LogWindow from './Components/Log Window/LogWindow.jsx';
// import CallRecorder from './Components/LocalRecoder/LocalRecorder.jsx';
// import Video from './Components/video';

const AppRoutes = () => (
  <App>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path="Home" element={<Home />} />
          <Route path="TeamRegistration" element={<TeamRegistration />} />
          <Route path="PlayerRegistration" element={<PlayerRegistration />} />
          <Route path="PlayersList" element={<PlayersList />} />
          <Route path="PlayersDetails" element={<PlayerDetails />} />
        </Route>
        {/* <Route path="/login" component={Login} />
			<Route path="/main" component={Main} />
			<Route path="/home" component={Home} />
			<Route path="/message" component={Message} />
			<Route path="/geo" component={Geo} />
			<Route path="/geo1" component={Geo} />
			<Route path="/log" component={LogWindow} />
			<Route path="/LocalRecorder" component={CallRecorder} />
			<Route path="/video" component={Video} />
			<Route component={Erro404} /> */}
      </Routes>
    </BrowserRouter>
  </App>
);

export default AppRoutes;
