import { useState } from 'react';
import data from './data';


function List({ users, search }) {

  const filtered = users.filter(user => {
    if (search === '') {
      return '';
    } else {
      return (
        user.country.toLowerCase().includes(search.toLowerCase()) ||
        user.first.toLowerCase().includes(search.toLowerCase()) ||
        user.gender.toLowerCase().includes(search.toLowerCase())
      )
    }
  })

  return (
    <>
      {
        filtered.map(user => (
          <div className='results' key={user.id}>
            <p><b>Name: </b>{user.first} {user.last}</p>
            <p><b>Country: </b>{user.country}</p>
            <p><b>Email: </b>{user.email}</p>
          </div>
        ))
      }
    </>
  )
}

function App() {
  const [search, setSearch] = useState('');
  const [users] = useState(data);

  return (
    <div className="App">
      <h2>Search users from local DB.</h2>
      <input 
        type="text"
        placeholder='Search: spain, finland...male...Helly'
        onChange={e => setSearch(e.target.value)}
      />
      <List users={users} search={search}/>
    </div>
  );
}

export default App;
