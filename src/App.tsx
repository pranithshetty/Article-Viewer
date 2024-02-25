import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ArticleList from './components/ArticleList';
import Article from './components/Article';
import Test1 from './components/Test1';
import Test2 from './components/Test2';
import { Provider } from 'react-redux';
import { store } from './store/store'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Test1 />} />
          <Route path="/article/:id" element={<Test2 />} />
        </Routes>
      </Router>
    </Provider>
  )
}

export default App
