import React from 'react';
import DownloadArea from './DownloadArea';
import FindCourse from './FindCourse';
import OpeningHours from './OpeningHours';

const Home = () => {
    return (
      <div className="container row  mb-1">
        <div className="col-8">
          <div className="d-flex ">
            <DownloadArea></DownloadArea>
            <OpeningHours></OpeningHours>
          </div>
        </div>
        <div className="col-4 ">
          <FindCourse></FindCourse>
        </div>
      </div>
    );
};

export default Home;