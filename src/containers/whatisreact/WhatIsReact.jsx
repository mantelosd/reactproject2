import React, { useState } from 'react';
/* import Feature from '../../components/feature/Feature'; */
import ReadMoreFeature from '../../components/read_more_feature/ReadMoreFeature';
import './whatisreact.css';
import x from '../../assets/white-close.svg';

const whatIsReactText = 'Η React είναι μια βιβλιοθήκη JavaScript ανοιχτού κώδικα που χρησιμοποιείται για τη'
  + 'δημιουργία στοιχείων διεπαφής χρήστη (UI) σε εφαρμογές μιας σελίδας. Αρχικά '
  + 'δημιουργήθηκε από έναν μηχανικό λογισμικού στο Facebook για να βελτιστοποιήσει την '
  + 'εφαρμογή της εταιρείας, να βελτιώσει την απόδοσή της και να απλοποιήσει τη '
  + 'συντήρηση του κώδικα...';
const popupWhatIsReact = 'Η React είναι μια βιβλιοθήκη JavaScript ανοιχτού κώδικα που χρησιμοποιείται για τη '
  + 'δημιουργία στοιχείων διεπαφής χρήστη (UI) σε εφαρμογές μιας σελίδας. Αρχικά '
  + 'δημιουργήθηκε από έναν μηχανικό λογισμικού στο Facebook για να βελτιστοποιήσει την '
  + 'εφαρμογή της εταιρείας, να βελτιώσει την απόδοσή της και να απλοποιήσει τη '
  + 'συντήρηση του κώδικα. Η React χρησιμοποιήθηκε για πρώτη φορά στο News Feed του '
  + 'Facebook το 2011 και στη συνέχεια προστέθηκε στο Instagram αφού το Facebook '
  + 'αγόρασε την εφαρμογή το 2012. Κυκλοφόρησε στο κοινό με άδεια ανοιχτού κώδικα μόλις '
  + 'ένα χρόνο αργότερα το 2013 και έκτοτε κερδίζει σταθερά δημοτικότητα. Η React είναι '
  + 'αυτή τη στιγμή η πιο ευρέως χρησιμοποιούμενη βιβλιοθήκη κώδικα μεταξύ των'
  + 'προγραμματιστών Ιστού, με περισσότερο από το 40% των ερωτηθέντων από το Stack'
  + 'Overflow να αναφέρουν εκτεταμένη χρήση κατά το παρελθόν έτος.';

const componentText = 'Τα components είναι τα βασικά δομικά στοιχεία της React. Το UI κάθε εφαρμογής που έχει '
  + 'δημιουργηθεί με τη React μπορεί να αναλυθεί σε μεμονωμένα κομμάτια που ονομάζονται '
  + 'components που είναι ανεξάρτητα το ένα από το άλλο. ';
const popupcomponentText = 'Τα components είναι τα βασικά δομικά στοιχεία της React. Το UI κάθε εφαρμογής που έχει '
  + 'δημιουργηθεί με τη React μπορεί να αναλυθεί σε μεμονωμένα κομμάτια που ονομάζονται '
  + 'components που είναι ανεξάρτητα το ένα από το άλλο.'
  + 'Κάθε ένα από αυτά τα components '
  + 'έχει τη δική του λογική και μπορεί να υποβληθεί σε επεξεργασία ξεχωριστά πριν '
  + 'συγχωνευθεί μαζί στο τελικό περιβάλλον χρήστη, γεγονός που καθιστά τη δημιουργία της '
  + 'διεπαφής χρήστη μιας εφαρμογής πιο απλή και πιο εύκολη στη διαχείριση. Τα components'
  + 'μπορούν επίσης να επαναχρησιμοποιηθούν σε άλλες σελίδες και εφαρμογές, γεγονός που '
  + 'εξοικονομεί σημαντικό χρόνο στην κωδικοποίηση.';

const jsxText = 'Το JSX, το οποίο σημαίνει JavaScript XML, είναι μια επέκταση σύνταξης της JavaScript που '
  + 'επιτρέπει στους προγραμματιστές να δομούν στοιχεία χρησιμοποιώντας γλώσσα παρόμοια '
  + 'με την HTML που είναι ενσωματωμένη στον κώδικα JavaScript. ';
const popupjsxText = 'Το JSX, το οποίο σημαίνει JavaScript XML, είναι μια επέκταση σύνταξης της JavaScript που '
  + 'επιτρέπει στους προγραμματιστές να δομούν στοιχεία χρησιμοποιώντας γλώσσα παρόμοια '
  + 'με την HTML που είναι ενσωματωμένη στον κώδικα JavaScript. '
  + 'Το JSX χρησιμοποιείται '
  + 'συνήθως για να περιγράψει πώς πρέπει να μοιάζει το UI ενός ιστότοπου, το οποίο η React'
  + 'στη συνέχεια μετατρέπει σε στοιχεία DOM. Ενώ το JSX δεν απαιτείται για τη δημιουργία '
  + 'εφαρμογών React, επιταχύνει τον προγραμματισμό απλοποιώντας τη γλώσσα '
  + 'κωδικοποίησης.';

const monodromhddText = 'Η React περιλαμβάνει μια αρχιτεκτονική JavaScript που ονομάζεται Flux που χρησιμοποιεί '
  + 'έναν κεντρικό διεκπεραιωτή για να κατευθύνει δεδομένα προς μία κατεύθυνση κάθε φορά '
  + 'που συμβαίνει ένα συμβάν διεπαφής χρήστη, ';
const popupmonodromhddText = 'Η React περιλαμβάνει μια αρχιτεκτονική JavaScript που ονομάζεται Flux που χρησιμοποιεί '
  + 'έναν κεντρικό διεκπεραιωτή για να κατευθύνει δεδομένα προς μία κατεύθυνση κάθε φορά '
  + 'που συμβαίνει ένα συμβάν διεπαφής χρήστη, αυτό ονομάζεται μονόδρομη σύνδεση '
  + 'δεδομένων. Το κύριο πλεονέκτημα της μονόδρομης σύνδεσης δεδομένων είναι η ικανότητά '
  + 'του να συγχρονίζει δεδομένα και να τροποποιεί μια εφαρμογή γρήγορα και εύκολα, ειδικά '
  + 'σε σύγκριση με τη διαδικασία αμφίδρομης δέσμευσης δεδομένων που συναντάται συνήθως '
  + 'σε πλαίσια όπως το Angular.js. Αυτή η μέθοδος είναι ιδιαίτερα χρήσιμη σε πολύπλοκες '
  + 'εφαρμογές, καθιστώντας και τις δύο ευκολότερες στον εντοπισμό σφαλμάτων, τη συντήρηση '
  + 'και την ανάπτυξη τους με την πάροδο του χρόνου.';

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
        <ReadMoreFeature title=" Μονόδρομη δέσμευση δεδομένων" text={monodromhddText} openDialog={() => openDialog(popupmonodromhddText)} />
      </div>

      {isDialogOpen && (
        <div className="dialog-overlay">
          <div className="dialog-content">
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
