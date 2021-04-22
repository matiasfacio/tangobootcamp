import * as React from 'react';
import javier from '../images/javier-antar.jpg'
import matias from '../images/matias-facio2.jpg'

export interface InstructorsProps {
    
}
 
const Instructors: React.FunctionComponent<InstructorsProps> = () => {
    return ( <section id="instructors">
    <div className="section-title"><h2>Meet the Instructors</h2></div>
    <div className="instructors-container">
      <div className="instructor matias">
        <img src={matias} alt="matias-facio" />
        <div className="name">
          <h2>Matias Facio</h2>
          <div className="rol"><h3>Creator / Instructor</h3></div>
          <div className="description">
            <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat
            voluptatem itaque iure esse soluta laboriosam alias consectetur
            laudantium ab, voluptas porro, suscipit, voluptates optio
            inventore. Maiores officia consequatur iure laborum similique eius
            necessitatibus enim velit quisquam doloribus, dolor nostrum
            molestias magni? Ducimus quas fugiat reprehenderit itaque sit eos
            omnis possimus non architecto soluta inventore totam, praesentium
            fugit eveniet quo ullam quibusdam aperiam aspernatur optio porro
            repellendus quam ipsa suscipit. Incidunt debitis facere sit,
            veritatis reps ipsum dicta, quis velit rem inventore sunt
            perspiciatis facere? Odit magni aperiam ipsum dolorem non id
            obcaecati nobis.
            </p>
          </div>
         
        </div>
      </div>
      <div className="instructor javier">
          <img src={javier} alt="javier-antar" />
        <div className="name">
          <h2>Javier Antar</h2>
          <div className="rol"><h3>Creator / Instructor</h3></div>
          <div className="description">
            <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat
            voluptatem itaque iure esse soluta laboriosam alias consectetur
            laudantium ab, voluptas porro, suscipit, voluptates optio
            inventore. Maiores officia consequatur iure laborum similique eius
            necessitatibus enim velit quisquam doloribus, dolor nostrum
            molestias magni? Ducimus quas fugiat reprehenderit itaque sit eos
            omnis possimus non architecto soluta inventore totam, praesentium
            fugit eveniet quo ullam quibusdam aperiam aspernatur optio porro
            repellendus quam ipsa suscipit. Incidunt debitis facere sit,
            veritatis reps ipsum dicta, quis velit rem inventore sunt
            perspiciatis facere? Odit magni aperiam ipsum dolorem non id
            obcaecati nobis.
            </p>
          </div>
          
        </div>
      </div>
    </div>
  </section> );
}
 
export default Instructors;