// Dependencies
import express from 'express'
import open from 'open'
import opn from 'opn'
import path from 'path'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import webpackHotServerMiddleware from 'webpack-hot-server-middleware'

import { isMobile } from '../shared/utils/device'

// Webpack Configuration
import webpackConfig from '../../webpack.config'

// Environment
const isDevelopment = process.env.NODE_ENV !== 'production'

// Analyzer
const isAnalyzer = process.env.ANALYZER === 'true'

// Express app
const app = express()
const compiler = webpack(webpackConfig)
const port = process.env.NODE_PORT || 3000

if (!isDevelopment) {
  app.get('*.js', (req, res, next) => {
    req.url = `${req.url}.gz`
    res.set('Content-Encoding', 'gzip')

    next()
  })
}

// Public static
app.use(express.static(path.join(__dirname, '../../public')))

// Device Detection
app.use((req, res, next) => {
  req.isMobile = isMobile(req.headers['user-agent'])

  return next()
})

if (isDevelopment) {
  // Hot Module Replacement
  app.use(webpackDevMiddleware(compiler))
  app.use(webpackHotMiddleware(compiler.compilers.find(compiler => compiler.name === 'client')))
  app.use(webpackHotServerMiddleware(compiler))
} else {
  try {
    const serverRender = require('../../dist/server.js').default

    app.use(serverRender())
  } catch (e) {
    throw e
  }
}

// Listening
app.listen(port, err => {
  if (!err && !isAnalyzer) {
    opn(`http://localhost:${port}`, {app: 'google chrome'})
  }
})
