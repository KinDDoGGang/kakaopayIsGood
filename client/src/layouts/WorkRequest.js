import React, {useState, useEffect} from 'react';

import './WorkRequest.css';
import 'boxicons/css/boxicons.min.css';
import AppLayout from '../layouts/AppLayout';
import{useLocation} from 'react-router-dom';
import {callApi, callAuthApi} from '../utils/utils';
/**
 * 사내 업무요청 화면 좌측 사이드 바 노출되도록 
 */


export default function WorkRequest() {
    const [TemplateList, setTemplateList] = useState([]);

    const selectTemplateList = async () => {
        const token = localStorage.getItem('login-token') || '';
        const result = await callAuthApi("http://127.0.0.1:8080/api/templates", "GET", {}, token);
        setTemplateList(result);
    }

    useEffect(  () => {
         selectTemplateList();
    },[]);
    // const location = useLocation();
    // console.log('location in header', location)
    return(
       <AppLayout 
            templateList={TemplateList}
       /> 
    )
}