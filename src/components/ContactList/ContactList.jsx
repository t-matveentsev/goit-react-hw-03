import Contact from "../Contact/Contact";
const ContactList = ({ setContact, filteredContacts, isEmpty }) => {
  const handleDelete = (id) => {
    const newContactList = filteredContacts.filter((item) => item.id != id);
    setContact(newContactList);
  };
  return (
    <div>
      <ul>
        {filteredContacts.map((item) => (
          <Contact key={item.id} {...item} handleDelete={handleDelete} />
        ))}
      </ul>
      {isEmpty && <p>в тебе ще немає контактів</p>}
    </div>
  );
};

export default ContactList;
