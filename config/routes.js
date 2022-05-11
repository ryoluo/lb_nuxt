import axios from 'axios'
import { proxyURL } from '../const'

export default async () => {
  const entries = []
  entries.push(
    ...(await axios.get(`${proxyURL}/api/posts/index`).then((res) => {
      return res.data.map((post) => {
        return `/blog/${post.id}`
      })
    }))
  )
  entries.push(
    ...(await axios.get(`${proxyURL}/api/posts/en/index`).then((res) => {
      return res.data.map((post) => {
        return `/blog/en/${post.id}`
      })
    }))
  )
  return entries
}
