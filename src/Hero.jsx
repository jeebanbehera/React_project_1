import "./Hero.css"

export default function Hero(){
    return(
        <main className="hero">
            <div className="heroContent">
                <h1>YOUR FEET DESERVE THE BEST</h1>
                <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
                <div className="heroButton">
                    <button>Shop Now</button>
                    <button className="secondary_btn">Category</button>
                </div>
                <div className="shop">
                    <p>Also Available On</p>
                    <img src="./flipkart.png" alt="shop" />
                    <img src="./amazon.png" alt="amazon" />
                </div>
            </div>

            <div className="heroShoe">
                <div className="shoe">
                    <img src="./shoe_image.png" alt="shoe" />
                </div>
            </div>
        </main>
    )
}