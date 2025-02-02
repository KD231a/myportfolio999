// App.js
import { useState } from 'react';
import { set, ref } from 'firebase/database';
import { database } from '../components/firebase';

function App() {
  const [data, setData] = useState({ name: '', message: '' });

  const handleWriteData = () => {
    set(ref(database, 'messages/' + data.name), {
      message: data.message,
    }).then(() => {
      console.log('Data written successfully!');
    }).catch((error) => {
      console.error('Error writing data: ', error);
    });
  };

  return (
    <div>
      <h1>Write to Firebase</h1>
      <input
        type="text"
        placeholder="Enter name"
        value={data.name}
        onChange={(e) => setData({ ...data, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="Enter message"
        value={data.message}
        onChange={(e) => setData({ ...data, message: e.target.value })}
      />
      <button onClick={handleWriteData}>Write Data</button>
    </div>
  );
}

export default App;
