import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  const contacts = await readContacts();
  //   console.log('Contacts read:', contacts);
  for (let i = 0; i < number; i += 1) {
    const contact = createFakeContact();
    contacts.push(contact);

    // console.log(`Contact ${i + 1} generated:`, contact);
    // console.log(contacts);
  }
  writeContacts(contacts);
};

generateContacts(5);
