import { YTSearcher, validOptions } from 'ytsearcher'

const searcher = new YTSearcher({
  key: process.env.YOUTUBE_API_KEY
})

export default async (req, res) => {

  const result = await searcher.search(req.query.keyword || 'beatles', {
    type: 'video',
    maxResults: 6,
  }
  )
  console.log('api call')
  res.status(200).json(result)

}

