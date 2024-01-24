import { Link } from 'react-router-dom';
interface donationsProps {
  descr: string;

}

const DonationsMenu: React.FC<donationsProps> = ({descr}) => {
  return (
    <div>
      <h1>descr</h1>
      <Link to={`/home`}>
        <button>
          <p>Home</p>
        </button>
      </Link>
    </div>
  );
};

export default DonationsMenu;