import HeroBanner from './components/hero'
import Tiles from './components/tiles'
import About from './components/about'
import SearchBar from './components/search'

export default function Home() {
  return (
    <main>
      <HeroBanner />
      <Tiles />
      <SearchBar />
      <About />
    </main>
  )
}
