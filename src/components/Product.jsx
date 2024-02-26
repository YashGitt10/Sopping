import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/Slices/CartSlice";



const Product = ({post}) => {

  const {cart} = useSelector((state) => state);
  const dispatch = useDispatch();

  const addToCart = () => {
    console.log("Adding to cart:", post);
    dispatch(add(post));
    toast.success("Item Added");
  }

  const removeFromCart = () => {
    console.log("Removing from cart:", post.id);
    dispatch(remove(post.id));
    toast.success("Item Removed");
  }
  return (
    <div className="flex flex-col justify-between items-center hover:scale-110 transition duration-300 ease-in gap-3 p-4 mt-10 ml-5 rounded-xl outline">
      <div>
        <p className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">{post.title}</p>
      </div>
      <div>
        <p className="w-40 text-gray-400 font-normal text-[10px] text-left">{post.description.split(" ").slice(0,10).join(" ") + "..."}</p>
      </div>
      <div className="h-[180px]">
        <img src={post.image} alt="" className="h-full w-full"></img>
      </div>
      <div className="flex justify-between gap-11 items-center w-full mt-5">
        <div>
          <p className="text-green-600 font-semibold">${post.price}</p>
        </div>
        {
          Array.isArray(cart) && cart.some((p) => p.id === post.id) ?
          (<button className="border-2 text-gray-700 border-gray-700 rounded-full font-semibold p-1 px-3 text-[12px] hover:bg-gray-700 hover:text-white transition duration-300 ease-in" onClick={removeFromCart}>REMOVE ITEM</button>) :
          (<button className="border-2 text-gray-700 border-gray-700 rounded-full font-semibold p-1 px-3 text-[12px] hover:bg-gray-700 hover:text-white transition duration-300 ease-in" onClick={addToCart}>ADD TO CART</button>)
        }
      </div>
    </div>
  );
};

export default Product;
