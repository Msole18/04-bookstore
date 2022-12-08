import { Route, Routes, BrowserRouter } from 'react-router-dom';
import CreatePage from './pages/CreatePage';
import IndexPage from './pages/IndexPage';
import ViewPage from './pages/ViewPage';

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<IndexPage/>}/>
          <Route path='create' element={<CreatePage/>}/>
          <Route path='view/:bookId' element={<ViewPage/>}/>
      </Routes>    
    </BrowserRouter>
  )
}

export default App;
