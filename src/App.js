import './App.css';
import Header from './components/Header.js';
import Sidebar from './components/Sidebar.js';
import Table from './components/TableComponent.js';
import SearchBar from './components/SearchBar.js';
//import data from './components/TableData.js'
import { useState } from 'react';
import FetchData from './api/FetchData.js';

function App() {

  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSelectCategory = async (category) => {

    setSelectedCategory(category);

    if(category === "Settings"){
      setSelectedCategory("Settings");
      return;
    }

    console.log("Helloooo");
    setLoading(true);
    setError(null);
    try {
        const response = await FetchData(category);
        const data = await response.json();
        console.log("Data : ",data);
        console.log("Hi testing testing");
        setData(data);
    } catch (err) {
        setError('Failed to fetch data');
    }
    setLoading(false);
};
  
  return (
    
    <div className='App'>

      <Header/>

      <div className='content'>

        <Sidebar onSelectCategory={handleSelectCategory}/> 

        <div className='table-container'> 

          {selectedCategory === 'Settings' ? (

            <div>
              <h2> Settings </h2>
            </div>

          ) : (
          
          <div>

              <SearchBar search={search} setSearch={setSearch}/>

              <div className='table-display'>
                  <Table data={data} search={search}/>
              </div>

          </div>

          )}

        </div>

      </div>

    </div>

  );
}

export default App;
