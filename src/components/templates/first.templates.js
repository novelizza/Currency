import React, {useState} from 'react';
import axios from 'axios';
import OrganismComponent from '../organisms';

const {HomeOrganism} = OrganismComponent;

function FirstTemplates() {
  const [dataCurrency, setDataCurrency] = useState({
    data: [],
  });
  if (dataCurrency.data.length === 0) {
    axios
      .get(
        'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
        {
          headers: {
            'X-CMC_PRO_API_KEY': '5564e08e-3ea2-4550-85be-a61c5d28eb97',
          },
        },
      )
      .then(result => {
        setDataCurrency({data: result.data.data});
      })
      .catch(err => console.log('err: ', err));
  }
  return <HomeOrganism data={dataCurrency.data} />;
}

export default FirstTemplates;
