import { YTSearcher, validOptions } from 'ytsearcher'
// import search from 'youtube-search'

const searcher = new YTSearcher({
  key: process.env.YOUTUBE_API_KEY
})

// const options = {
//   maxResults: 6,
//   key: process.env.YOUTUBE_API_KEY
// }
export default async (req, res) => {

  const result = await searcher.search(req.query.keyword || 'beatles', {
    type: 'video',
    maxResults: 6,
  }
  )
  console.log(result)
  res.status(200).json(result)
  // await search(req.query.keyword || 'beatles', options, (err, results) => {
  //   if (err) {
  //     console.log(err)
  //     return res.status(400);
  //   }
  //   console.log('ok')
  //   res.status(200).json(results)
  // })
}

