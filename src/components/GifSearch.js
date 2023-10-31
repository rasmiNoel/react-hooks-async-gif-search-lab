import React, { useState } from 'react'

function GifSearch({ onSubmit }) {
  const [query, setQuery] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit(query)
    
  }

  return (
    <form onSubmit={handleSubmit}>
    <label>Enter a Search Term:</label>
      <input
        type="text"
        value={query}
        onChange={event => setQuery(event.target.value)}
      />
      <button type="submit">Find Gifs</button>
    </form>
  )
}

export default GifSearch