import { getLastPlayed } from '../../lib/spotify'

export default async (_, res) => {
  const response = await getLastPlayed()
  const items = await response.json()

  const song = items.items[0]
  const title = song.track.name
  const artist = song.track.artists.map((_artist) => _artist.name).join(', ')
  const album = song.track.album.name
  const albumImageUrl = song.track.album.images[0].url
  const songUrl = song.track.external_urls.spotify




  res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate=43200')

  return res.status(200).json({
    album,
    albumImageUrl,
    artist,
    songUrl,
    title,
  })
}