const Card = (props) => {
  return (
    <div className="border shadow d-flex justify-content-between align-items-center p-4">
      <div>
        <h3>{props.book.bookName}</h3>
        <p className="mt-3">{props.book.date}</p>
      </div>

      <button
        onClick={() => props.handleDelete(props.book.id)}
        className="btn btn-danger"
      >
        <i className="bi bi-trash3-fill"></i>
      </button>
    </div>
  );
};

export default Card;
