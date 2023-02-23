import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home/Home';

import About from './pages/About/About';
import AboutWho from './pages/About/AboutWho';
import OurValues from './pages/About/OurValues';
import Contacts from './pages/About/Contacts';


import Information from './pages/Main/Information/Information';

import Menu from './pages/Main/Menu';
import Job from './pages/Main/Vacancy/Job';
import ReactNative from './pages//Main/Vacancy/ReactNative';
import WordPress from './pages//Main/Vacancy/WordPress';
import RubyonRails from './pages//Main/Vacancy/RubyonRails';
import HR from './pages/Main/Vacancy/HR';
import Sales from './pages/Main/Vacancy/Sales';

import Test from './pages/Main/Test/Test';
import TestRN from './pages/Main/Test/TestRN';
import TestWP from './pages/Main/Test/TestWP';

import Candidates from './pages/Main/Candidates/Candidates';
import All from './pages/Main/Candidates/All';
import Layout from './components/menu/Layout';


import Employed from './pages/Main/Candidates/Employed';
import SalesInterview from './pages/Main/Interview/SalesInterview';
import Interview from './pages/Main/Interview/Interview';
import Common from './pages/Main/Interview/Common';
import Documents from './pages/Main/Documents/Documents';
import NDA from './pages/Main/Documents/NDA';
import Diya from './pages/Main/Documents/Diya';
import Vchasno from './pages/Main/Documents/Vchasno';
import PBank from './pages/Main/Documents/PBank';
import DocumentGroup from './pages/Main/Documents/DocumentGroup';

import Knowledge from './pages/Main/Knowledge/Knowledge';
import Resourses from './pages/Main/Knowledge/Resourses';
import ResoursesEng from './pages/Main/Knowledge/ResoursesEng';
import ResoursesSales from './pages/Main/Knowledge/ResoursesSales';
import ResoursesHR from './pages/Main/Knowledge/ResoursesHR';

import Other from './pages/Main/Other/Other';
import Question from './pages/Main/Interview/Question';

import Message from './pages/Main/Message/Message';
import Messages from './pages/Main/Message/Messages';


const App = () => {
  return (
      <>
         <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="menu" element={<Menu />} />
            <Route path="information" element={<Information />} />
            <Route path="job" element={<Job />} />
            <Route path="message" element={<Message />} />
            <Route path="messages" element={<Messages />} />

            <Route path="documents" element={<Documents />} />
            <Route path="NDA" element={<NDA />} />
            <Route path="diya" element={<Diya />} />
            <Route path="vchasno" element={<Vchasno />} />
            <Route path="pbank" element={<PBank />} />
            <Route path="documentGroup" element={<DocumentGroup />} />
            <Route path="interview" element={<Interview />} />
            <Route path="sales-interview" element={<SalesInterview />} />
            <Route path="common" element={<Common />} />
            <Route path="question" element={<Question />} />
            <Route path="test" element={<Test />} />
            <Route path="testRN" element={<TestRN />} />
            <Route path="testWP" element={<TestWP />} />
            <Route path="rn" element={<ReactNative />} />
            <Route path="wp" element={<WordPress />} />
            <Route path="ror" element={<RubyonRails />} />
            <Route path="sales" element={<Sales />} />
            <Route path="candidates" element={<Candidates />} />
            <Route path="all" element={<All />} />
            <Route path="hr" element={<HR />} />
            <Route path="knowledge" element={<Knowledge />} />
            <Route path="resourses" element={<Resourses />} />
            <Route path="resoursesHR" element={<ResoursesHR />} />
            <Route path="resoursesEng" element={<ResoursesEng />} />
            <Route path="resoursesSales" element={<ResoursesSales />} />

            <Route path="other" element={<Other />} />
            <Route path="employed" element={<Employed />} />
            <Route path="who-we-are" element={<AboutWho />} />
            <Route path="our-values" element={<OurValues />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="*" element={<p>Not found!</p>} />
          </Route>
        </Routes>
      </>
  );
};

export default App;
