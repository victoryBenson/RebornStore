import { useState } from "react";
import { truncateString } from "../utils";
import Modal from "react-responsive-modal";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";


let backendURL
if (process.env.NODE_ENV === 'production') {
    backendURL = "https://rebornv2api.onrender.com/api/v1/products/";
} else{
    backendURL = "http://localhost:3000/api/v1/products/";
}
// console.log(backendURL)

export const Items = ({item}) => {
    const {image, name, quantity, category, brand, description, _id} = item
    const [open, setOpen] = useState(false);
    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);
    const [loading, setLoading] = useState(false)
    const [errorMsg, setErrorMsg] = useState()
    const {id} = useParams()

    //scroll to top
    const scrollToTop = () =>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

      //deleteProduct 
    const handleDelete = async(e) => {
        e.preventDefault()
        setLoading(true)

        try {
            const config = {
                headers: {
                  "Content-Type": "application/json",
                },
              };
      
              await axios.delete(`${backendURL}deleteProduct/${_id}`, config);
               setLoading(false)
              toast.success("Product deleted successfully")
              location.reload()
              return
        } catch (error) {
            setErrorMsg(error.message)
            console.log(error.message)
            toast.error(error.message) 
            setLoading(false)
        }
    }

    return(
        <div  className=" my-4 group transition-all  ">
            <div className="flex space-x-2 items-center justify-around bg-white h-40 p-2 md:px-5  md:mx-5 rounded shadow" >
                <div className="w-20 :w-40 sm:w-60 h-full flex justify-center items-center">
                    <div className=" flex justify-center h-full ">
                        <img
                            src={image[0]}
                            alt="image"
                            className="w-full h-full object-contain rounded-lg"
                        />
                    </div>
                </div>
                <div className="h-full w-full flex items-center justify-center">
                    <div className="w-full md:space-y-2">
                        <p className="text-center gap-1 flex items-center">
                            <span className="font-semibold text-sm">Name:</span>
                            <p className="capitalize text-sm">{truncateString(name, 20)}</p>
                        </p>
                        <p className="text-center flex items-center gap-4">
                            <p className="flex items-center gap-1">
                                <span className="font-semibold text-sm">Quantity:</span>
                                <p className="text-sm">{quantity.toLocaleString()}</p>
                            </p>
                            <p className="text-center gap-1 flex items-center">
                                <span className="font-semibold text-sm">Category:</span>
                                <p className="capitalize text-sm">{category}</p>
                            </p>
                        </p>
                        <p className="text-center gap-1 flex items-center">
                            <span className="font-semibold text-sm">Brand:</span>
                            <p className="capitalize text-sm">{brand}</p>
                        </p>
                        <div className=' space-x-2 sm:space-x-4 cursor-pointer'>
                            <button onClick={onOpenModal} className=' border border-gray/10 rounded md:p-2 md:px-4 text-sm p-1 cursor-pointer'> Preview</button>
                            <Modal open={open} 
                                center 
                                onClose={onCloseModal}
                                classNames={{
                                overlay: 'bg-black/10 customOverlay ', 
                                modal: ' md:w-1/2 w-5/6 mx-auto h-1/2 md:h-1/2 no-scrollbar transition-all shadow-sm rounded-xl ',
                                overlayAnimationIn: 'customEnterOverlayAnimation',
                                overlayAnimationOut: 'customLeaveOverlayAnimation',
                                modalAnimationIn: 'customEnterModalAnimation',
                                modalAnimationOut: 'customLeaveModalAnimation',
                                }}
                                animationDuration={100}
                                >
                                <div className='flex items-center justify-center w-full'>
                                    <div className='flex-col flex items-center '>
                                        <p className="h-40 w-full flex">
                                            <img src={image[0]} alt="image" className="w-full h-full object-contain"/>
                                        </p>
                                        <p className="h-full">
                                            <h1 className="capitalize font-bold">{name}</h1>
                                            <p className=''>{description}?</p>                                    
                                        </p>
                                    </div>
                                </div>
                            </Modal>
                            <Link to={`/dashboard/editProduct/${_id}`} onClick={scrollToTop} className='border border-gray/10 rounded p-1 md:p-2 md:px-4 text-sm cursor-pointer'>Edit</Link>
                            <button disabled={loading} className='border border-gray/10 rounded p-1 md:p-2 md:px-4 text-sm cursor-pointer' onClick={handleDelete}>{loading ? "Please wait..." : 'Delete'}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}