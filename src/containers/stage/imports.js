import blog01 from '../../assets/blog01.png';
import blog02 from '../../assets/vscode2.png';
import blog03 from '../../assets/blog03.png';
import blog04 from '../../assets/blog04.png';
import blog05 from '../../assets/blog05.png';
import blog0101 from '../../assets/whatisreact.jpg';
import blog0102 from '../../assets/history-react.png';
import blog0202 from '../../assets/nodedownload.png';
import blog0203 from '../../assets/extensions.png';
import blog0204 from '../../assets/create-app.png';
import blog0301 from '../../assets/stage-assets.png';
import blog0302 from '../../assets/stage-navbar.png';
import blog0303 from '../../assets/stage-header.png';
import blog0304 from '../../assets/stage-whatisreact.png';
import blog0305 from '../../assets/stage-history.png';
import blog0306 from '../../assets/stage-advantages.png';
import blog0307 from '../../assets/stage-feature.png';
import blog0308 from '../../assets/stage-stage.png';
import blog0309 from '../../assets/stage-footer.png';
import blog0401 from '../../assets/sign-in.png';
import blog0402 from '../../assets/sign-up.png';
import blog0501 from '../../assets/stage-camera.png';
import blog0502 from '../../assets/stage-video.png';
import blog0503 from '../../assets/stage-takephoto.png';
import blog0504 from '../../assets/stage-download.png';

const stageData = [
  {
    title: 'Στάδιο 0',
    subtitle: 'Εισαγωγικά',
    text: 'Η συγκεκριμένη ιστοσελίδα κατασκευάστηκε με την χρήση της βιβλιοθήκης React την οποία αναλύω στα παρακάτω βήματα ',
  },
  {
    title: 'Στάδιο 1',
    subtitle: 'Εργαλεία Κατασευής της Ιστοσελίδας',
    text: 'Η συγκεκριμένη ιστοσελίδα κατασκευάστηκε με την χρήση του IDE VS Code το οποίο αναλύω στα παρακάτω βήματα ',
  },
  {
    title: 'Στάδιο 2',
    subtitle: 'Δημιουργία Components',
    text: 'Στην εφαρμογή που δημιούργησα έχω χωρίσει το src σε 3 φακελους: assets, components, containers του οποίους αναλύω στα παρακάτω βήματα ',
  },
  {
    title: 'Στάδιο 3',
    subtitle: 'Δημιουργία του Login',
    text: 'Για να δημιουργήσω τη σύνδεση στην ιστοσελίδα χώρισα την εφαρογή σε 2 κομμάτια frontend και backend τα οποία αναλύω στα παρακάτω βήματα',
  },
  {
    title: 'Στάδιο 4',
    subtitle: 'Δημιουργία περιβάλλοντος κάμερας',
    text: 'Στα παρακάτω βήματα εξηγώ τον τρόπο με τον οποίο μπορούμε να ανοίξουμε την κάμερα του υπολογιστή μας στην εφαρμογή μας και να βγάζουμε φωτογραφίες τις οποίες μπορούμε και να κατεβάσουμε. ',
  },
];

const blog01text1 = 'Η React είναι μια βιβλιοθήκη JavaScript ανοιχτού κώδικα που χρησιμοποιείται για τη δημιουργία στοιχείων διεπαφής χρήστη (UI) σε εφαρμογές μιας σελίδας. Αρχικά δημιουργήθηκε από έναν μηχανικό λογισμικού στο Facebook για να βελτιστοποιήσει την εφαρμογή της εταιρείας, να βελτιώσει την απόδοσή της και να απλοποιήσει τη συντήρηση του κώδικα. ';

const blog01text2 = 'Η React δημιουργήθηκε από τον Jordan Walke, μηχανικό λογισμικού στη Meta , ο οποίος κυκλοφόρησε ένα πρώιμο πρωτότυπο του React που ονομάζεται "FaxJS". Επηρεάστηκε από το XHP, μια βιβλιοθήκη στοιχείων HTML για την PHP . Αναπτύχθηκε για πρώτη φορά στο NewsFeed του Facebook το 2011 και αργότερα στο Instagram το 2012. Ήταν ανοιχτού κώδικα στο JSConf US τον Μάιο του 2013.';

const blog01text = 'Η συγκεκριμένη ιστοσελίδα κατασκευάστηκε με την χρήση του IDE VS Code. Για να το χρησιμοποιήσουμε κάνουμε λήψη της εφαρμογής στο σύνδεσμο "https://code.visualstudio.com/download" και στην συνέχεια πατάμε το κουμπί download πάνω δεξιά';

