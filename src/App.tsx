import { BrowserRouter, Route, Routes } from "react-router-dom";
import Categorization from "./pages/categorization";
import Start from "./pages/start";
import UserInformation from "./pages/user/user-information";
import UserSuccess from "./pages/user/user-success"
import OwnerInformation from "./pages/owner/owner-information";
import OwnerSuccess from "./pages/owner/owner-success";

function App() {
    return (
        <div className="root-layout">
                <BrowserRouter>
                    <div className="content-wrap">
                        <Routes>
                            <Route path="/" element={<Start />} />
                            <Route path="/categorization" element={<Categorization />} />
                            <Route path="/user-information" element={<UserInformation />} />
                            <Route path="/user-success" element={<UserSuccess />} />
                            <Route path="/owner-information" element={<OwnerInformation />} />
                            <Route path="/owner-success" element={<OwnerSuccess />} />
                        </Routes>
                    </div>
                </BrowserRouter>
            </div>
    )
}

export default App;