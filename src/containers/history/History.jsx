import React from 'react';
import './history.css';

const historyText = 'Η React δημιουργήθηκε από τον Jordan Walke, μηχανικό λογισμικού στη Meta , ο οποίος '
+ 'κυκλοφόρησε ένα πρώιμο πρωτότυπο του React που ονομάζεται "FaxJS". Επηρεάστηκε από το '
+ 'XHP, μια βιβλιοθήκη στοιχείων HTML για την PHP . Αναπτύχθηκε για πρώτη φορά στο News'
+ 'Feed του Facebook το 2011 και αργότερα στο Instagram το 2012. Ήταν ανοιχτού κώδικα στο '
+ 'JSConf US τον Μάιο του 2013.';

const History = () => (
  <div className="reactp__history section__padding react_image" id="history">
    <div className="reactp__history-content">
      <h1 className="gradient__text">Η γέννηση της React</h1>
      <p>{historyText}</p>
    </div>
  </div>
);

export default History;
