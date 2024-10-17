import { BrowserRouter as Router, Route, Routes, BrowserRouter } from "react-router-dom";

import LandingPage from "./components/LandingPage";
import DepressionTestPage from "./components/DepressionTestPage";
import PostpartumDepressionTestPage from "./components/PostpartumDepressionTestPage";
import AnxietyTestPage from "./components/AnxietyTestPage";
import ADHDTestPage from "./components/ADHDTestPage";
import BipolarTestPage from "./components/BipolarTestPage";
import PsychosisSchizophreniaTestPage from "./components/PsychosisSchizophreniaTestPage";
import PTSDTestPage from "./components/PTSDTestPage";
import EatingDisorderTestPage from "./components/EatingDisorderTestPage";
import AddictionTestPage from "./components/AddictionTestPage";

function App() {
  return (
    <div className="App">
      <Router basename="/mental-healthcare-tester">
         <Routes>
            <Route  path="/" element={ <LandingPage />} />
            <Route  path="/mental-healthcare-tester/depression" element={ <DepressionTestPage />} />
            <Route  path="/mental-healthcare-tester/postpartum" element={ <PostpartumDepressionTestPage />} />
            <Route  path="/mental-healthcare-tester/anxiety" element={ <AnxietyTestPage />} />
            <Route  path="/mental-healthcare-tester/adhd" element={ <ADHDTestPage />} />
            <Route  path="/mental-healthcare-tester/bipolar" element={ <BipolarTestPage />} />
            <Route  path="/mental-healthcare-tester/psychosis" element={ <PsychosisSchizophreniaTestPage />} />
            <Route  path="/mental-healthcare-tester/ptsd" element={ <PTSDTestPage />} />
            <Route  path="/mental-healthcare-tester/eating" element={ <EatingDisorderTestPage />} />
            <Route  path="/mental-healthcare-tester/addition" element={ <AddictionTestPage />} />
         </Routes>
     </Router>
    </div>
  );
}

export default App;
