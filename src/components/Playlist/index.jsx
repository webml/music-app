import * as S from './Playlist.style'
import Track from '../Track'
import TrackSkeleton from '../TrackSkeleton'
import { useState } from 'react'

const Playlist = () => {
  const [visible, setVisible] = useState(true)

  setTimeout(() => {
    setVisible(false)
  }, 5000)

  return (
    <S.Playlist>
      <S.PlaylistItem>
        <div className="playlist__track">
          {visible ? (
            <TrackSkeleton />
          ) : (
            <Track
              titleLink="http://"
              titleName="Guilt"
              authorLink="http://"
              authorName="Nero"
              albumLink="http://"
              albumName="Welcome Reality"
              time="4:44"
            />
          )}
        </div>
      </S.PlaylistItem>

      <S.PlaylistItem>
        <div className="playlist__track">
          {visible ? (
            <TrackSkeleton />
          ) : (
            <Track
              titleLink="http://"
              titleName="Elektro"
              authorLink="http://"
              authorName="Dynoro, Outwork, Mr. Gee"
              albumLink="http://"
              albumName="Elektro"
              time="2:22"
            />
          )}
        </div>
      </S.PlaylistItem>

      <S.PlaylistItem>
        <div className="playlist__track">
          {visible ? (
            <TrackSkeleton />
          ) : (
            <Track
              titleLink="http://"
              titleName="I’m Fire"
              authorLink="http://"
              authorName="Ali Bakgor"
              albumLink="http://"
              albumName="I’m Fire"
              time="2:22"
            />
          )}
        </div>
      </S.PlaylistItem>

      <S.PlaylistItem>
        <div className="playlist__track">
          {visible ? (
            <TrackSkeleton />
          ) : (
            <Track
              titleLink="http://"
              titleName="Non Stop"
              titleSpan="(Remix)"
              authorLink="http://"
              authorName="Стоункат, Psychopath"
              albumLink="http://"
              albumName="Non Stop"
              time="4:12"
            />
          )}
        </div>
      </S.PlaylistItem>

      <S.PlaylistItem>
        <div className="playlist__track">
          {visible ? (
            <TrackSkeleton />
          ) : (
            <Track
              titleLink="http://"
              titleName="Run Run"
              titleSpan="(feat. AR/CO)"
              authorLink="http://"
              authorName="Jaded, Will Clarke, AR/CO"
              albumLink="http://"
              albumName="Run Run"
              time="2:54"
            />
          )}
        </div>
      </S.PlaylistItem>

      <S.PlaylistItem>
        <div className="playlist__track">
          {visible ? (
            <TrackSkeleton />
          ) : (
            <Track
              titleLink="http://"
              titleName="Eyes on Fire"
              titleSpan="(Zeds Dead Remix)"
              authorLink="http://"
              authorName="Blue Foundation, Zeds Dead"
              albumLink="http://"
              albumName="Eyes on Fire"
              time="5:20"
            />
          )}
        </div>
      </S.PlaylistItem>

      <S.PlaylistItem>
        <div className="playlist__track">
          {visible ? (
            <TrackSkeleton />
          ) : (
            <Track
              titleLink="http://"
              titleName="Mucho Bien"
              titleSpan="(Hi Profile Remix)"
              authorLink="http://"
              authorName="HYBIT, Mr. Black, Offer Nissim, Hi Profile"
              albumLink="http://"
              albumName="Mucho Bien"
              time="3:41"
            />
          )}
        </div>
      </S.PlaylistItem>

      <S.PlaylistItem>
        <div className="playlist__track">
          {visible ? (
            <TrackSkeleton />
          ) : (
            <Track
              titleLink="http://"
              titleName="Knives n Cherries"
              titleSpan=""
              authorLink="http://"
              authorName="minthaze"
              albumLink="http://"
              albumName="Captivating"
              time="1:48"
            />
          )}
        </div>
      </S.PlaylistItem>

      <S.PlaylistItem>
        <div className="playlist__track">
          {visible ? (
            <TrackSkeleton />
          ) : (
            <Track
              titleLink="http://"
              titleName="How Deep Is Your Love"
              titleSpan=""
              authorLink="http://"
              authorName="Calvin Harris, Disciples"
              albumLink="http://"
              albumName="How Deep Is Your Love"
              time="3:32"
            />
          )}
        </div>
      </S.PlaylistItem>

      <S.PlaylistItem>
        <div className="playlist__track">
          {visible ? (
            <TrackSkeleton />
          ) : (
            <Track
              titleLink="http://"
              titleName="Morena"
              titleSpan=""
              authorLink="http://"
              authorName="Tom Boxer"
              albumLink="http://"
              albumName="Soundz Made in Romania"
              time="3:36"
            />
          )}
        </div>
      </S.PlaylistItem>
    </S.Playlist>
  )
}

export default Playlist
