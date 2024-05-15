import { useState } from "react";
import { truncateString } from "../utils";
import Modal from "react-responsive-modal";
import { NavLink } from "react-router-dom";


export const Items = ({item}) => {
    const {image, name, quantity, category, brand, description, price, oldPrice} = item
    const [open, setOpen] = useState(false);
    const [updateBtn, setUpdateBtn] = useState(false)
    const [formData, setFormData] = useState({
        name: "",
        brand: "",
        category: "",
        price: "",
        oldPrice: "",
        quantity: "",
        description: "",
        image: ""
        
    });

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);
    const toggleEdit = () => setUpdateBtn(!updateBtn)


    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData({ ...formData, [name]: value})
    }
   

    const handleUpdate = (e) => {
        e.preventDefault()

        const productData = {
            name,
            brand,
            category, price, oldPrice, quantity, description,image
        }

        // dispatch(updateProduct(productData))
    }

    return(
        <div  className=" my-4 group transition-all  ">
            <div className="flex space-x-2 items-center justify-around h-[28vh]  bg-white md:px-5 p-2 md:mx-5 rounded shadow" >
                <div className="w-20 :w-40 sm:w-60 h-full flex justify-center items-center">
                    <div className=" flex justify-center h-full ">
                        <img
                            src={image[0]}
                            alt="image"
                            className="w-full h-full object-contain"
                        />
                    </div>
                </div>
                <div className="h-full w-full flex items-center justify-center">
                    <div className="w-full space-y-2">
                        <p className="text-center gap-1 flex items-center">
                            <span className="font-bold">Name:</span>
                            <p className="capitalize">{truncateString(name, 20)}</p>
                        </p>
                        <p className="text-center flex items-center gap-4">
                            <p className="flex items-center gap-1">
                                <span className="font-bold">Quantity:</span>
                                <p>{quantity.toLocaleString()}</p>
                            </p>
                            <p className="text-center gap-1 flex items-center">
                                <span className="font-bold">Category:</span>
                                <p className="capitalize">{category}</p>
                            </p>
                        </p>
                        <p className="text-center gap-1 flex items-center">
                            <span className="font-bold">Brand:</span>
                            <p className="capitalize">{brand}</p>
                        </p>
                        <p className=' space-x-2 sm:space-x-4'>
                            <button onClick={onOpenModal} className='shadow border border-gray/10 rounded-lg p-2 px-4 bg-ivory'> Preview</button>
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
                            <NavLink to={`/dashboard/editProduct`} >Edit Button</NavLink>
                            <button className='bg-red shadow-lg rounded-lg p-2 px-4 text-ivory'>Delete</button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}