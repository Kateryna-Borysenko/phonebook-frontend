export const sortAndGroupContacts = contacts => {
  const sortedContacts = [...contacts].sort((a, b) =>
    a.name.localeCompare(b.name),
  );

  const groupedContacts = {};

  sortedContacts.forEach(contact => {
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
