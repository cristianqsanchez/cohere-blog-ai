import { useState } from 'react'
import { writeMyPost } from '../../../services/ia'

export default function useLoader () {
  const [loading, setLoading] = useState()

  const handleClick = async (e) => {
    setLoading(true)
    const title = document.getElementById('data').value
    const promise = writeMyPost(title)
    const value = await promise
    document.getElementById('result').value = value
    setLoading(false)
  }
  return { loading, handleClick }
}
