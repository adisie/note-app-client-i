
// icons
// user
import { FaUserCircle } from "react-icons/fa"
// delete
import { MdDelete } from "react-icons/md"

// main
const SingleNote = () => {
  return (
    <div className="text-xs text-emerald-700 font-serif mb-3 border-b border-emerald-700 border-opacity-[.13] py-1">
        <div className="ml-5 my-1">
            <p className="text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam sequi sapiente, dicta itaque, ea praesentium nemo ex obcaecati exercitationem eos doloribus quia? Quibusdam illum perferendis itaque error voluptatibus ipsa, quasi ut laudantium accusamus odio eos cum aliquam fugiat autem deserunt quis. Perspiciatis qui sapiente neque iure eius eaque beatae officia, explicabo recusandae ratione quis, eligendi, laudantium maxime minus. Dolorem iste id tempora? Fugiat, nisi. Nobis earum blanditiis odit enim atque, optio suscipit iure temporibus laudantium ullam? Exercitationem, nesciunt nihil, dolorem atque aliquam maxime vel quae quibusdam repellendus quaerat, optio placeat doloremque nulla tempore illum. Soluta fugiat autem aperiam expedita ullam.
            </p>
        </div>
        <div className="flex items-center">
            <div className="flex items-center mr-3 cursor-pointer">
                <FaUserCircle className="text-xl mr-1"/>
                <span>username</span>
            </div>
            <div className="flex items-center">
                <button className="mx-1 text-xl opacity-[.5] transition-all ease-in-out duration-300 hover:opacity-[1]">
                    <MdDelete />
                </button>
                <span>date</span>
            </div>
        </div>
    </div>
  )
}

export default SingleNote