const blog02text2 = 'Για να μπορέσουμε να χρησιμοποίησουμε τις διάφορες βιβλιοθήκες της React κατεβάζουμε και εγκαθηστούμε απο το επίσημο site το Node.js στο σύνδεσμο https://nodejs.org/en/download και στην συνέχεια πατάμε το κουμπί download που θα βρουμε στο navbar';

const blog02text3 = 'Επίσης χρειάζεται να κάνουμε εγκατάσταση στο VS Code την επέκταση ES7+ REACT το οποίο θα βρούμε στο 5ο κουμπί στο πλάγιο navbard της εφαρμογής Virtual Studio Code';

const blog02text4 = 'Για να δημιουργήσουμε το πρώτο μας πρόγραμμα σε React ανοίγουμε το terminal του Visual Studio Code και γράφουμε την εντολή : "npx create react-app ./" η όποια εντολή θα δημιουργήσει στο δημιουργήσει στο προγραμμά μας τα αρχεία public και src. Στο αρχείο public βρίσκεται το αρχείο index.html στο οποίο καλούμε την συνάρτηση app.js στην οποία προσθέτουμε όλα τα βασικά στοιχεία της εφαρμογής μας. Για να μπορέσουμε να ανοίξουμε το προγραμμά μας στον περιηγητή ιστού χρησιμοποιούμε την εντολή "npm start".';

const blog03text1 = 'Στον φάκελο assets περιλαμβάνονται όλες οι φωτογραφίες που χρησιμοποιούνται στα διάφορα σημεία της ιστοσελίδας. Στον φάκελο components έχω δημιουργήσει τα components τα οποία καλώ απο τα components που υπάρχουν στον φάκελο containers. Στον φάκελο containers χρησιμοποιώ όπου χρειάζομαι τα components που ανέφερα για να τα καλέσω στο App.js.';
const blog03text2 = 'Στο κομμάτι του navbar υπάρχουν κουμπιά τα οποία μας πηγαίνουν στα διάφορα σημεία της ιστοσελίδας ανάλογα με το ποιο κουμπί επιλέξουμε. Στο κομμάτι του navbar χρησιμοποιώ μόνο το component του navbar το οποίο υπάρχει στον φάκελο components καθώς και το css του.';
const blog03text3 = 'Στο κομμάτι της αρχικής καλωσορίζουμε τον χρήστη στην ιστοσελίδα. Χρησιμοποιείται μόνο το component header που υπάρχει στον φάκελο containers καθώς κάνουμε και import την φωτογραφία που βλέπουμε απο τον φάκελο assets.';
const blog03text4 = 'Στο κομμάτι τι είναι React αναφέρουμε λίγα λόγια για την React καθώς και τους λόγους δημοφιλείας της.Βασικό component αυτού του κομματιού είναι το whatisreact απο τον φάκελο containers, το οποίο όμως χρησιμοποιεί και το component ReadMoreFeatures απο τον φάκελο components.';
const blog03text5 = 'Στο κομμάτι Ιστορία αναφέρουμε λίγα ιστουρικά στοιχεία της React. Χρησιμοποιείται μόνο το component history το οποίο υπάρχει στόν φάκελο containers, το css του, καθώς και η φωτογραφία που χρησιμοποιούμε ως background την οποία κάνουμε import απο τον φάκελο assets.';
const blog03text6 = 'Στο κομμάτι Πλεονεκτήματα αναφέρουμε τα διάφορα πλεονεκτήματα της χρήσης της React. Βασικο component αυτού του κομματιού είναι το  Features απο τον φάκελο containers ,το οποίο χρησιμοποιεί και το component feature απο τον φάκελο components.';
const blog03text7 = 'Στο κομμάτι Δημοτικότητα αναφέρουμε επιπλέον λόγους οι οποίοι κάνουν την React τόσο δημοφιλή.Βασικο component αυτού του κομματιού είναι το Blog απο τον φάκελο containers ,το οποίο χρησιμοποιεί και το component article απο τον φάκελο components.';
const blog03text8 = 'Στο κομμάτι Στάδια κατασκευής της ιστοσελίδας που βρισκόμαστε τώρα παρουσιάζουμε όλα τα στάδια τα οποία τα χωρίζουμε σε βήματα. Βασικο component αυτού του κομματιού είναι το Stage απο τον φάκελο containers ,το οποίο χρησιμοποιεί και το component infocard απο τον φάκελο components.';
const blog03text9 = 'Στο κομμάτι Footer υπάρχουν διάφορα Links απο τα οποία μπορούμε να αντλήσουμε περισσότερες πληροφορίες για την React.Χρησιμοποιείται μόνο το component footer το οποίο υπάρχει στόν φάκελο containers, το css του, καθώς και η φωτογραφία που χρησιμοποιούμε την οποία κάνουμε import απο τον φάκελο assets.';

