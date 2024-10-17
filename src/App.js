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
      <BrowserRouter basename="/mental-healthcare-tester/">
         <Routes>
            <Route  path="/" element={ <LandingPage />} />
            <Route  path="/depression" element={ <DepressionTestPage />} />
            <Route  path="/postpartum" element={ <PostpartumDepressionTestPage />} />
            <Route  path="/anxiety" element={ <AnxietyTestPage />} />
            <Route  path="/adhd" element={ <ADHDTestPage />} />
            <Route  path="/bipolar" element={ <BipolarTestPage />} />
            <Route  path="/psychosis" element={ <PsychosisSchizophreniaTestPage />} />
            <Route  path="/ptsd" element={ <PTSDTestPage />} />
            <Route  path="/eating" element={ <EatingDisorderTestPage />} />
            <Route  path="/addition" element={ <AddictionTestPage />} />
         </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
