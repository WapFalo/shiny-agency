import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Survey from './pages/Survey'
import Results from './pages/Results'
import Freelances from './pages/Freelances'
import Header from './components/Header'
import Footer from './components/Footer'
import Profile from './pages/Profile'
import Error from './components/Error'
import GlobalStyle from './utils/style/GlobalStyle'
import { ThemeProvider, SurveyProvider } from './utils/context'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider>
        <SurveyProvider>
          <GlobalStyle />
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route path="/survey/:questionNumber" element={<Survey />}></Route>
            <Route path="/results" element={<Results />}></Route>
            <Route path="/freelances" element={<Freelances />}></Route>
            <Route path="/profile/:id" element={<Profile />}></Route>
            <Route path="*" element={<Error />}></Route>
          </Routes>
          <Footer />
        </SurveyProvider>
      </ThemeProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
)
