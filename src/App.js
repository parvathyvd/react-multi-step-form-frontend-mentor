import PersonalInfo from "./components/PersonalInfo";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useGlobalContext } from "./context/PlanContext";
import SelectPlan from "./components/SelectPlan";
import Addons from "./components/Addons";
import Finish from "./components/Finish";

function App() {
  const { selected } = useGlobalContext();
  return (
    <>
      <Header />
      <main className="main-container">
        {selected === 1 && <PersonalInfo />}
        {selected === 2 && <SelectPlan />}
        {selected === 3 && <Addons />}
        {selected === 4 && <Finish />}
      </main>
      <Footer />
    </>
  );
}

export default App;
