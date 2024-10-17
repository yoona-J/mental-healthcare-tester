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
import AddictionTestPage from "./components/AddictiontestPage/AddictionTestPage";
import AlcoholTestPage from "./components/AddictiontestPage/AlcoholTestPage";
import DrugTestPage from "./components/AddictiontestPage/DrugTestPage";
import AnotherTestPage from "./components/AddictiontestPage/AnotherTestPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
         <Routes>
            <Route exact path="/" element={ <LandingPage />} />
            <Route exact path="./depression" element={ <DepressionTestPage />} />
            <Route exact path="./postpartum" element={ <PostpartumDepressionTestPage />} />
            <Route exact path="./anxiety" element={ <AnxietyTestPage />} />
            <Route exact path="./adhd" element={ <ADHDTestPage />} />
            <Route exact path="./bipolar" element={ <BipolarTestPage />} />
            <Route exact path="./psychosis" element={ <PsychosisSchizophreniaTestPage />} />
            <Route exact path="./ptsd" element={ <PTSDTestPage />} />
            <Route exact path="./eating" element={ <EatingDisorderTestPage />} />
            <Route exact path="./addition" element={ <AddictionTestPage />} />
            <Route exact path="./addition/alcohol" element={ <AlcoholTestPage />} />
            <Route exact path="./addition/drug" element={ <DrugTestPage />} />
            <Route exact path="./addition/another" element={ <AnotherTestPage />} />
         </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
