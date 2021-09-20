import React, {useContext} from 'react'
import Slider from './HomeComponents/Slider'
import GalleryProduct from './HomeComponents/GalleryProduct'
import { GlobalContext } from '../../Context/Context'

function Home() {
    const { products } = useContext(GlobalContext)
    // console.log(products)
    const items = products.map((item) => (
        <GalleryProduct 
            id={item.id}
            img={item.img} price={item.price} 
            title={item.title} text={item.text}
            prodctObject={item}>
        </GalleryProduct>
    ))
    return (
        <div className="main-content">
           <Slider />
            <div className="homeContent">
                <section className="newArrivals">
                    <div className="container heading d-flex justify-content-center">
                        <h4>new arrival</h4>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                            faucibus maximus vehicula. Sed feugiat, tellus vel tristique
                            posuere, diam
                        </p>
                    </div>
                </section>


                <section className="items">
                    <div className="row">{items}</div>
                    {/* <div className="row">
                        <GalleryProduct 
                            img="images/item-img-1-1.jpg" 
                            price={299} title="wooden chair"
                            text="Lorem ipsum dolor sit amet">
                        </GalleryProduct>

                        <GalleryProduct 
                            img="images/item-img-1-2.jpg" 
                            price={299} title="wooden chair"
                            text="Lorem ipsum dolor sit amet">
                        </GalleryProduct>

                        <GalleryProduct 
                            img="images/item-img-1-3.jpg" 
                            price={299} title="wooden chair"
                            text="Lorem ipsum dolor sit amet">
                        </GalleryProduct>

                        <GalleryProduct 
                            img="images/item-img-1-7.jpg" 
                            price={299} title="wooden chair"
                            text="Lorem ipsum dolor sit amet">
                        </GalleryProduct>
                    </div> */}
                </section>
                
            </div>

        </div>
    )
}

export default Home
