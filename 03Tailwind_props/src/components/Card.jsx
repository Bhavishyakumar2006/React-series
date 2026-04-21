

function Card({name="Bhavishya"}){
 
  
    return(
        <div className="w-xl h-20 rounded-2xl border-2 text-center p-3 pl-6.5 text-white  mb-1 ">
          <img src="lord krishna.jpg" alt="" />
          <p className="w-lg  text-orange-500 text-xl ">
            {name} <span className="text-green-400">kumar</span>
          </p>
          <p className="w-lg  mt-1  ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, modi.
          </p>
        </div>
    )
}
export default Card;