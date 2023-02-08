import useLoader from './hooks/useLoader'
import Loader from '../icons/Loader'

export default function Button () {
  const { loading, handleClick } = useLoader()
  return loading
    ? (<Loader />)
    : (
      <button
        onClick={handleClick}
        type='button'
        className='text-2xl p-1 pointer-events-auto bg-emerald-600 hover:bg-emerald-700 rounded-lg font-medium hover:font-semibold'
      >
        let's write
      </button>)
}
