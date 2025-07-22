import { useEffect } from 'react';
import { Container } from '../../components/Container';
import { GenericHtml } from '../../components/GenericHtml';
import { Heading } from '../../components/Heading';
import { RouterLink } from '../../components/RouterLink';
import { MainTemplate } from '../../templates/MainTemplate';

export function AboutPomodoro() {
  useEffect(() => {
    document.title = 'Understand the Pomodoro Technique - Pomodorus Chronus';
  }, []);

  return (
    <MainTemplate>
      <Container>
        <GenericHtml>
          <Heading>Pomodoro's Technique 🍅</Heading>

          <p>
            <strong>The Pomodoro Technique</strong> is a productivity method
            created by <strong>Francesco Cirillo</strong>, which consists of
            dividing work into time blocks (the famous “Pomodoros”) separated by
            breaks. The goal is to stay fully focused for a short period and
            ensure rest to avoid mental fatigue.
          </p>
          <a></a>

          <img src='https://placehold.co/1920x1080' alt='' />

          <h2>How does the traditional Pomodoro work?</h2>
          <ul>
            <li>
              <strong>1. Choose a task</strong> you want to work on.
            </li>
            <li>
              <strong>2. Work on it for 25 minutes</strong> without
              interruptions.
            </li>
            <li>
              <strong>3. Take a short 5-minute break.</strong>
            </li>
            <li>
              <strong>4. After 4 cycles, take a longer break</strong> (usually
              15 to 30 minutes).
            </li>
          </ul>

          <h2>
            But <strong>Pomodorus Chronus</strong> has a special twist 🚀
          </h2>

          <p>
            Our app follows the original concept but with some enhancements and
            customizations to make the process even more efficient:
          </p>

          <h3>⚙️ Customizable Timers</h3>
          <p>
            You can set your own focus time, short break, and long break
            durations! Just go to the{' '}
            <RouterLink href='/settings/'>Settings Page</RouterLink>
            and adjust the minutes as you like.
          </p>

          <h3>🔁 Organized Cycle Sequences</h3>
          <p>
            With each completed cycle, a new task is automatically added to your
            history, and the app suggests the next cycle (focus or break).
          </p>
          <p>
            <strong>Our default:</strong>
          </p>
          <ul>
            <li>
              <strong>Odd-numbered cycles: </strong>: Work (focus)
            </li>
            <li>
              <strong>Even-numbered cycles: </strong>: Short break
            </li>
            <li>
              <strong>Cycle 8:</strong>A special long break to reset the full
              cycle.
            </li>
          </ul>

          <h3>🍅 Cycle Visualization</h3>
          <p>
            Right below the timer, you’ll see coloured dots representing the
            cycles:
          </p>
          <ul>
            <li>🟡 Yellow: Work (focus) cycle.</li>
            <li>🟢 Green: Short break.</li>
            <li>🔵 Blue: Long break (appears every 8 cycles).</li>
          </ul>

          <p>
            This way, you always know where you are in the process and what’s
            coming next—no more needing to write things down or do mental math!
          </p>

          <h3>📊 Automatic History</h3>
          <p>
            All your completed or interrupted tasks and cycles are saved in the
            <RouterLink href='/history/'>history</RouterLink>, so you can track
            your progress over time.
          </p>

          <h2>Why use Pomodorus Chronus?</h2>
          <ul>
            <li>✅ Clearly organize your focus.</li>
            <li>✅ Balance work and rest.</li>
            <li>✅ Customize your cycles and durations.</li>
            <li>✅ Automatically track your history.</li>
          </ul>

          <p>
            <strong>Ready to focus?</strong> Let's go!{' '}
            <RouterLink href='/'>Head back to the homepage</RouterLink>
            and start your Pomodoros! 🍅🚀
          </p>

          <p>
            <em>"Full focus, no rush, no pause—just go!"</em> 💪🧘‍♂️
          </p>
        </GenericHtml>
      </Container>
    </MainTemplate>
  );
}
