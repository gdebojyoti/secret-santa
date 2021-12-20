import { useEffect } from "react"

const AllEvents = () => {
  useEffect(() => {
    // redirect to new event
    window.location.href = './events/new'
  })
  return (
    <div>All Events page</div>
  )
}

export default AllEvents