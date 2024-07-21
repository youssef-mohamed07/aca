import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import Acadimy from "./pages/Acadimy";
import Player from "./pages/YouthPlayer";
import TrainingSessions from "./pages/TrainingSessions";
import NavBar from "./components/SideBar/NavBar";
import { QueryClient, QueryClientProvider } from "react-query";
import YouthPlayer from "./pages/YouthPlayer";
import ProPlayer from "./pages/ProPlayer";
import UdemyCoursePage from "./pages/courses";
import YouthPlayers from "./components/AcademyPage/YouthPlayers";
import ProPlayers from "./components/AcademyPage/ProPlayers";
import Login from "./Login";
import Registeration from "./Registeration";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  const queryClient = new QueryClient({});

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/home":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <QueryClientProvider client={queryClient}>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/players" element={<Acadimy />} />
        <Route path="/players/youth" element={<YouthPlayers/>} />
        <Route path="/players/youth/:id" element={<YouthPlayer />} />
        <Route path="/players/pro/:id" element={<ProPlayer />} />
        <Route path="/players/pro" element={<ProPlayers />} />
        <Route path="/training" element={<TrainingSessions />} />
        <Route path="/training/:id" element={<UdemyCoursePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registeration" element={<Registeration />} />
      </Routes>
    </QueryClientProvider>
  );
}
export default App;
