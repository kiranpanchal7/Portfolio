
import './App.css';
import  Header  from './Header'
import Content from './Content'

  import { ToastContainer } from 'react-toastify';

export default function App() {
  return (
    <div className='bg-indigo-100 h-screen flex justify-between flex-col font-sans relative'>
      <div className='headerDiv mb-4'>
        <Header content=""></Header>
      </div>
      <div className='contentDiv overflow-auto flex-1 p-4'>
        <Content></Content>
      </div>
      <ToastContainer />
    </div>
  );
}


