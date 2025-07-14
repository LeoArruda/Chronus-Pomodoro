import './styles/theme.css';
import './styles/global.css';
import { Heading } from './components/Heading';
import { TimerIcon } from 'lucide-react';

export function App() {
  return (
    <>
      <Heading>
        Hello World!
        <button>
          <TimerIcon />
        </button>
      </Heading>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quos
        voluptate voluptates ipsum exercitationem, aspernatur, qui quas numquam
        commodi perferendis eligendi facere aut saepe, laborum incidunt dolorem
        nemo! Eaque, reprehenderit.
      </p>
    </>
  );
}
