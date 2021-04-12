import React, {useState} from 'react';
import axios from 'axios';
import OrganismComponent from '../organisms';

const {HistoryOrganism} = OrganismComponent;

function HistoryTemplates() {
  const [dataHistory, setDataHistory] = useState({
    data: [],
  });
  if (dataHistory.data.length === 0) {
    axios
      .get('https://currencytest-63e75-default-rtdb.firebaseio.com/.json')
      .then(result => {
        setDataHistory({data: result.data});
      })
      .catch(err => console.log('err: ', err));
  }
  return <HistoryOrganism data={dataHistory.data} />;
}

export default HistoryTemplates;
