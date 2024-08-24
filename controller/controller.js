import path from 'path';
import { fileURLToPath } from 'url';




const __dirname = path.dirname(fileURLToPath(import.meta.url));


const about = (req, res) => {
  res.sendFile(path.join(__dirname, '../static/about.html'));
};

const index = (req, res) => {
  res.sendFile(path.join(__dirname, '../static/index.html'));
};

const contact = (req, res) => {
  res.sendFile(path.join(__dirname,'../static/contact.html'));
};

export {
  about,
  index,
  contact
};
