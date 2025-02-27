import React from 'react';
import Infocard from '../../components/infocard/Infocard';
import { blog02, blog03, blog01text, blog02text, blog03text, blog04text } from './imports';
import './infoblog.css';

const Infoblog = () => (
  <div className="react__project section__padding" id="infoblog">
    <div className="react__project-heading">
      <h1 className="gradient__text">Βήματα για την δημιουργία <br /> site με την React</h1>
    </div>
    <div className="react__project-container">
      <div className="react__project-container_groupB">
        <Infocard imgUrl={blog02} title="Βήμα 1" subtitle="Λήψη της εφαρμογής VS CODE" text={blog01text} left />
        <Infocard imgUrl={blog03} title="Βήμα 2" subtitle="Ρύθμιση της εφαρμογής VS CODE" text={blog02text} />
        <Infocard imgUrl={blog02} title="Βήμα 3" subtitle="Δημιουργία του App.js" text={blog03text} left />
        <Infocard imgUrl={blog03} title="Βήμα 4" subtitle="Δημιουργία Components" text={blog04text} />
        <Infocard imgUrl={blog02} title="Βήμα 5" subtitle="Δημιουργία Containers" text={blog01text} left />
        <Infocard imgUrl={blog03} title="Βήμα 6" subtitle="Ανάλυση του κάθε component" text={blog02text} />
        <Infocard imgUrl={blog02} title="Βήμα 7" subtitle="Ενσωμάτωση των components στο App.js" text={blog01text} left />
      </div>
    </div>
  </div>
);

export default Infoblog;
