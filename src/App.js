import Header from './components/Header';
import { useState } from 'react';

function App() {
  // kitapları tuttuğumuz state
  const [books, setBooks] = useState([]);

  // formun gönderilme olayı
  const handleSubmit = (e) => {
    // sayfa yenilemyi engeller
    e.preventDefault();
    // formdak inputa yazılana erişme
    const bookName = e.target[0].value;

    // kitap objesi oluşturma
    const newBook = {
      // id oluşturma
      id: new Date().getTime(),
      bookName,
      date: new Date().toLocaleString(),
    };

    // kitapları diziye ekleme
    setBooks([...books, newBook]);
  };

  return (
    <div className="App">
      <Header />
      <main className="container">
        {/* form */}
        <form
          onSubmit={handleSubmit}
          className="d-flex gap-3 mt-4 p-4"
        >
          <input className="form-control shadow" type="text" />
          <button className="btn btn-warning shadow">Ekle</button>
        </form>
      </main>
    </div>
  );
}

export default App;
