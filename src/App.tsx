import Header from './components/Header'
import Entry from './components/Entry'
import data from './data'
import './App.css'

function App() {

  const entryElements = data.map((entry) => {
    return (
            <Entry 
              key={entry.id}
              entry={entry}
            />
    )
  })

  return (
    <>
      <Header />
      <main className='container'>
        {entryElements}
      </main>
    </>
  )
}

export default App
