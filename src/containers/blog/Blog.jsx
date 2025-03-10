import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05, blog02text, blog03text, blog04text, blog05text } from './imports';
import './blog.css';

const Blog = () => {
  const blog01text = 'Η React περιλαμβάνει μια αρχιτεκτονική JavaScript που ονομάζεται Flux που χρησιμοποιεί έναν κεντρικό διεκπεραιωτή για να κατευθύνει δεδομένα προς μία κατεύθυνση κάθε φορά που συμβαίνει ένα συμβάν διεπαφής χρήστη, αυτό ονομάζεται μονόδρομη σύνδεση δεδομένων. '
  + 'Το κύριο πλεονέκτημα της μονόδρομης σύνδεσης δεδομένων είναι η ικανότητά του να συγχρονίζει δεδομένα και να τροποποιεί μια εφαρμογή γρήγορα και εύκολα, ειδικά σε σύγκριση με τη διαδικασία αμφίδρομης δέσμευσης δεδομένων που συναντάται συνήθως '
  + 'σε πλαίσια όπως το Angular.js. Αυτή η μέθοδος είναι ιδιαίτερα χρήσιμη σε πολύπλοκες εφαρμογές, καθιστώντας και τις δύο ευκολότερες στον εντοπισμό σφαλμάτων, τη συντήρηση και την ανάπτυξη τους με την πάροδο του χρόνου.';

  return (
    <div className="reactp__blog section__padding" id="blog">
      <div className="reactp__blog-heading">
        <h1 className="gradient__text">Πρόσθετοι λόγοι <br /> για τη δημοτικότητα του React</h1>
      </div>
      <div className="reactp__blog-container">
        <div className="reactp__blog-container_groupA">
          <Article
            imgUrl={blog01}
            title="Μονόδρομη δέσμευση δεδομένων"
            text={blog01text}
          />
        </div>
        <div className="reactp__blog-container_groupB">
          <Article imgUrl={blog02} title="Δημιουργία και διαχείριση UI" text={blog02text} />
          <Article imgUrl={blog03} title="H δημοτικότητα της βιβλιοθήκης" text={blog03text} />
          <Article imgUrl={blog04} title="Η δύμαμη του Facebook" text={blog04text} />
          <Article imgUrl={blog05} title="Ταχύτερη ανάπτυξη εφαρμογών" text={blog05text} />
        </div>
      </div>
    </div>
  );
};

export default Blog;
