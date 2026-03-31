import { ProductCard } from '@yosang/react-ui'

export default function App () {
    const data = [
        { 
            image:"https://www.fjellsport.no/assets/blobs/vj-ultra3-lime-1-8d0494608e.jpeg?preset=medium",
            title:"VJ Sport",
            description: "Ultra 3.1 Lime",
            price: "2 700"
        },
        { 
            image:"https://www.fjellsport.no/assets/blobs/jq4441-1-footwear-photography-side-lateral-center-view-white-1e99ef5095.jpeg?preset=medium",
            title:"Adidas Adizero",
            description: "Evo Sl Woven M Ftwwht/magold/cblack",
            price: "1 749"
        },
        { 
            image:"https://www.fjellsport.no/assets/blobs/s21070-141-1-0b3c7ef798.jpeg?preset=medium",
            title:"Saucony Endorphin",
            description: "Azura M Sage/laurel",
            price: "2 000"
        },
        { 
            image:"https://www.fjellsport.no/assets/blobs/vj-ultra3-lime-1-8d0494608e.jpeg?preset=medium",
            title:"VJ Sport",
            description: "Ultra 3.1 Lime",
            price: "2700"
        },
        { 
            image:"https://www.fjellsport.no/assets/blobs/vj-ultra3-lime-1-8d0494608e.jpeg?preset=medium",
            title:"VJ Sport",
            description: "Ultra 3.1 Lime",
            price: "2700"
        },
        { 
            image:"https://www.fjellsport.no/assets/blobs/vj-ultra3-lime-1-8d0494608e.jpeg?preset=medium",
            title:"VJ Sport",
            description: "Ultra 3.1 Lime",
            price: "2700"
        },
        { 
            image:"https://www.fjellsport.no/assets/blobs/vj-ultra3-lime-1-8d0494608e.jpeg?preset=medium",
            title:"VJ Sport",
            description: "Ultra 3.1 Lime",
            price: "2700"
        },
        { 
            image:"https://www.fjellsport.no/assets/blobs/vj-ultra3-lime-1-8d0494608e.jpeg?preset=medium",
            title:"VJ Sport",
            description: "Ultra 3.1 Lime",
            price: "2700"
        },
        { 
            image:"https://www.fjellsport.no/assets/blobs/vj-ultra3-lime-1-8d0494608e.jpeg?preset=medium",
            title:"VJ Sport",
            description: "Ultra 3.1 Lime",
            price: "2700"
        }
    ]
    return (
        <>
        <div 
            style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                gap: "20px",
                width: "100%"
            }}
        >
        {data.map(p => (
            <ProductCard discount={p.discount} image={p.image} title={p.title} description={p.description} price={p.price} />
        ))}
        </div>
        </>
    )
}