import "./App.css";
import {SchedulerContextProvider} from "./contexts";
import Calendar from "./components/Calendar";

function App() {
  return (
    <SchedulerContextProvider>
      <div className="app">
        <Calendar />
      </div>
    </SchedulerContextProvider>
  );
}

export default App;
