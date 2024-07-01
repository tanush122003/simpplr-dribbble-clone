import React, { useState } from 'react';
import CategoryMenu from './components/CategoryMenu/CategoryMenu';
import Header from './components/Header/Header';
import ContentGrid from './components/ContentGrid/ContentGrid'
import Footer from './components/Footer/Footer';

const App = () => {
  const [filter, setFilter] = useState('popular');
  const [category, setCategory] = useState('following');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="App">
      <Header setFilter={setFilter} setSearchQuery={setSearchQuery} />
      <CategoryMenu setCategory={setCategory} />
      <ContentGrid filter={filter} category={category} searchQuery={searchQuery} />
      <Footer />
    </div>
  );
};

export default App;

