import * as S from './Volume.style'

const Volume = () => {
  return (
    <div className="volume">
      <S.VolumeContent>
        <S.VolumeImage>
          <S.VolumeSvg alt="volume">
            <use xlinkHref="/img/icon/sprite.svg#icon-volume"></use>
          </S.VolumeSvg>
        </S.VolumeImage>
        <S.VolumeProgress>
          <S.VolumeProgressLine type="range" name="range" />
        </S.VolumeProgress>
      </S.VolumeContent>
    </div>
  )
}

export default Volume
