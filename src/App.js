import Header from "./components/Header";
import Logs from "./components/Logs";
import SideBar from "./components/SideBar";
import Attendance from "./components/mySpace/Attendance";

function App() {
  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row">
        <SideBar />
        <div className="md:w-3/4 lg:w-4/5 p-4 md:p-10">
          <div className="mx-auto">
            <Header />
          </div>
          <div className="space-y-5">
            <Attendance />
            <Logs />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
