import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Ευκολία στη δημιουργία δυναμικών διεπαφών',
    text: 'Η React διευκολύνει τη διαχείριση του UI μέσω των components, επιτρέποντας τη δημιουργία επαναχρησιμοποιήσιμων στοιχείων.'
    + 'Οι δυναμικές αλλαγές δεδομένων χειρίζονται εύκολα μέσω της state και των props.',
  },
  {
    title: 'Αρχιτεκτονική βασισμένη σε components',
    text: 'Τα components είναι επαναχρησιμοποιήσιμα και ανεξάρτητα, διευκολύνοντας τη συντήρηση και την επέκταση της εφαρμογής.',
  },
  {
    title: 'Virtual DOM',
    text: 'Η React χρησιμοποιεί ένα Virtual DOM, που μειώνει την ανάγκη για άμεση αλληλεπίδραση με τον πραγματικό DOM, καθιστώντας την εφαρμογή ταχύτερη.',
  },
  {
    title: 'Μεγάλη κοινότητα και υποστήριξη',
    text: 'Η React διαθέτει μία από τις μεγαλύτερες κοινότητες προγραμματιστών, πράγμα που σημαίνει πλούσια τεκμηρίωση, βιβλιοθήκες τρίτων και βοήθεια.',
  },
  {
    title: 'Ευκολία στη χρήση με άλλες βιβλιοθήκες ή πλαίσια',
    text: 'Μπορεί να ενσωματωθεί εύκολα με άλλα εργαλεία και πλαίσια (π.χ., Redux για διαχείριση κατάστασης, React Router για πλοήγηση).',
  },
];

const Features = () => (
  <div className="reactp__features section__padding" id="features">
    <div className="reactp__features-heading">
      <h1 className="gradient__text">Πλεονεκτήματα <br />ReactJS</h1>
    </div>
    <div className="reactp__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
