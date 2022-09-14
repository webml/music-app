import './style.css'

const TrackSkeleton = () => {
  return (
    <svg className="track-skeleton" alt="music">
      <use xlinkHref="img/skeleton/track.svg#track"></use>
    </svg>
  )
}

export default TrackSkeleton
