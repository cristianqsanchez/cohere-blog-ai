export default function TextArea () {
  return (
    <textarea
      id='result'
      rows='15'
      className='bg-zinc-700 px-6 pb-6 resize-none rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600 max-w-prose'
      readOnly
    />
  )
}
