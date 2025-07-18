import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';

export function Tips() {
  const { state } = useTaskContext();
  const nextCycle = getNextCycle(state.currentCycle);
  const nextCyleType = getNextCycleType(nextCycle);

  // Tips
  const tipsForWhenActiveTask = {
    workTime: <span>Stay focused for {state.config.workTime}min</span>,
    shortBreakTime: <span>Rest for {state.config.shortBreakTime}min</span>,
    longBreakTime: <span>Long Rest</span>,
  };

  const tipsForNoActiveTask = {
    workTime: (
      <span>
        Next Cycle is of <b>{state.config.workTime}min</b>
      </span>
    ),
    shortBreakTime: (
      <span>Next Rest is of {state.config.shortBreakTime}min</span>
    ),
    longBreakTime: <span>Next Cycle will be a Long Rest</span>,
  };

  return (
    <>
      {!!state.activeTask && tipsForWhenActiveTask[state.activeTask.type]}
      {!state.activeTask && tipsForNoActiveTask[nextCyleType]}
    </>
  );
}
