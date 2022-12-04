import React from 'react';

import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

export default function  AppLayout({ templateList }) {
    console.log('location in layout', templateList);

    return <div style={{
        padding: '50px 0px 0px 370px'
    }}>
        <Sidebar />
        <Outlet 
            context={{ templateList: templateList }}
        />
    </div>;
};