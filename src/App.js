import './App.css';
import LeadPage from './component/LeadPage';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import InfoPage from './component/pages/Info';
import UserRequestPage from './component/pages/UserRequestPage';
import HomePage from './component/HomePage';
import BusinessPage from './component/BusinessPage';
import InterviewForm from './component/InterviewForm';
import RadioButtons from './component/RadioButton';
import Form from './component/form';

function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route exact path="/q" element={<LeadPage />}></Route>
          <Route exact path="/q/info" element={<InfoPage />}></Route>
          <Route exact path="/u" element={<UserRequestPage />}></Route>
          <Route exact path="/businessPage/:searchdata/:latitude/:longitude" element={<BusinessPage />}></Route>
          <Route exact path="/" element={<HomePage />}></Route>
          <Route exact path="/button" element={<RadioButtons />}></Route>
          <Route exact path="/jobs" element={<InterviewForm />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
