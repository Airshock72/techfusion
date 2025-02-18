import './index.css'
import { HashRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import App from 'src/App.tsx'

const createElement = document.createElement('div')
createElement.className = 'flex flex-col'
createElement.id = 'root'
document.body.appendChild(createElement)

const domNode = document.getElementById('root') as HTMLDivElement
const root = createRoot(domNode)

root.render(
  <HashRouter>
    <App />
  </HashRouter>
)
