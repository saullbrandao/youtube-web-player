import { YTSearcher, validOptions } from 'ytsearcher'

const searcher = new YTSearcher({
  key: process.env.YOUTUBE_API_KEY
})

const result = {
  currentPage: [
    {
      kind: 'youtube#video',
      url: 'https://www.youtube.com/watch?v=yJyClObyUOs',
      id: 'yJyClObyUOs',
      channelId: 'UCVmfxGk1DWcb8AUAOpsD8-A',
      title: 'Best The Beatles Songs Collection',
      description: 'If you have any problem with copyright issues, please CONTACT US DIRECTLY before doing anything, or question please write to me in email.',
      thumbnails: {
        default: { url: 'https://i.ytimg.com/vi/yJyClObyUOs/default.jpg' }
      },
      channelTitle: 'Greatest Hits Music',
      liveBroadcastContent: 'none'
    },
    {
      kind: 'youtube#video',
      url: 'https://www.youtube.com/watch?v=NCtzkaL2t_Y',
      id: 'NCtzkaL2t_Y',
      channelId: 'UC4dqLAF7yT-_DqeYisQ001w',
      title: 'The Beatles - Don&#39;t Let Me Down',
      description: 'Written by John as an expression of his love for Yoko Ono, the song is heartfelt and passionate. As John told Rolling Stone magazine in 1970, “When it gets ...',
      thumbnails: {
        default: { url: 'https://i.ytimg.com/vi/yJyClObyUOs/default.jpg' }
      },
      channelTitle: 'TheBeatlesVEVO',
      liveBroadcastContent: 'none'
    },
    {
      kind: 'youtube#video',
      url: 'https://www.youtube.com/watch?v=A_MjCqQoLLA',
      id: 'A_MjCqQoLLA',
      channelId: 'UC4dqLAF7yT-_DqeYisQ001w',
      title: 'The Beatles - Hey Jude',
      description: 'Hey Jude topped the charts in Britain for two weeks and for 9 weeks in America, where it became The Beatles longest-running No.1 in the US singles chart as ...',
      thumbnails: {
        default: { url: 'https://i.ytimg.com/vi/yJyClObyUOs/default.jpg' }
      },
      channelTitle: 'TheBeatlesVEVO',
      liveBroadcastContent: 'none'
    },
    {
      kind: 'youtube#video',
      url: 'https://www.youtube.com/watch?v=2Q_ZzBGPdqE',
      id: '2Q_ZzBGPdqE',
      channelId: 'UC4dqLAF7yT-_DqeYisQ001w',
      title: 'The Beatles - Help!',
      description: 'Music video by The Beatles performing Help!. © 2015 Calderstone Productions Limited (a division of Universal Music Group) / Subafilms Ltd ...',
      thumbnails: {
        default: { url: 'https://i.ytimg.com/vi/yJyClObyUOs/default.jpg' }
      },
      channelTitle: 'TheBeatlesVEVO',
      liveBroadcastContent: 'none'
    },
    {
      kind: 'youtube#video',
      url: 'https://www.youtube.com/watch?v=jenWdylTtzs',
      id: 'jenWdylTtzs',
      channelId: 'UC4dqLAF7yT-_DqeYisQ001w',
      title: 'The Beatles - I Want To Hold Your Hand ',
      description: "'I Want to Hold Your Hand' was the first Beatles' record to top both the UK and the US charts. It was also their first to be recorded on a 4-track, as opposed to the ...",
      thumbnails: {
        default: { url: 'https://i.ytimg.com/vi/yJyClObyUOs/default.jpg' }
      },
      channelTitle: 'TheBeatlesVEVO',
      liveBroadcastContent: 'none'
    },
    {
      kind: 'youtube#video',
      url: 'https://www.youtube.com/watch?v=45cYwDMibGo',
      id: '45cYwDMibGo',
      channelId: 'UC4dqLAF7yT-_DqeYisQ001w',
      title: 'The Beatles - Come Together',
      description: 'Music video by The Beatles performing Come Together. © 2015 Calderstone Productions Limited (a division of Universal Music Group) / Apple Films Ltd.',
      thumbnails: {
        default: { url: 'https://i.ytimg.com/vi/yJyClObyUOs/default.jpg' }
      },
      channelTitle: 'TheBeatlesVEVO',
      liveBroadcastContent: 'none'
    }
  ]
}

export default async (req, res) => {

  // const result = await searcher.search(req.query.keyword || 'beatles', {
  //   type: 'video',
  //   maxResults: 6,
  // })

  console.log('api call')
  res.status(200).json(JSON.stringify(result))

}

