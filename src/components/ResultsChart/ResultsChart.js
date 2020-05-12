import React, { useContext, useState } from 'react';
import { Button } from '@material-ui/core';
import { TasksContext } from '@app/providers/Tasks';
import { TIME_PERIOD } from '@app/helpers/constants';
import './result-chart.scss';

const getInitialResultsBy = () => {
  const date = new Date();
  const msInDay = 1000 * 60 * 60 * 24;

  const isYearEnd = date.getMonth() === 11 && date.getDate() === 31;
  const isMonthEnd = date.getMonth() !== (new Date(date.valueOf() + msInDay)).getMonth();
  const isWeekEnd = date.getDay() === 0;

  return isYearEnd ? TIME_PERIOD.YEAR :
    isMonthEnd ? TIME_PERIOD.MONTH :
      isWeekEnd ? TIME_PERIOD.WEEK :
        TIME_PERIOD.DAY;
};

const ResultsChart = () => {
  const [resultsBy, setResultsBy] = useState(getInitialResultsBy());
  const { getTasks } = useContext(TasksContext);

  console.log(getTasks());

  const onButtonClick = event => {
    setResultsBy(event.currentTarget.id);
  };

  return (
    <div className="result">
      <div className="result__buttons">
        <Button
          variant="outlined"
          color="primary"
          size="small"
          id={TIME_PERIOD.DAY}
          onClick={onButtonClick}
          disabled={resultsBy === TIME_PERIOD.DAY}
        >
          {TIME_PERIOD.DAY}
        </Button>
        <Button
          variant="outlined"
          color="primary"
          size="small"
          id={TIME_PERIOD.WEEK}
          onClick={onButtonClick}
          disabled={resultsBy === TIME_PERIOD.WEEK}
        >
          {TIME_PERIOD.WEEK}
        </Button>
        <Button
          variant="outlined"
          color="primary"
          size="small"
          id={TIME_PERIOD.MONTH}
          onClick={onButtonClick}
          disabled={resultsBy === TIME_PERIOD.MONTH}
        >
          {TIME_PERIOD.MONTH}
        </Button>
        <Button
          variant="outlined"
          color="primary"
          size="small"
          id={TIME_PERIOD.YEAR}
          onClick={onButtonClick}
          disabled={resultsBy === TIME_PERIOD.YEAR}
        >
          {TIME_PERIOD.YEAR}
        </Button>
      </div>
      <div className="chart"/>
    </div>
  );
};

export default ResultsChart;
