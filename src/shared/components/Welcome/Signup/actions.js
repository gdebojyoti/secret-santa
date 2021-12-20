export const signup = async (data) => {
  // const res = await window.fetch('http://localhost:31291/signup', {
  const res = await window.fetch('https://dx-secret-santa-api.herokuapp.com/signup', {
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