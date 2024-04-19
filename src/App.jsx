import React, { useEffect, useState } from 'react'
import './App.css'
import { callApi } from './controller/controller';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      const data = await callApi();

      setData(data);
    };

    fetch();
  }, []);

  const onClick = async () => {
    const res = await callApi();

    setData(res);
  }

  return (
    <div className="card">

      <p>
        {data && data.activity}
      </p>

      { data && data.link && <a href={data.link}>Click Here To Read More About The Activity</a> }

      <button onClick={onClick}>
        Click Here To Get An Activity
      </button>
    </div>
  )
}

export default App
