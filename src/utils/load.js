import axios from 'axios'

export const fetchData = async () => {
  let i = 1

  const { data } = await axios.get(
    `https://api.nasa.gov/neo/rest/v1/neo/browse?&api_key=13pXLUuM2m0XWLNxC6IG7DSVdQpYoRAFltJnShBc&page=${i}&size=20`
  )
  i = i + 1
  return data
}
