import format from 'date-fns/format';
import { ArrowLeftIcon } from './icons/ArrowLeftIcon';

type TimeRangeProps = {
  start: Date;
  end: Date;
};
const TimeRange = ({ start, end }: TimeRangeProps) => {
  return (
    <div className="travel-dates">
      <div className="date-box">
        <span className="time">{format(new Date(start), 'HH:mm')}</span>
      </div>
      <ArrowLeftIcon />
      <div className="date-box">
        <span className="time">{format(new Date(end), 'HH:mm')}</span>
      </div>
    </div>
  );
};

export default TimeRange;
