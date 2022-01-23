import Countdowner from "react-countdown";

const date = "2029-09-01T00:00:00-05:00"

const Countdown = () => {
  return (
    <Countdowner date={new Date(date)} renderer={renderer}/>
  );
}

const renderer = ({days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a complete state
    return <Done />;
  } else {
    // Render a countdown
    const staticYear = 365.46;
    const staticMonth = 12;
    const staticDay = 30.437;
    const years = (days/staticYear);
    const months = ((years % 1)*staticMonth);
    const daysT = ((months % 1)*staticDay);
    
    const formatYears = Math.floor(years).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
    const formatMonths = Math.floor(months).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
    const formatDays = Math.floor(daysT).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
    const formatHours = hours.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
    const formatMinutes = minutes.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
    const formatSeconds = seconds.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
    
    return (
      <h1 className="alt countdown">
        {formatYears}:{formatMonths}:{formatDays}:{formatHours}:{formatMinutes}:{formatSeconds}
      </h1>
    );
  }
};

const Done = () => <h2>Now!</h2>;

export default Countdown;
