import React from 'react';
import GalleryWidget from './GalleryWidget';
import TabbedWidget from './TabbedWidget';
import './MainContent.css';


function MainContent() {
  return (
    <div className="main-content bg-slate-900	p-5 divide-y divide-slate-700 m-0">
      <div className="tabbed-widget-container bg-slate-800 shadow-2xl p-4 rounded-3xl border-none	">
        <TabbedWidget />
      </div>
      <hr className='mt-8 bg-slate-700 shadow-2xl mx-14 border-4	'/>
      <div className="gallery-widget-container bg-slate-800 shadow-2xl	p-4 rounded-3xl border-none	mt-10">
        <GalleryWidget />
      </div>
      <hr className='mt-8 bg-slate-700 shadow-2xl mx-14 border-4	'/>
    </div>
  );
}

export default MainContent;
