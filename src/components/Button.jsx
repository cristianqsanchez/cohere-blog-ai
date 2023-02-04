import { writeMyPost } from '../services/ia'
import Loader from './icons/Loader'
import { useState } from 'react'

export default function Button () {
  const [loading, setLoading] = useState(false)
  const handleClick = async () => {
    setLoading(true)
    const title = document.getElementById('data').value
    const promise = writeMyPost(title)
    const value = await promise
    document.getElementById('result').value = value
    setLoading(false)
  }
  return loading
    ? (<Loader />)
    : (
      <button
        onClick={handleClick}
        type='button'
        className='text-2xl p-1 pointer-events-auto bg-emerald-600 hover:bg-emerald-700 rounded-lg font-medium hover:font-semibold'
      >
        let's write
      </button>
      )
}
