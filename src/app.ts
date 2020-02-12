import config from './config';
import Twit from 'twit';

const T = new Twit(config);

const params: any = {
  q: '#100DaysOfCode',
  result_type: 'recent',
  count: 100,
};

T.get(`search/tweets`, params, (err, data, response) => {
  if(err) return console.log('error found', err);
  console.log('response got', data);
});