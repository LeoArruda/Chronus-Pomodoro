import './styles/theme.css';
import './styles/global.css';

import { Container } from './components/Container';
import { Heading } from './components/Heading';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import { Countdown } from './components/Countdown';
import { DefaultInput } from './components/DefaultInput';
import { Cycles } from './components/Cycles';
import { DefaultButton } from './components/DefaultButton';
import { PlayCircleIcon } from 'lucide-react';
import { Footer } from './components/Footer';
import { useState } from 'react';

export function App() {
  const [numbers, setNumbers] = useState(0);

  function handleClick() {
    setNumbers(prevState => prevState + 1);
    //setNumbers(1);
  }
  return (
    <>
      <Heading>
        Number: <span id='numbers'>{numbers}</span>
      </Heading>
      <button onClick={handleClick}>Increment</button>

      <Container>
        <Heading>
          <Logo />
        </Heading>
      </Container>

      <Container>
        <Menu />
      </Container>

      <Container>
        <Countdown />
      </Container>

      <Container>
        <form className='form' action=''>
          <div className='formRow'>
            <DefaultInput
              labelText={numbers.toString()}
              id='meuInput'
              type='text'
              placeholder='Type anything'
            />
          </div>

          <div className='formRow'>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          <div className='formRow'>
            <Cycles />
          </div>

          <div className='formRow'>
            <DefaultButton icon={<PlayCircleIcon />} />
          </div>
        </form>
      </Container>
      <Container>
        <Footer />
      </Container>
    </>
  );
}
