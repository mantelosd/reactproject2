import React, { useState } from 'react';
import ReadMoreFeature from '../../components/read_more_feature/ReadMoreFeature';
import Infocard from '../../components/infocard/Infocard';
import Camera from '../../components/camera/Camera';
import './stage.css';
import x from '../../assets/white-close.svg';
import { stageData, blog01text, blog01text2, blog01text1, blog02text2, blog02text3, blog02text4, blog03text1, blog03text2, blog03text3, blog03text4, blog03text5, blog03text6, blog03text7, blog03text8, blog03text9, blog02, blog0101, blog0102, blog0202, blog0203, blog0204, blog0301, blog0302, blog0303, blog0304, blog0305, blog0306, blog0307, blog0308, blog0309, blog0401, blog0402, blog04text1, blog04text2, blog05text1, blog05text2, blog05text3, blog05text4, blog0501, blog0502, blog0503, blog0504 } from './imports';

const Stage = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isDialogOpen2, setIsDialogOpen2] = useState(false);
  const [isDialogOpen3, setIsDialogOpen3] = useState(false);
  const [isDialogOpen4, setIsDialogOpen4] = useState(false);
  const [isDialogOpen5, setIsDialogOpen5] = useState(false);
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [stream, setStream] = useState(null);

  const openCamera = async () => {
    const userStream = await navigator.mediaDevices.getUserMedia({
      video: { width: 1920, height: 1080 },
    });
    setStream(userStream);
    setIsCameraOpen(true);
  };

  const closeCamera = () => {
    if (stream) {
      stream.getTracks().forEach((track) => track.stop()); // Stop the camera stream
      setStream(null);
    }
    setIsCameraOpen(false);
  };
  // Function to open the dialog with specific content
  const openDialog = (stagenumber) => {
    if (stagenumber === 0) {
      setIsDialogOpen(true);
    } else if (stagenumber === 1) {
      setIsDialogOpen2(true);
    } else if (stagenumber === 2) {
      setIsDialogOpen3(true);
    } else if (stagenumber === 3) {
      setIsDialogOpen4(true);
    } else if (stagenumber === 4) {
      setIsDialogOpen5(true);
    }
  };
  // Function to close the dialog
  const closeDialog = () => {
    setIsDialogOpen(false);
    setIsDialogOpen2(false);
    setIsDialogOpen3(false);
    setIsDialogOpen4(false);
    closeCamera();
    setIsDialogOpen5(false);
  };

  return (
    <div className="reactp__stage section__padding" id="stage">
      <div className="reactp__stage-heading">
        <h1 className="gradient__text">Στάδια κατασκευής της <br />Ιστοσελίδας</h1>
      </div>
      <div className="reactp__stage-container">
        {stageData.map((item, index) => (
          <ReadMoreFeature title={item.title} subtitle={item.subtitle} text={item.text} openDialog={() => openDialog(index)} key={item.title + index} />
        ))}
      </div>
      {isDialogOpen && (
        <div className="dialog-overlay">
          <div className="dialog-content-open2">
            <button className="imgbutton" type="submit" onClick={closeDialog}>
              <img src={x} alt="Close" />
            </button>
            <h1>Στάδιο 0</h1>
            <Infocard imgUrl={blog0101} title="Βήμα 0" subtitle="Τι είναι η React" text={blog01text1} left />
            <Infocard imgUrl={blog0102} title="Βήμα 1" subtitle="Ιστορία" text={blog01text2} />
          </div>
        </div>
      )}
      {isDialogOpen2 && (
        <div className="dialog-overlay">
          <div className="dialog-content-open2">
            <button className="imgbutton" type="submit" onClick={closeDialog}>
              <img src={x} alt="Close" />
            </button>
            <h1>Στάδιο 1</h1>
            <Infocard imgUrl={blog02} title="Βήμα 0" subtitle="Λήψη της εφαρμογής VS CODE" text={blog01text} left />
            <Infocard imgUrl={blog0202} title="Βήμα 1" subtitle="Λήψη του Node.js" text={blog02text2} />
            <Infocard imgUrl={blog0203} title="Βήμα 2" subtitle="Ρύθμιση της εφαρμογής VS CODE" text={blog02text3} left />
            <Infocard imgUrl={blog0204} title="Βήμα 3" subtitle="Δημιουργία του App.js" text={blog02text4} />
          </div>
        </div>
      )}
      {isDialogOpen3 && (
        <div className="dialog-overlay">
          <div className="dialog-content-open2">
            <button className="imgbutton" type="submit" onClick={closeDialog}>
              <img src={x} alt="Close" />
            </button>
            <h1>Στάδιο 2</h1>
            <Infocard imgUrl={blog0301} title="Βήμα 0" subtitle="Assets-Components-Containers" text={blog03text1} left />
            <Infocard imgUrl={blog0302} title="Βήμα 1" subtitle="NavBar" text={blog03text2} />
            <Infocard imgUrl={blog0303} title="Βήμα 2" subtitle="Αρχική" text={blog03text3} left />
            <Infocard imgUrl={blog0304} title="Βήμα 3" subtitle="Τι είναι React" text={blog03text4} />
            <Infocard imgUrl={blog0305} title="Βήμα 4" subtitle="Ιστορία" text={blog03text5} left />
            <Infocard imgUrl={blog0306} title="Βήμα 5" subtitle="Πλεονεκτήματα React" text={blog03text6} />
            <Infocard imgUrl={blog0307} title="Βήμα 6" subtitle="Δημοτικότητα" text={blog03text7} left />
            <Infocard imgUrl={blog0308} title="Βήμα 7" subtitle="Στάδια Κατασκευής Ιστοσελίδας" text={blog03text8} />
            <Infocard imgUrl={blog0309} title="Βήμα 8" subtitle="Footer" text={blog03text9} left />
          </div>
        </div>
      )}
      {isDialogOpen4 && (
        <div className="dialog-overlay">
          <div className="dialog-content-open2">
            <button className="imgbutton" type="submit" onClick={closeDialog}>
              <img src={x} alt="Close" />
            </button>
            <h1>Στάδιο 3</h1>
            <Infocard imgUrl={blog0401} title="Βήμα 0" subtitle="Δημιουργία backend" text={blog04text1} left />
            <Infocard imgUrl={blog0402} title="Βήμα 1" subtitle="Δημιουργία frontend" text={blog04text2} />
          </div>
        </div>
      )}
      {isDialogOpen5 && (
        <div className="dialog-overlay">
          <div className="dialog-content-open2">
            <button className="imgbutton" type="submit" onClick={closeDialog}>
              <img src={x} alt="Close" />
            </button>
            <h1>Στάδιο 4</h1>
            <button className="camerabutton1" type="submit" onClick={openCamera}>Open Camera</button>
            {isCameraOpen && (
              <div>
                <Camera userStream={stream} />
                <div>
                  <button className="camerabutton1" type="submit" onClick={closeCamera}>Close Camera</button>
                </div>
              </div>
            )}
            <Infocard imgUrl={blog0501} title="Βήμα 0" subtitle="Δημιουργία του Camera component" text={blog05text1} left />
            <Infocard imgUrl={blog0502} title="Βήμα 1" subtitle="Άνοιγμα κάμερας" text={blog05text2} />
            <Infocard imgUrl={blog0503} title="Βήμα 2" subtitle="Λήψη φωτογραφίας" text={blog05text3} left />
            <Infocard imgUrl={blog0504} title="Βήμα 1" subtitle="Κατέβασμα φωτογραφίας" text={blog05text4} />
          </div>
        </div>
      )}
    </div>
  );
};
export default Stage;
