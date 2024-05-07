import React, { useEffect, useState } from "react";
import { Loader } from "../component/Loader";
import { FaUsersViewfinder } from "react-icons/fa6";
import { BsCartCheck, BsPlusLg } from "react-icons/bs";
import { MdOutlineSell } from "react-icons/md";
import { truncateString } from "../utils";
import Modal from "react-responsive-modal";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, getTotalProduct, updateProduct } from "../redux/features/product/productAction"; 
// import { EditProduct } from "../component/EditProduct";
import { CreateProduct } from "../component/CreateProduct";
import { AiOutlinePlus } from 'react-icons/ai';
import { TbShoppingBagEdit } from "react-icons/tb";



const initialState = {
    name: "",
    brand: "",
    category: "",
    price: "",
    oldPrice: "",
    quantity: "",
    description: "",
    image: ""
    
}

export const AdminProducts = () => {
  const dispatch = useDispatch()
  const {errMessage, isLoading, isError, items} = useSelector(state => state.products)
    // const product = useSelector(state => state.products)
//   console.log(items)

  useEffect(() => {
    dispatch(getProducts()),
    dispatch(getTotalProduct())
  }, [])
  
  
  const [open, setOpen] = useState(false);


  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

if (isLoading)
    return (
      <div className="flex justify-center items-center h-screen w-full">
        <Loader />
      </div>
  );
  
//   if (isError) return <div className="flex justify-center ">Error:{errMessage}</div>;

  return (
    <section className="max md:w-full mx-2 shadow">
      <div className="flex flex-wrap justify-evenly items-center py-5 space-y-4">
        <div className="cursor-pointer bg-lightBrown hover:shadow-lg transition-all w-60 p-3 rounded flex flex-col justify-center items-center font-bold text-xl text-ivory">
          <p onClick={onOpenModal} className="flex items-center">
            <BsPlusLg />
            Create new Product
          </p>
          <Modal
            onClose={onCloseModal}
            center
            open={open}
            classNames={{
              overlay: "bg-black/60 customOverlay ",
              modal:" md:w-1/2 w-[90%] mx-auto sm:h-[30rem] no-scrollbar transition-all shadow rounded-xl",
              overlayAnimationIn: "customEnterOverlayAnimation",
              overlayAnimationOut: "customLeaveOverlayAnimation",
              modalAnimationIn: "customEnterModalAnimation",
              modalAnimationOut: "customLeaveModalAnimation",
            }}
            animationDuration={100}
          >
            <CreateProduct/>
            <p className='' onClick={onCloseModal}>
                <button type="" className="bg-ivory p-2 rounded shadow hover:shadow-lg">Cancel</button>
            </p>
          </Modal>
        </div>
      </div>
      <div>
        <h1 className="p-2 font-bold text-2xl">Products</h1>
        <div className="">
          {items.map((item) => {
            return (
                <Items key={item._id} item={item}/>
            );
          })}
        </div>
      </div>
    </section>
  );
};


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
    // const {name, brand, category, price, oldPrice, quantity, description, image} = formData
    const products = useSelector((state) => state.products); 
    const dispatch = useDispatch()


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

        dispatch(updateProduct(productData))
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
                                modal: ' md:w-1/2 w-5/6 mx-auto h-1/2 md:h-1/2 no-scrollbar transition-all shadow rounded-xl ',
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
                            <button onClick={toggleEdit} className='shadow-lg rounded-lg p-2 px-4 bg-lightBrown text-ivory'>Edit</button>
                            <Modal
                                onClose={toggleEdit}
                                center
                                open={updateBtn}
                                classNames={{
                                overlay: "bg-black/60 customOverlay ",
                                modal:
                                    " w-5/6 sm:w-1/2 lg:w-2/3 mx-auto sm:h-[30rem] no-scrollbar transition-all shadow rounded-xl ",
                                overlayAnimationIn: "customEnterOverlayAnimation",
                                overlayAnimationOut: "customLeaveOverlayAnimation",
                                modalAnimationIn: "customEnterModalAnimation",
                                modalAnimationOut: "customLeaveModalAnimation",
                                }}
                                animationDuration={100}
                            >
                                <EditProduct/>
                                {/* <div className=" text-blue flex justify-center">
                                    <form onSubmit={handleUpdate} className=" w-full flex flex-col items-center">
                                        <label htmlFor="" className="font-bold p-3 text-2xl flex items-center">
                                            <TbShoppingBagEdit />
                                            Edit Product
                                        </label>
                                        <div className="items-center space-y-2 p-3 w-full ">
                                            <div className="">
                                                <label  htmlFor="name" className="absolut inputLabel bg-gree">Product name</label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    value={formData.name}
                                                    id=""
                                                    placeholder="Enter name"
                                                    className="inputField w-full p-2 outline-none border border-gray/10 rounded"
                                                    onChange={(e)=> setFormData({...formData, name:e.target.value})}
                                                />
                                            </div>
                                            <div className="">
                                                <label htmlFor="name" className="block">
                                                    Select Category:
                                                </label>
                                                <select
                                                    name="category"
                                                    id=""
                                                    className="p-2 border border-gray/10 rounded outline-none w-full"
                                                    onChange={handleChange}
                                                >
                                                    <option value="fragrance">Fragrance</option>
                                                    <option value="Skincare">SkinCare</option>
                                                    <option value="fashion">Fashion</option>
                                                    <option value="Accessories">Accessories</option>
                                                    <option value="Phones">Phones</option>
                                                    <option value="Sports">Sports</option>
                                                </select>
                                            </div>
                                            <div className="">
                                                <label htmlFor="name">Brand</label>
                                                <input
                                                    type="text"
                                                    name="brand"
                                                    value={brand}
                                                    id=""
                                                    placeholder="Enter product brand"
                                                    className="w-full p-2 outline-none border border-gray/10 rounded"
                                                    onChange={(e)=> setFormData({...formData, brand:e.target.value})}
                                                />
                                            </div>
                                            <div className="">
                                                <label htmlFor="name">Price</label>
                                                <input
                                                    type="text"
                                                    name="price"
                                                    value={price}
                                                    id=""
                                                    placeholder="Enter product price"
                                                    className="w-full p-2 outline-none border border-gray/10 rounded"
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="">
                                                <label htmlFor="name">Old Price</label>
                                                <input
                                                    type="text"
                                                    name="oldPrice"
                                                    value={oldPrice}
                                                    id=""
                                                    placeholder="Enter product price"
                                                    className="w-full p-2 outline-none border border-gray/10 rounded"
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="">
                                                <label htmlFor="name">Quantity</label>
                                                <input
                                                    type="text"
                                                    name="quantity"
                                                    value={quantity}
                                                    id=""
                                                    placeholder="Enter product quantity"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
                                                    className="w-full p-2 outline-none border border-gray/10 rounded"
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="flex flex-col w-full">
                                                <label htmlFor="name">Description</label>
                                                <textarea 
                                                        name="description" 
                                                    value={description} id="" cols="10" rows="5" 
                                                    placeholder="Enter product description" 
                                                    className="border border-gray/20 rounded outline-none p-2"
                                                    onChange={handleChange}
                                                    >
                                                    
                                                </textarea>
                                            </div>
                                            <div className="space-y-2">
                                                <label htmlFor="name" className='flex items-center'>Select Image <AiOutlinePlus className='mt-1'/></label>
                                                <input
                                                    type="text"
                                                    name="image"
                                                    value={image}
                                                    id=""
                                                    placeholder="Paste the image url"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
                                                    className="w-full p-2 outline-none border border-gray/10 rounded"
                                                    onChange={handleChange}
                                                />
                                                {
                                                    image && (

                                                    <p className='h-20 w-20 pt-2'>
                                                        <img src={image} alt="image"  className='object-fit h-full w-full'/>
                                                    </p>
                                                    )
                                                }
                                            </div>
                                            <div className='text-red'>{products.isError && products.errMessage}</div>
                                            <div className="flex justify-end py-2">
                                                <button type="submit" className="w-full bg-lightBrown text-ivory p-2 rounded shadow hover:shadow-lg">Update Product</button>
                                            </div>
                                        </div>
                                    </form>
                                </div> */}
                            </Modal>
                            <button className='bg-red shadow-lg rounded-lg p-2 px-4 text-ivory'>Delete</button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}