const Contact = ({ name, number, id, handleDelete }) => {
  return (
    <div>
      <li>
        <p>{name}</p>
        <p>{number}</p>
        <button onClick={() => handleDelete(id)}>Delete</button>
      </li>
    </div>
  );
};

export default Contact;
