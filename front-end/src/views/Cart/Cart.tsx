import Construccion from "../../assets/Construccion.png";

const Cart: React.FC = () => {
  return (
    <div className="h-svh flex items-center justify-center h-full">
      <img
        className="object-contain max-h-full max-w-full"
        src={Construccion}
        alt="En construcción"
      />
    </div>
  );
};

export default Cart;