const blog04text1 = 'Το backend αποτελείται απο το server.js αρχείο το οποίο είναι υπεύθυνο για την σύνδεση της εφαρμογής με την βάση δεδομένων χρήστη ώστε να μπορεί ο κάθε χρήστης είτε να συνδεθεί στην εφαρμογή, είτε να δημιουργήσει νέο λογαριασμό';
const blog04text2 = 'Το frontend αποτελείται απο το login.js αρχείο το οποίο είναι υπεθύνο για την εμφάνιση της φόρμας login στον χρήστη, το signup.js το οποίο είναι υπεύθυνο για την εμφάνιση της φόρμας δημιουργίας νέου χρήστη, home.js το οποίο περιλαμβάνει το κύριο μέρος της εφαρμογής.';

const blog05text1 = 'Αρχικά δημιουργούμε το component της κάμερας μέσα στο οποίο ανοίγουμε και κλείνουμε την κάμερα και μπορούμε να τραβήξουμε φωτογραφίες τις οποίες μπορούμε να κατεβάσουμε στον υπολογιστή μας';
const blog05text2 = 'Για να μπορέσουμε να άνοιξουμε την κάμερα στην ιστοσελίδα μας δημιουργούμε τη μεταβλητή useStream στο component Stage την οποία περνάμε και χρησιμοποιούμε στο component camera ';
const blog05text3 = 'Στο component camera χρησιμοποιώ τη συνάρτηση takePhoto η οποία τραβάει την φωτογραφία μας';
const blog05text4 = 'Στο component camera χρησιμοποιώ τη συνάρηση downloadPhoto η οποία κατεβάζει την φωτογραφία μας';

const blog02text = 'Για να μπορέσουμε να χρησιμοποίησουμε τις διάφορες βιβλιοθήκες της React κατεβάζουμε και εγκαθηστούμε απο το επίσημο site το Node. Επίσης χρειάζεται να κάνουμε εγκατάσταση στο VS Code την επέκταση ES7+ REACT';

const blog03text = 'Για να δημιουργήσουμε το πρώτο μας πρόγραμμα σε React ανοίγουμε το terminal του Visual Studio Code και γράφουμε την εντολή : "npx create react-app ./" η όποια εντολή θα δημιουργήσει στο δημιουργήσει στο προγραμμά μας τα αρχεία public και src. Στο αρχείο public βρίσκεται το αρχείο index.html στο οποίο καλούμε την συνάρτηση app.js στην οποία προσθέτουμε όλα τα βασικά στοιχεία της εφαρμογής μας. Για να μπορέσουμε να ανοίξουμε το προγραμμά μας στον περιηγητή ιστού χρησιμοποιούμε την εντολή "npm start" ';

const blog04text = 'Στην εφαρμογή που δημιούργησα έχω χωρίσει το src σε 3 φακελους: assets, components, containers. Ο φάκελος assets περιέχει τα διάφορα αρχεία εικονών που χρησιμοποιώ στην εφαρμογή. Στον φάκελο components έχω δημιουργήσει τα components τα οποία καλώ απο τα components που υπάρχουν στον φάκελο containers. Στον φάκελο containers χρησιμοποιώ όπου χρειάζομαι τα components που ανέφερα και τα για να τα καλέσω στο App.js';

const blog05text = 'dadasdasdas';

export {
  stageData,
  blog0101,
  blog0102,
  blog0202,
  blog0203,
  blog0204,
  blog0301,
  blog0302,
  blog0303,
  blog0304,
  blog0305,
  blog0306,
  blog0307,
  blog0308,
  blog0309,
  blog0401,
  blog0402,
  blog0501,
  blog0502,
  blog0503,
  blog0504,
  blog01,
  blog02,
  blog03,
  blog04,
  blog05,
  blog02text,
  blog03text,
  blog04text,
  blog05text,
  blog01text1,
  blog01text2,
  blog01text,
  blog02text2,
  blog02text3,
  blog02text4,
  blog03text1,
  blog03text2,
  blog03text3,
  blog03text4,
  blog03text5,
  blog03text6,
  blog03text7,
  blog03text8,
  blog03text9,
  blog04text1,
  blog04text2,
  blog05text1,
  blog05text2,
  blog05text3,
  blog05text4,
};
