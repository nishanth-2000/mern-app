import React, { useState, useEffect } from 'react';
import DataTable from '../components/DataTable';
import { fetchData } from '../utils/api';

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData()
      .then(response =>{
        setData(response)
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>Data Table</h1>
      <DataTable data={data} />
    </div>
  );
};

export default Home;
