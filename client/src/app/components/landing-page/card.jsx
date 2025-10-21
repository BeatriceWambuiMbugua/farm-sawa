import Image from "next/image";

const Card = ({image, text}) => {
    return ( 
        <div className="bg-white rounded-lg shadow-sm overflow-hidden w-80">
            <Image src={image} alt="Card Image" width={500} height={192} className="w-full h-48 object-cover"/>
            <div className="p-4">
                <p className="text-[#29572C] font-mono font-bold">{text}</p>
            </div>
        </div>
     );
}
 
export default Card;