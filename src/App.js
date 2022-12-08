import PersonalInfo from "./components/PersonalInfo";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useGlobalContext } from "./context/PlanContext";
import SelectPlan from "./components/SelectPlan";
import Addons from "./components/Addons";
import Finish from "./components/Finish";
import ThankYou from "./components/ThankYou";

function App() {
  const { selected } = useGlobalContext();
  return (
    <div className="container">
      <Header />
      <main className="main-container">
        {selected === 1 && <PersonalInfo />}
        {selected === 2 && <SelectPlan />}
        {selected === 3 && <Addons />}
        {selected === 4 && <Finish />}
        {selected === 5 && <ThankYou />}
      </main>
      <Footer />
    </div>
  );
}

export default App;
