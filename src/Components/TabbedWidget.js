import React, { useState } from 'react';
import '../Styles/TabbedWidget.css';

function TabbedWidget() {
  const [activeTab, setActiveTab] = useState('about');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="tabbed-widget text-gray-400	p-2 border-none">
      <div className="tabs bg-black rounded-lg flex items-center p-2 border-none	">
        <button
          className={`${
            activeTab === 'about' ? 'bg-slate-900' : 'bg-black'
          } text-white px-4 py-4 rounded-xl shadow-2xl	`}
          onClick={() => handleTabClick('about')}
        >
          About Me
        </button>
        <button
          className={`${
            activeTab === 'experience' ? 'bg-slate-900' : 'bg-black'
          } text-white px-4 py-4 rounded-xl shadow-2xl	`}
          onClick={() => handleTabClick('experience')}
        >
          Experience
        </button>
        <button
          className={`${
            activeTab === 'recommended' ? 'bg-slate-900' : 'bg-black'
          } text-white px-4 py-4 rounded-xl shadow-2xl	`}
          onClick={() => handleTabClick('recommended')}
        >
          Recommended
        </button>
      </div>
      <div className="tab-content">
        {activeTab === 'about' && (
          <div>
            <h1>About Me</h1>
            <p>
              Hi, I'm Jane Doe, a software developer with a passion for creating dynamic and user-friendly web applications. I have a strong background in front-end technologies like React, HTML, CSS, and JavaScript. I enjoy learning new technologies and staying up-to-date with industry trends.
            </p>
            <p>
              When I'm not coding, you can find me exploring the outdoors, reading science fiction novels, or experimenting with new recipes in the kitchen.
            </p>
          </div>
        )}
        {activeTab === 'experience' && (
          <div>
            <h1>Experience</h1>
            <ul>
              <li>
                <strong>Software Engineer at TechCorp</strong> (2020 - Present)
                <p>
                  Developed and maintained web applications using React and Node.js. Collaborated with cross-functional teams to deliver high-quality software solutions.
                </p>
              </li>
              <li>
                <strong>Junior Developer at CodeWorks</strong> (2018 - 2020)
                <p>
                  Assisted in building responsive web applications using HTML, CSS, and JavaScript. Worked closely with senior developers to learn best practices and improve coding skills.
                </p>
              </li>
            </ul>
          </div>
        )}
        {activeTab === 'recommended' && (
          <div>
            <h1>Recommended</h1>
            <p>
              Here are some resources that I recommend for anyone looking to improve their web development skills:
            </p>
            <ul>
              <li>
                <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">React Documentation</a> - Official React documentation for understanding React concepts and APIs.
              </li>
              <li>
                <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer">MDN Web Docs</a> - Comprehensive resources for JavaScript and web development.
              </li>
              <li>
                <a href="https://www.freecodecamp.org/" target="_blank" rel="noopener noreferrer">FreeCodeCamp</a> - Free coding tutorials and challenges for learning web development.
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default TabbedWidget;
