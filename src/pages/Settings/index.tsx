import { SaveIcon } from 'lucide-react';
import { Container } from '../../components/Container';
import { DefaultButton } from '../../components/DefaultButton';
import { DefaultInput } from '../../components/DefaultInput';
import { Heading } from '../../components/Heading';
import { MainTemplate } from '../../templates/MainTemplate';

export function Settings() {
  return (
    <MainTemplate>
      <Container>
        <Heading>Settings</Heading>
      </Container>

      <Container>
        <p style={{ textAlign: 'center' }}>
          Change the focus duration, short break duration and long break
          duration settings.
        </p>
      </Container>

      <Container>
        <form action='' className='form'>
          <div className='formRow'>
            <DefaultInput id='workTime' labelText='Focus' />
          </div>
          <div className='formRow'>
            <DefaultInput id='shortBreakTime' labelText='Short Break Time' />
          </div>
          <div className='formRow'>
            <DefaultInput id='longBreakTime' labelText='Long Break Time' />
          </div>
          <div className='formRow'>
            <DefaultButton
              icon={<SaveIcon />}
              aria-label='Save settings'
              title='Save settings'
            />
          </div>
        </form>
      </Container>
    </MainTemplate>
  );
}
