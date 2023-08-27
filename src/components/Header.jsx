import book from '../assets/book.png';

const Header = () => {
  return (
    <header className="bg-dark text-light py-2 fs-5 d-flex justify-content-center align-items-center">
      <img style={{ height: '50px' }} src={book} />
      <h1>Kitap Kurdu</h1>
    </header>
  );
};

export default Header;
