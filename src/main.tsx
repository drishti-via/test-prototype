import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './app/globals.css'
import Layout from './app/layout'
import Home from './app/page'
import CalculatorPage from './app/calculator/page'
import AboutPage from './app/about/page'
import ContactPage from './app/contact/page'
import PrivacyPage from './app/privacy/page'
import NotFound from './app/not-found'

// Docs pages
import DocsPage from './app/docs/page'
import GettingStartedPage from './app/docs/getting-started/page'
import KeyboardShortcutsPage from './app/docs/keyboard-shortcuts/page'
import ScientificFunctionsPage from './app/docs/scientific-functions/page'

// Blog pages
import BlogListPage from './app/blog/page'
import BlogPostPage from './app/blog/[slug]/page'

// Blog post slugs
const blogSlugs = [
  'introducing-scientific-calculator',
  'understanding-trigonometry',
  'degrees-vs-radians',
  'keyboard-shortcuts-pro-tips',
]

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Layout>
        <Routes>
          {/* Home */}
          <Route path="/" element={<Home />} />

          {/* Calculator */}
          <Route path="/calculator" element={<CalculatorPage />} />

          {/* Docs */}
          <Route path="/docs" element={<DocsPage />} />
          <Route path="/docs/getting-started" element={<GettingStartedPage />} />
          <Route path="/docs/keyboard-shortcuts" element={<KeyboardShortcutsPage />} />
          <Route path="/docs/scientific-functions" element={<ScientificFunctionsPage />} />

          {/* Blog */}
          <Route path="/blog" element={<BlogListPage />} />
          {blogSlugs.map((slug) => (
            <Route
              key={slug}
              path={`/blog/${slug}`}
              element={<BlogPostPage params={{ slug }} />}
            />
          ))}

          {/* Other pages */}
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />

          {/* 404 - keep at the bottom */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  </React.StrictMode>,
)