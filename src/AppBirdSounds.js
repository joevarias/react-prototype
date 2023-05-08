import bird1 from "./assets/bird_sounds/mixkit-bird-singing-and-flapping-wings-2432.wav"
import bird2 from "./assets/bird_sounds/mixkit-double-little-bird-chirp-21.wav"
import bird3 from "./assets/bird_sounds/mixkit-forest-bird-singing-1211.wav"

export default function App() {
  return (
    <div>
      <audio controls>
        <source src={bird1} />
      </audio>
      <audio controls>
        <source src={bird2} />
      </audio>
      <audio controls>
        <source src={bird3} />
      </audio>
    </div>
  )
}
