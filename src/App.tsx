import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ArticleList from './components/ArticleList';
import Article from './components/Article';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<ArticleList />} />
          <Route path="/article/:id" element={<Article />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
