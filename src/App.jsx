import './App.css';
import { Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Overview from './pages/Overview';
import AddUsers from './pages/AddUsers';
function App() {
  return (
    <>
      <div className='flex h-screen  text-black overflow-hidden'>
        <div className='fixed inset-0 z-0'>
          <div className='absolute inset-0' />
          <div className='absolute inset-0 backdrop-blur-sm' />
        </div>
        <Sidebar />
        <Routes>
          <Route path='/' element={<Overview />} />
          <Route path='/addusers' element={<AddUsers />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
