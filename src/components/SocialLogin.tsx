import { FaGoogle, FaFacebook, FaMicrosoft, FaApple } from "react-icons/fa";

const SocialLogin: React.FC = () => {
   return (
      <div className="flex justify-center gap-4 mt-4 flex-nowrap">
         <button>
            <a href="#">
               <FaGoogle />
            </a>
         </button>
         <button >
            <a href="#">
               <FaFacebook />
            </a>
         </button>
         <button >
            <a href="#">
               <FaMicrosoft />
            </a>
         </button>
         <button >
            <a href="#">
               <FaApple />
            </a>
         </button>
      </div>
   );
};

export default SocialLogin;
