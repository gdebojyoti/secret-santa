export const createEvent = async (data) => {
  // const res = await window.fetch('http://localhost:31291/create-event', {
  const res = await window.fetch('https://dx-secret-santa-api.herokuapp.com/create-event', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify(data)
  })

  const response = await res.json()

  return response
}