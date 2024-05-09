import './Header.css'
import logo from '..//../../images/Logo.svg'
const Header = () => {
    return (
        <div className='header bg-slate-800 flex text-white items-center justify-between px-7'>
          <img src={logo} alt="" />
          <div className=''>
          <a className=' hover:bg-orange-200 mx-8 decoration-noe' href="/shop">Shop</a>
          <a className=' hover:bg-orange-200 mx-8 decoration-noe' href="/order">Order</a>
          <a className=' hover:bg-orange-200 mx-8 decoration-noe' href="/inventory">Inventory</a>
          <a className=' hover:bg-orange-200 mx-8 decoration-noe' href="/loging">loging</a>
          </div>
    

           
        </div>
    );
};

export default Header;