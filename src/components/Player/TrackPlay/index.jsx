import { useTrackContext } from '../../../player'
import * as S from './TrackPlay.style'

const TrackPlay = () => {
  const { track } = useTrackContext()
  return (
    <S.TrackPlay>
      <S.TrackPlayContain>
        <S.TrackPlayImage>
          <S.TrackPlaySvg alt="music">
            <use xlinkHref="/img/icon/sprite.svg#icon-note"></use>
          </S.TrackPlaySvg>
        </S.TrackPlayImage>
        <S.TrackPlayAuthor>
          <S.TrackPlayAuthorLink href="http://">
            {track.name}
          </S.TrackPlayAuthorLink>
        </S.TrackPlayAuthor>
        <S.TrackPlayAlbum>
          <S.TrackPlayAlbumLink href="http://">
            {track.author}
          </S.TrackPlayAlbumLink>
        </S.TrackPlayAlbum>
      </S.TrackPlayContain>

      <S.TrackPlayLikeDislike>
        <S.BtnIcon>
          <S.TrackPlayLikeSvg alt="like">
            <use xlinkHref="/img/icon/sprite.svg#icon-like"></use>
          </S.TrackPlayLikeSvg>
        </S.BtnIcon>
        <S.BtnIcon>
          <S.TrackPlayDislikeSvg alt="dislike">
            <use xlinkHref="/img/icon/sprite.svg#icon-dislike"></use>
          </S.TrackPlayDislikeSvg>
        </S.BtnIcon>
      </S.TrackPlayLikeDislike>
    </S.TrackPlay>
  )
}

export default TrackPlay
