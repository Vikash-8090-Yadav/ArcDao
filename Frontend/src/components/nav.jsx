import React, { useState, useEffect, useContext, useMemo } from "react";
import Tg from "./toggle";

import {Web3} from 'web3';



import SideMenu from './Sidemenu';

import { useAuth } from "@arcana/auth-react";

const networks = {
  zkSyncSepoliaTestnet: {
    chainId: `0x${Number(300).toString(16)}`,
    chainName: "zkSyncSepoliaTestnet",
    nativeCurrency: {
      name: "zkSyncSepoliaTestnet",
      symbol: "ETH",
      decimals: 18,
    },
    rpcUrls: ["https://sepolia.era.zksync.dev"],
  },
};

var accountAddress= localStorage.getItem("filWalletAddress");





function Nav() {

  const { loading, isLoggedIn, connect, user } = useAuth();

  const [isOpen, setIsOpen] = useState(false);



  const [loading1, setLoading] = useState(false);
  const [address , setAddress] = useState('');
  const [balance , setBalance] = useState(' ');


  const fetchBalance = async () => {

    console.log(address)
    let web3 = await new Web3(window.ethereum);
    
    const balanceWei= await web3.eth.getBalance(accountAddress)
            
    const finalbalance = web3.utils.fromWei(balanceWei,"ether")+ " "+networks["zkSyncSepoliaTestnet"]["nativeCurrency"]["name"];
    console.log("result->"+finalbalance);
    setBalance(finalbalance);
    
    
  };

  const onConnectClick = async () => {
    try {
      await connect(); // Built-in, plug & play login UI
    } catch (err) {
      console.log({ err });
      // Handle error
    }
  };
  

  const handleLogin = async () => {
    setLoading(true);
    
    if(typeof window.ethereum =="undefined"){
      console.log("PLease install the metamask");
  }
  let web3 =  new Web3(window.ethereum);
 
  if(web3.network !=="Kura"){
      await window.ethereum.request({
          method:"wallet_addEthereumChain",
          params:[{
              ...networks["zkSyncSepoliaTestnet"]
          }]
      })
  }
  const accounts = await web3.eth.requestAccounts();
  const Address =  accounts[0];
  localStorage.setItem("filWalletAddress",Address)

  console.log(Address)
  setAddress(Address);

    setLoading(false);
    window.location.reload();
  };


  
  function logout(){
    alert("Logout")
    localStorage.clear();
    window.location.reload();
    // Logout();
  }


  console.log(accountAddress)



  function truncateAddress(add) {
    const len = add.length;
    if (len < 11) return add;
    return add.substring(0, 6) + "..." + add.substring(len - 4, len);
  }
  return (
    <>




  <div className='navbar navbar-expand navbar-light bg-white topbar mb-4  shadow fixed-top-bar'>
    <div className=" text-lg mx-3 no-underline">
  <a
  className="flex items-center justify-center alchemy-link"
  href="/"
>
  
  <div className=" mmh text-lg mx-3">One Dao</div>
</a>
</div>
  <button
            id="sidebarToggleTop"
            className="btn btn-link d-md-none rounded-circle mr-3"
            onClick={Tg}
          >
              <i className="fa fa-bars" />
            </button>
            <ul className="navbar-nav ml-auto">
              {/* Nav Item - Search Dropdown (Visible Only XS) */}
              <li className="nav-item dropdown no-arrow d-sm-none">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="searchDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="fas fa-search fa-fw" />
                </a>
                {/* Dropdown - Messages */}
                <div
                  className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                  aria-labelledby="searchDropdown"
                >
                  <form className="form-inline mr-auto w-100 navbar-search">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control bg-light border-0 small"
                        placeholder="Search for..."
                        aria-label="Search"
                        aria-describedby="basic-addon2"
                      />
                      <div className="input-group-append">
                        <button className="btn btn-primary" type="button">
                          <i className="fas fa-search fa-sm" />
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </li>
              {accountAddress !== null && !isOpen && (
              <>
              <div className=' name flex'>
              {accountAddress}
                 </div>
              </>
              )
              }
              <div className="topbar-divider d-none d-sm-block" />
              {/* Nav Item - User Information */}
              
              {accountAddress !== null && !isOpen && (
            <>
              
              <li className="nav-item dropdown no-arrow">
                <div
                  className="nav-link dropdown-toggle"
                  onClick={() => setIsOpen(true)}
                  id="userDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <img

                    className="img-profile rounded-circle"
                    src="img/undraw_profile.svg"
                  />
                </div>
                {/* Dropdown - User Information */}

              </li>
              </>
              )}
            </ul>
   
            <div className='maincomp flex'>
          {accountAddress && isOpen && (
            <SideMenu
              address={accountAddress}
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              accountAddress={accountAddress}
              logout={logout}
              userInfo={accountAddress}
            />
          )}
          {accountAddress == null && !loading1 && (
            
            <button onClick={() => onConnectClick()}  class=" font-semibold bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">LOGIN</button>
            
          )}
          
     
    
          {loading1 && <button className="btn bg-gradient-1 text-gray-900 transition ease-in-out duration-500 transform hover:scale-110">Loading...</button>}
        </div>
  </div>
</>
  )
}

export default Nav