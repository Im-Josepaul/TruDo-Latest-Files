import React, { useState,useEffect } from 'react';
import ReactLoading from "react-loading";
import {Link,useLocation} from 'react-router-dom'

import "../Mainpage/css/fontawesome.css"
import "../Mainpage/css/index.css"
import "../Mainpage/css/owl.css"
import "../Mainpage/css/animate.css"
import contractFunctions from "../../js/main.js";


const Nft1page = () => {
  const location = useLocation();
  let partialNFT = location.state.nft;
  console.log(partialNFT);

  const [nft, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;
    
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      
      try {
        const result = await contractFunctions.singleCampaignInfo(partialNFT.tokenId);
        
        if (!mounted) return;
        
        if (Array.isArray(result) && result.length > 0) {
          setData(result);
        }
        else {
          throw new Error('No valid data received');
        }
      } 
      catch (err) {
        if (!mounted) return;
        setError(err.message);
      } 
      finally {
        if (!mounted) return;
        setIsLoading(false);
      }
    };
    
    fetchData();
    
    return () => {
      mounted = false;
    };
  }, []);

  if (isLoading) return(
    <>
    <div class="loading">
      <h3>Loading</h3>
      <ReactLoading id="icon" type="cylon" color="#0071f8" height={100} width={50} />
    </div>
    </>
  ) 
  if (error) return <div class="loading">Error: {error}</div>;


  return (
    <div>
  <header className="header-area header-sticky">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <nav className="main-nav">
            {/* ***** Logo Start ***** */}
            <h1 style={{color: 'white'}}>Trudo</h1>
            {/* ***** Logo End ***** */}
            {/* ***** Menu Start ***** */}
            <ul className="nav">
            <Link to='/'><li><a>Home</a></li></Link>
              <li><a href="/createCampaign" >Create Campaign</a></li>
              
            </ul>   
            <a className="menu-trigger">
              <span>Menu</span>
            </a>
            {/* ***** Menu End ***** */}
          </nav>
        </div>
      </div>
    </div>
  </header>
  {/* ***** Header Area End ***** */}
  <div className="page-heading header-text">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <h3>{partialNFT.campaignname}</h3>
          <span className="breadcrumb"><a href="/">Home</a>  &gt;  NFT  &gt; {partialNFT.campaignname}</span>
        </div>
      </div>
    </div>
  </div>
  <div className="single-product section">
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="left-image">
            <img src={partialNFT.imageUrl} alt />
          </div>
        </div>
        <div className="col-lg-6 align-self-center">
          <h4>{location.state.nft.campaignname}</h4>
          <span className="price">{nft.tokenPrice}</span>
          <p>{partialNFT.description}</p>
          <form id="qty" action="#">
            <input type="qty" className="form-control" id={1} aria-describedby="quantity" placeholder={1} />
            <button type="submit"><i className="fa fa-shopping-bag" /> ADD TO CART</button>
          </form>
          {/* <ul>
      <li><span>Game ID:</span> COD MMII</li>
      <li><span>Genre:</span> <a href="#">Action</a>, <a href="#">Team</a>, <a href="#">Single</a></li>
      <li><span>Multi-tags:</span> <a href="#">War</a>, <a href="#">Battle</a>, <a href="#">Royal</a></li>
    </ul>*/}
        </div>
        <div className="col-lg-12">
          <div className="sep" />
        </div>
      </div>
    </div>
  </div>
  <footer>
  <div className="container">
    <div className="col-lg-12">
      <p>Copyright © 2024 Trudo NFT Campaign Company. All rights reserved.</p>
    </div>
  </div>
  </footer>
</div>

  )
}

export default Nft1page