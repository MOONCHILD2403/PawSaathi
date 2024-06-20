import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import{
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Protected from './components/Protected';
import Login from './pages/Signup';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Signup2 from './pages/Signup2';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element = {<App />}>
    <Route path="signup2" element = {<Signup2 />} /> /signup2
    <Route path="signup" element = {<Signup />} /> /signup
    <Route path='login' element = {<Login />} /> /login
    <Route path="/" element = {<Protected />} /> 
    <Route path="/" index element = {<Home />} /> 

    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router = {router}/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

