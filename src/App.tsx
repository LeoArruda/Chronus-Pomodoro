import './styles/theme.css';
import './styles/global.css';
import { Heading } from './components/Heading';

export function App() {
  return (
    <>
      <Heading />
      <Heading attr={123} attr2='String'>
        Hello World!
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
