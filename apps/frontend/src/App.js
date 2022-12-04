import logo from './logo.svg';
import { useDispatch } from "react-redux";
import News from "./views/news";
import './App.css';
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchPublicationByDate());
    dispatch(fetchPublicationArchivedByDate());
  },[]);

  return (
    <News />
  );
}

export default App;
