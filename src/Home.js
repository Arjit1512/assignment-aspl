import React from 'react'
import firstPage from './components/firstPage.jsx';
import secondPage from './components/secondPage.jsx';
import thirdPage from './components/thirdPage.jsx'
import fourthPage from './components/fourthPage.jsx';
import fifthPage from './components/fifthPage.jsx';
import sixthpage from './components/sixthpage.jsx';
import seventhPage from './components/seventhPage.jsx';
import eighthPage from './components/eighthPage.jsx';
import ninthPage from './components/ninthPage.jsx';

const Home = () => {
  return (
    <div>
     <div>{firstPage()}</div>
     <div>{secondPage()}</div>
     <div>{thirdPage()}</div>
     <div>{fourthPage()}</div>
     <div>{fifthPage()}</div>
     <div>{sixthpage()}</div>
     <div>{seventhPage()}</div>
     <div>{eighthPage()}</div>
     <div>{ninthPage()}</div>
    </div>
)};  
export default Home