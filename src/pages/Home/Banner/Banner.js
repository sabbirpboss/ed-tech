import Carousel from 'react-bootstrap/Carousel';
import banner1 from "../../../assets/banner/bannerOne.jpg";
import banner2 from "../../../assets/banner/bannerTwo.jpg";
import banner3 from "../../../assets/banner/bannerThree.jpg";
import './Banner.css';

function Banner() {
  return (
    <Carousel>
      <Carousel.Item className='position-relative' interval={2000}>
        <img
          className="d-block w-100"
          src={banner1}
          alt="First slide"
        />
        <div className='ed-overlay text-center'>
          <div className='position-absolute bottom-25 w-50 mx-auto'>
            <h3 className='border-bottom border-white pb-3 lh-sm'><span className='ed-fs-1'>Learn MERN</span> <br /><span className='ed-fs-2'>Like a Pro!</span></h3>
            <p className='lh-base'>This tutorial will show you how to build a full-stack MERN application—in this case, an employee database—with the most current tools available. The full code is available on this GitHub repo.</p>
          </div>
        </div>

      </Carousel.Item>
      <Carousel.Item className='position-relative' interval={3000}>
        <img
          className="d-block w-100"
          src={banner2}
          alt="First slide"
        />
        <div className='ed-overlay text-center'>
          <div className='position-absolute bottom-25 w-50 mx-auto'>
            <h3 className='border-bottom border-white pb-3 lh-sm'><span className='ed-fs-1'>Learn MERN</span> <br /><span className='ed-fs-2'>Like a Pro!</span></h3>
            <p className='lh-base'>This tutorial will show you how to build a full-stack MERN application—in this case, an employee database—with the most current tools available. The full code is available on this GitHub repo.</p>
          </div>
        </div>

      </Carousel.Item>
      <Carousel.Item className='position-relative' interval={3000}>
        <img
          className="d-block w-100"
          src={banner3}
          alt="First slide"
        />
        <div className='ed-overlay text-center'>
          <div className='position-absolute bottom-25 w-50 mx-auto'>
            <h3 className='border-bottom border-white pb-3 lh-sm'><span className='ed-fs-1'>Learn MERN</span> <br /><span className='ed-fs-2'>Like a Pro!</span></h3>
            <p className='lh-base'>This tutorial will show you how to build a full-stack MERN application—in this case, an employee database—with the most current tools available. The full code is available on this GitHub repo.</p>
          </div>
        </div>

      </Carousel.Item>
    </Carousel>
  );
}

export default Banner;