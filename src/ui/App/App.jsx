import React, { useEffect, useState } from 'react'

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json'
}

const codeStyle = {
  color: 'white',
  textAlign: 'left'
}

const apiRoot = (apiEnv) => {
  return apiEnv = 'production' ? 'https://klequis-todo.tk' : 'http://localhost:3030'
}

function App() {
  const [data, setData] = useState()
  const [apiStatus, setApiStatus] = useState('')

  useEffect(() => {
    const getData = async () => {
      const r1 = await fetch(`${apiRoot('production')}`, { headers })
      // const status = `${r1.status} - ${r1.statusText}`
      console.log(status)
      setApiStatus(status)
      console.log('r1', r1)
      const d = await r1.json()
      setData(d)
    }
    getData()
  }, [])

  return (
    <div>
      <h1>Hi</h1>
      <div>
        <b>api status: </b> {apiStatus}
      </div>
      <hr />
      <div>
        <h4>Returned Message</h4>
        <pre style={codeStyle}>{JSON.stringify(data, null, 4)}</pre>
      </div>
    </div>
  )
}

export default App
