
const BASE = (
  window.location.hostname === 'localhost' ?
  'http://localhost:5400' :
  ''
) + '/api';

function fetchOldVotes(eventId, token){
  return fetch(`${BASE}/event/${eventId}/user/${token}/votes`)
    .then(resp => resp.json())
    .catch(err => {
      console.log(err);
      return err;
    })
}

function fetchLatestEvent(){
  return fetch(`${BASE}/event/latest`)
    .then(resp => resp.json())
    .catch(err => {
      console.log(err);
      return err;
    })
}

function fetchEvent(number){
  return fetch(`${BASE}/event/number/${number}`)
    .then(resp => resp.json())
    .catch(err => {
      console.log(err);
      return err;
    })
}

function fetchUrlEvent(){
  const path = window.location.pathname;
  if (path.includes('/event/')){
    const number = path.split('/event/')[1].split('/')[0];
    return fetchEvent(number);
  } else {
    return fetchLatestEvent();
  }
}

function recordVotes(eventId, token, voteData){
  const settings = {
    method: 'POST',
    headers: new Headers({
      "Content-Type": "application/json",
    }),
    body: JSON.stringify({
      payload: voteData,
    }),
  }
  return fetch(`${BASE}/event/${eventId}/user/${token}/votes`, settings)
    .then(resp => resp.json())
    .catch(err => {
      console.log(err);
      return err;
    })
}

function fetchEventVotes(eventId){
  return fetch(`${BASE}/event/${eventId}/votes`)
    .then(resp => resp.json())
    .catch(err => {
      console.log(err);
      return err;
    })
}

export default {
  fetchOldVotes,
  fetchUrlEvent,
  recordVotes,
  fetchEventVotes,
}
