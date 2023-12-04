import { InfoOutlined, PlayArrow } from '@material-ui/icons';
import './featured.scss';

const Featured = ({type}) => {
  return (
    <div className='featured'>
      {
        type && (
          <div className='category'>
            <span>{type === "movie" ? "Movies" : "Series"}</span>
            <select name="genre" id="genre">
              <option>Genre</option>
              <option value="adventure">Adventure</option>
              <option value="comedy">cCmedy</option>
              <option value="crime">Crime</option>
              <option value="fantasy">Fantasy</option>
              <option value="historical">Historical</option>
              <option value="horror">Horror</option>
              <option value="romance">Romance</option>
              <option value="sci-fi">Sci</option>
              <option value="western">Western</option>
              <option value="animation">Animation</option>
              <option value="drama">Drama</option>
              <option value="documentary">Documentary</option>
            </select>
          </div>
        )
      }
      <img 
      src="https://dimg.donga.com/wps/NEWS/IMAGE/2022/01/28/111500268.2.jpg" alt="" />
      <div className="info">
        <img src="https://www.liblogo.com/img-logo/ma6578tf70-matrix-logo-the-matrix-logo-matrix-movie-logo-png-full-size-png-download.png" alt="" />
        <span className="desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam velit quaerat aperiam ipsa vel error, nisi commodi officiis. Quisquam in tempore est totam, exercitationem eum vero. Quas explicabo accusamus eveniet?</span>
        <div className="buttons">
          <button className="play">
            <PlayArrow/>
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlined/>
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Featured;
