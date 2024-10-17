import { HashRouter as Router, Route, Routes } from "react-router-dom";

import LandingPage from "./components/LandingPage";
import DepressionTestPage from "./components/DepressionTestPage";
import PostpartumDepressionTestPage from "./components/PostpartumDepressionTestPage";
import AnxietyTestPage from "./components/AnxietyTestPage";
import ADHDTestPage from "./components/ADHDTestPage";
import BipolarTestPage from "./components/BipolarTestPage";
import PsychosisSchizophreniaTestPage from "./components/PsychosisSchizophreniaTestPage";
import PTSDTestPage from "./components/PTSDTestPage";
import EatingDisorderTestPage from "./components/EatingDisorderTestPage";
import AddictionTestPage from "./components/AddictiontestPage/AddictionTestPage";
import AlcoholTestPage from "./components/AddictiontestPage/AlcoholTestPage";
import DrugTestPage from "./components/AddictiontestPage/DrugTestPage";
import AnotherTestPage from "./components/AddictiontestPage/AnotherTestPage";

function App() {
  return (
    <div className="App">
      <Router>
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
            <Route  path="/addition/alcohol" element={ <AlcoholTestPage />} />
            <Route  path="/addition/drug" element={ <DrugTestPage />} />
            <Route  path="/addition/another" element={ <AnotherTestPage />} />
         </Routes>
     </Router>
    </div>
  );
}

export default App;
