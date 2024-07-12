import './Hero.css'
import oimg from '../Assets/Photos/modelboy.png'
function Hero(){
    return(
        <div className='hero'>
        <div className="hero-left">
            <h1>Exclusive</h1>
            <h1>Offers For You</h1>
            <p>ONLY BEST SELLER PRODUCTS</p>
            <button>Check Now</button>
        </div>
        <div className="hero-right">
            <img height="500px" className='model-img' src={oimg} alt="" />
        </div>
    </div>
  
    );
}

export default Hero;