import { useState, useEffect, useCallback } from 'react';

const url = 'https://api.github.com/users';

function App() {

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => { // fetch is async if we have any other functions in useEffect, it does them first since the fetch is a WebAPI
    fetch(url)
      .then(res => {
        if (res.status >= 200 && res.status <= 299) return res.json();
        else throw new Error(); // catching status error
      })
      .then(data => {

        if (!(data instanceof Array)) throw new Error(); // catching data error

        setUsers(data);
        setLoading(false);
        setError(false);
      })
      .catch(err => { // catching network error
        setError(true);    
        setLoading(false);  
        setUsers([]);
      });
  },[]);

  const renderUser = useCallback((users) => {
    if(users.length > 0) {
      return users.map(user => {
        const {id, login, avatar_url} = user;
        return (
          <div key={id}>
            <h3>{ login }</h3>
            <img src={avatar_url} alt="" style={{width: '100px', height: '100px'}}/>
          </div>
        )
      })
    } else {
      return "";
    }
  },[])

  return (
    <>
      {loading && <h1>Loading...</h1>}
      {error && <h1>Oops, error occured!</h1>}
      {renderUser(users)}
    </>
  )
}

export default App;