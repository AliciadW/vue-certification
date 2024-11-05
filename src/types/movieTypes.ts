export interface MovieObject {
  description: string
  genres: string[]
  id: number
  image: string
  inTheaters: boolean
  name: string
  rating: number | null
}

export interface GenreObject {
  text: string
  value: string
}
