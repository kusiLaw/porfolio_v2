import { data } from 'autoprefixer';
import fs from 'fs';
import path from 'path';


const loadData =  () => {
 const file = path.join(process.cwd(), 'data/data.json');
  try {
     const data = fs.readFileSync(file, 'utf8');
     return JSON.parse(data);
   } catch (err) {
     return []
   }

}

export default loadData
