import { v4 as uuidv4 } from 'uuid';
import UTrackerImg from '../images/utracker.jpg';
import GreenCtgImg from '../images/greenctg.jpg';


const projects = [
  {
    id: uuidv4(),
    name: 'Discord bot dashboard',
    desc:
      'An dashboard to control manage your discord bots easily. I developed the website and the mobile app',
    img: UTrackerImg,
  },
  {
    id: uuidv4(),
    name: 'Find the world-game',
    desc:
      'A game that expert at guessing words from hints.',
    img: GreenCtgImg,
  },
  
];

export default projects;
