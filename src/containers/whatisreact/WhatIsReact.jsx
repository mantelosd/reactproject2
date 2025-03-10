import React, { useState } from 'react';
/* import Feature from '../../components/feature/Feature'; */
import ReadMoreFeature from '../../components/read_more_feature/ReadMoreFeature';
import './whatisreact.css';
import x from '../../assets/white-close.svg';
import { monodromhddText, popupmonodromhddText, componentText, popupcomponentText, whatIsReactText, popupWhatIsReact, jsxText, popupjsxText } from './imports';

const WhatIsReact = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogContent, setDialogContent] = useState('');

  // Function to open the dialog with specific content
  const openDialog = (content) => {
    setDialogContent(content);
    setIsDialogOpen(true);
  };

  // Function to close the dialog
  const closeDialog = () => {
    setIsDialogOpen(false);
    setDialogContent('');
  };

  return (
    <div className="react_project_whatisreact section__margin" id="wir">
      <div className="react_project_whatisreact-feature">
        <ReadMoreFeature title="Τι είναι η React" text={whatIsReactText} openDialog={() => openDialog(popupWhatIsReact)} />
      </div>
      <div className="react_project_whatisreact-heading">
        <h1 className="gradient__text">Γιατί η γλώσσα React είναι τόσο δημοφιλής?</h1>
        <a href="https://react.dev/">Εξερεύνησε την React</a>
      </div>
      <div className="react_project_whatisreact-container">
        <ReadMoreFeature title="Components" text={componentText} openDialog={() => openDialog(popupcomponentText)} />
        <ReadMoreFeature title="Jsx" text={jsxText} openDialog={() => openDialog(popupjsxText)} />
        <ReadMoreFeature title="Dom" text={monodromhddText} openDialog={() => openDialog(popupmonodromhddText)} />
      </div>

      {isDialogOpen && (
        <div className="dialog-overlay">
          <div className="dialog-content-open">
            <button type="submit" onClick={closeDialog}>
              <img src={x} alt="Close" />
            </button>
            <p>{dialogContent}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default WhatIsReact;
