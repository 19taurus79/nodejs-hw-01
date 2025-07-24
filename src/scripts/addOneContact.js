import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  const contacts = await readContacts();
  const contact = createFakeContact();
  contacts.push(contact);
  writeContacts(contacts);
};

addOneContact();
