import styles from './Timeline.module.scss';

import type {RefObject} from 'preact';
import {useApplication, useTimelineContext} from '../../contexts';
import {useDuration, useSharedSettings} from '../../hooks';

export interface RangeSelectorProps {
  rangeRef: RefObject<HTMLDivElement>;
}

export function RangeSelector({rangeRef}: RangeSelectorProps) {
  const {framesToPercents} = useTimelineContext();
  const {player} = useApplication();
  const {range} = useSharedSettings();
  const duration = useDuration();
  const start = player.status.secondsToFrames(range[0]);
  const end = Math.min(player.status.secondsToFrames(range[1]), duration);

  let normalizedStart = start;
  let normalizedEnd = end;
  if (start > end) {
    normalizedStart = end;
    normalizedEnd = start;
  }

  return (
    <div className={styles.rangeTrack}>
      <div
        ref={rangeRef}
        style={{
          flexDirection: start > end ? 'row-reverse' : 'row',
          left: `${framesToPercents(Math.ceil(Math.max(0, normalizedStart)))}%`,
          right: `${
            100 - framesToPercents(Math.ceil(Math.min(duration, normalizedEnd)))
          }%`,
        }}
        className={styles.range}
      ></div>
    </div>
  );
}
