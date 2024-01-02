import React from 'react'
import { userInformationAtom } from '../../../states/common';
import Sidebar from '../../../components/sidebar/Sidebar';
import Navbar from '../../../components/navbar/Navbar';
import TourList from './tourList';
import { useRecoilState } from 'recoil';

const Index = () => {

    const [count, setCount] = useRecoilState(userInformationAtom);

    return (
      <div className="list">
        <Sidebar/>
        <div className="listContainer">
          <Navbar/>
          <TourList/>
        </div>
      </div>
    )
  }
  
  export default Index