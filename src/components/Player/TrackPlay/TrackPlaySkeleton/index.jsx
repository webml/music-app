import * as S from '../TrackPlay.style'

const TrackPlay = () => {
  return (
    <S.TrackPlay>
      <S.TrackPlayContain>
        <svg
          id="player"
          width="122"
          height="52"
          viewBox="0 0 122 52"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect y="0.490723" width="51" height="51" fill="#313131" />
          <rect x="63" y="29.4907" width="59" height="15" fill="#313131" />
          <rect x="63" y="7.49072" width="59" height="15" fill="#313131" />
        </svg>
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
