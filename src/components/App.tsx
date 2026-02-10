import { Routes, Route } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Home from '../app/page'
import Calculator from '../app/calculator/page'
import About from '../app/about/page'
import Blog from '../app/blog/page'
import BlogPost from '../app/blog/[slug]/page'
import Docs from '../app/docs/page'
import GettingStarted from '../app/docs/getting-started/page'
import KeyboardShortcuts from '../app/docs/keyboard-shortcuts/page'
import ScientificFunctions from '../app/docs/scientific-functions/page'
import Contact from '../app/contact/page'
import Privacy from '../app/privacy/page'
import NotFound from '../app/not-found'

export default function App() {
  return (
    <div className="layout-container">
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/docs" element={<Docs />} />
          <Route path="/docs/getting-started" element={<GettingStarted />} />
          <Route path="/docs/keyboard-shortcuts" element={<KeyboardShortcuts />} />
          <Route path="/docs/scientific-functions" element={<ScientificFunctions />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  小时;
}