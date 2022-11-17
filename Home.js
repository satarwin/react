// import React, { Component } from "react";
//import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";


import App from "./Admin/CreateOwner";
import LogAdmin  from "./Admin/LoginAdmin";
import MainAdmin  from "./Admin/MainAdmin";
import CreateGuard from "./Admin/CreateGuard";
import Report_Main from "./Admin/Report_Main"

import Logform from "./LoginOwner/Logform"
import MainOwner from "./LoginOwner/MainOwner"
import DataOwner from "./LoginOwner/DataOwner"
import ReportInOut from "./LoginOwner/ReportInOut"
import ListAlertVisit from "./LoginOwner/ListAlertVisit"

import Page from "./ReOutsider/Page"
import PageOld from "./ReOutsider/PageOld";
import PageNew from "./ReOutsider/PageNew";
import PageMain from "./ReOutsider/PageMain"


import Logohead from "./Comclass/Logohead"



function Home() {
  
    return (
      <div className="app">
     <Logohead/>
     <div>
         <Routes> 

         //ส่วนของ Admin
          
           <Route path="/" element={<LogAdmin />} exact />
           <Route path='/index' element={<MainAdmin />} />
          <Route path='/createowner' element={<App />} />
          <Route path='/createguard' element={<CreateGuard />} />
          <Route path='/reportmain' element={<Report_Main />} />

          //ส่วนของ Owner

          <Route path='/loginowner' element={<Logform />} />
          <Route path='/mainowner' element={<MainOwner />} />
          <Route path='/alertvisit' element={<ListAlertVisit />} />
          <Route path='/dataowner' element={<DataOwner />} />
          <Route path='/reprotinout' element={<ReportInOut />} />

          //ส่วนของ Outsider
          <Route path='/pagechooc' element={<Page/>} />
          <Route path='/olduser' element={<PageOld/>} />
          <Route path='/newuser' element={<PageNew/>} />
          <Route path='/main_outsider' element={<PageMain/>} />




          {/* <Route path='/logadmin' element={<LogAdmin />} /> */}
         
          {/* <Route path='/create' element={<UserCreate />} />
          <Route path='/update/:id' element={<UserUpdate />} />
          <Route path='/detail/:id' element={<Detail />} /> */}
        </Routes>
</div>
     
      </div>
    );
  }


export default Home;
