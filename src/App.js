import Header from './components/Header';
import { useState } from 'react';
import Card from './components/Card';
import { toast } from 'react-toastify';

function App() {
  // kitapları tuttuğumuz state
  const [books, setBooks] = useState([]);

  // formun gönderilme olayı
  const handleSubmit = (e) => {
    // sayfa yenilemyi engeller
    e.preventDefault();

    // formdaki inputa yazılana erişme
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

    // inputu temizleme
    e.target[0].value = '';

    // bildirim ver
    toast.success('Kitap başarıyla eklendi');
  };

  // elemanı kaldırır
  const handleDelete = (delete_id) => {
    // diziden eleman kaldırma
    const filtred = books.filter((book) => book.id !== delete_id);

    // state 'i güncelle
    setBooks(filtred);

    // bildirim verme
    toast.error('Kitap Kaldırıldı');
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

        <div className="d-flex flex-column gap-5 mt-4">
          {/* Kitaplar Listesi */}
          {books.map((book) => (
            <Card
              key={book.id}
              book={book}
              handleDelete={handleDelete}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
