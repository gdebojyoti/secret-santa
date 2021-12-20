export const getEventDetails = async (id) => {
  const res = await window.fetch(`http://localhost:31291/get-event-details?id=${id}`, {
  // const res = await window.fetch(`https://dx-secret-santa-api.herokuapp.com/get-event-details?id=${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include'
  })

  const response = await res.json()

  return response
}

export const triggerEvent = async (data) => {
  const res = await window.fetch('http://localhost:31291/trigger-event', {
  // const res = await window.fetch('https://dx-secret-santa-api.herokuapp.com/trigger-event', {
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