import { IconType } from 'react-icons';
import { FaPlane, FaShopify, FaPaintBrush, FaBook, FaGamepad, FaUtensils, FaCar, FaPaw, FaPalette, FaStar, FaMusic, FaHeartbeat, FaFootballBall, FaLaptop, FaBiking, FaTv, FaVideo, FaTshirt, FaGrinBeam, FaUserNinja, FaHandsHelping, FaCamera, FaQuoteRight, FaFilm } from 'react-icons/fa';

interface Category {
  id: number;
  name: string;
  icon: IconType;
}

const CategoriesData: Category[] = [
  { id: 1, name: 'Travel', icon: FaPlane },
  { id: 2, name: 'Brands', icon: FaShopify },
  { id: 3, name: 'Art/Design', icon: FaPaintBrush },
  { id: 4, name: 'Books', icon: FaBook },
  { id: 5, name: 'Games', icon: FaGamepad },
  { id: 6, name: 'Food & Drinks', icon: FaUtensils },
  { id: 7, name: 'Cars', icon: FaCar },
  { id: 8, name: 'Species', icon: FaPaw },
  { id: 9, name: 'Colors', icon: FaPalette },
  { id: 10, name: 'Celebrities', icon: FaStar },
  { id: 11, name: 'Songs', icon: FaMusic },
  { id: 12, name: 'Health', icon: FaHeartbeat },
  { id: 13, name: 'Sports', icon: FaFootballBall },
  { id: 14, name: 'Technology', icon: FaLaptop },
  { id: 15, name: 'Bikes', icon: FaBiking },
  { id: 16, name: 'Web Series', icon: FaTv },
  { id: 17, name: 'Videos', icon: FaVideo },
  { id: 18, name: 'Fashion', icon: FaTshirt },
  { id: 19, name: 'Memes', icon: FaGrinBeam },
  { id: 20, name: 'Role Models', icon: FaUserNinja },
  { id: 21, name: 'Interested', icon: FaHandsHelping },
  { id: 22, name: 'Photos', icon: FaCamera },
  { id: 23, name: 'Quotes', icon: FaQuoteRight },
  { id: 24, name: 'Movies', icon: FaFilm },
];

export default CategoriesData;
