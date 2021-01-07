import * as React from 'react';
import video1 from '../images/Volcada.mp4'
import video2 from '../images/PasitoDeLosMiercoles.mp4'

export interface DemoProps {
    
}
 
const Demo: React.FunctionComponent<DemoProps> = () => {
    return ( <section id="section-sample">
    <div className="section-container">
      <div className="section-title"><h2>Demo 1</h2></div>
      <div className="video-container">
        <video autoPlay muted>
          <source src={video2} type="video/mp4" />
        </video>
        <div className="video-description">
          <div>
            <h2>Circles & Line Combinations</h2>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Consequatur ex dignissimos laborum assumenda quibusdam autem culpa
            recusandae ut ipsam, voluptatem distinctio, quaerat hic deleniti
            molestias quas magnam cum animi saepe, aspernatur ducimus placeat!
            Aperiam ipsa mollitia placeat repellendus ipsam quis esse fuga
            tempore laborum reprehenderit eligendi dolor fugit, iste
            exeritatatum enim nisi itaque corrupti!
          </div>
          <button id="btn-watchmore">Watch more</button>
        </div>
      </div>
    </div>
    <div className="section-container">
      <div className="section-title"><h2>Demo 2</h2></div>
      <div className="video-container">
        <video autoPlay muted>
          <source src={video1} type="video/mp4" />
        </video>
        <div className="video-description">
          <div>
            <h2>Circles & Line Combinations II</h2>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Consequatur ex dignissimos laborum assumenda quibusdam autem culpa
            recusandae ut ipsam, voluptatem distinctio, quaerat hic deleniti
            molestias quas magnam cum animi saepe, aspernatur ducimus placeat!
            Aperiam ipsa mollitia placeat repellendus ipsam quis esse fuga
            tempore laborum reprehenderit eligendi dolor fugit, iste
            exeritatatum enim nisi itaque corrupti!
          </div>
          <button id="btn-watchmore">Watch more</button>
        </div>
      </div>
    </div>
  </section> );
}
 
export default Demo;