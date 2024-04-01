export const sortAndGroupContacts = contacts => {
  const groupedContacts = {};

  contacts.forEach(contact => {
    if (contact && contact.name) {
      const firstLetter = contact.name.charAt(0).toUpperCase();
      if (!groupedContacts[firstLetter]) {
        groupedContacts[firstLetter] = [];
      }
      groupedContacts[firstLetter].push(contact);
    }
  });

  return groupedContacts;
};
