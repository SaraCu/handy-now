import { useState } from 'react'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import './App.css'
import Categories from './components/Categories'
import CategoryPage from './components/CategoryPage'
import Chat from './components/Chat'
import HandymanProfile from './components/HandymanProfile'
import LandingPage from './components/LandingPage'

function App() {
  const [location, setLocation] = useState('');
  const [category, setCategory] = useState('');

  const handleLocationInput = childData => {
    setLocation(childData);
  }
  
  const handleCategory = (category) => {
    setCategory(category);
  }

  return (
    <div className="App">
      <Routes>
        <Route path='/home' element={<LandingPage parentCallback={handleLocationInput} />} />
        <Route path='/categories' element={<Categories  parentCallBack={handleCategory} location={location} />} />
        <Route path='/category' element={<CategoryPage location={location} category={category} />} />
        <Route path='/profile' element={<HandymanProfile />} />
        <Route path='/chat' element={<Chat />} />
      </Routes>
     </div>
  )
}

export default App
