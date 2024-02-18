import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './details.css'
import moment from 'moment';
export default function Details() {
    const {userId,tourId,bookingId} = useParams();
   
    useEffect(()=>{
        fetchBookingDetails();
    },[userId,tourId,bookingId])

    const fetchBookingDetails = () =>{

    }

  return (
       <>
       <div id="invoiceholder">

<div id="headerimage"></div>
<div id="invoice" class="effect2">
  
  <div id="invoice-top">
    <div class="logo"></div>
    <div class="info">
      <h2>Travel & Tours</h2>
      <p> sahacompany@gmail.com 
        <br />
          01628781323
      </p>
    </div>
    <div class="title">
      <h1>Invoice #1069</h1>
      <p>Issued: Anik Saha <br />
         Payment Due: June 27, 2015
      </p>
    </div>
  </div>


  
  <div id="invoice-mid">
    
    <div class="clientlogo"></div>
    <div class="info">
      <h2>Client Name</h2>
      <p>JohnDoe@gmail.com</p>
         555-555-5555
    </div>

    <div id="project">
      <h2>Tour Name</h2>
      <p>Life is beautiful. Sometime need refreshment so don't wait contact with us. We will offer your better package where you can enjoy</p>
    </div>   

  </div>
  
  <div id="invoice-bot">
    
    <div id="table">
      <table>
        <tr class="tabletitle">
          <td class="item"><h2>Item Description</h2></td>
          <td class="Hours"><h2>Hours</h2></td>
          <td class="Rate"><h2>Rate</h2></td>
          <td class="subtotal"><h2>Sub-total</h2></td>
        </tr>
        
        <tr class="service">
          <td class="tableitem"><p class="itemtext">Communication</p></td>
          <td class="tableitem"><p class="itemtext">5</p></td>
          <td class="tableitem"><p class="itemtext">$75</p></td>
          <td class="tableitem"><p class="itemtext">$375.00</p></td>
        </tr>
        
        <tr class="service">
          <td class="tableitem"><p class="itemtext">Asset Gathering</p></td>
          <td class="tableitem"><p class="itemtext">3</p></td>
          <td class="tableitem"><p class="itemtext">$75</p></td>
          <td class="tableitem"><p class="itemtext">$225.00</p></td>
        </tr>
        
        <tr class="service">
          <td class="tableitem"><p class="itemtext">Design Development</p></td>
          <td class="tableitem"><p class="itemtext">5</p></td>
          <td class="tableitem"><p class="itemtext">$75</p></td>
          <td class="tableitem"><p class="itemtext">$375.00</p></td>
        </tr>
        
        <tr class="service">
          <td class="tableitem"><p class="itemtext">Animation</p></td>
          <td class="tableitem"><p class="itemtext">20</p></td>
          <td class="tableitem"><p class="itemtext">$75</p></td>
          <td class="tableitem"><p class="itemtext">$1,500.00</p></td>
        </tr>
        
        <tr class="service">
          <td class="tableitem"><p class="itemtext">Animation Revisions</p></td>
          <td class="tableitem"><p class="itemtext">10</p></td>
          <td class="tableitem"><p class="itemtext">$75</p></td>
          <td class="tableitem"><p class="itemtext">$750.00</p></td>
        </tr>
        
        <tr class="service">
          <td class="tableitem"><p class="itemtext"></p></td>
          <td class="tableitem"><p class="itemtext">HST</p></td>
          <td class="tableitem"><p class="itemtext">13%</p></td>
          <td class="tableitem"><p class="itemtext">$419.25</p></td>
        </tr>
        
          
        <tr class="tabletitle">
          <td></td>
          <td></td>
          <td class="Rate"><h2>Total</h2></td>
          <td class="payment"><h2>$3,644.25</h2></td>
        </tr>
        
      </table>
    </div>

    <br />
    <div id="table">
      <table>
        <tr class="tabletitle">
          <td class="item"><h2>Item Description</h2></td>
          <td class="Hours"><h2>Hours</h2></td>
          <td class="Rate"><h2>Rate</h2></td>
          <td class="subtotal"><h2>Sub-total</h2></td>
          <td class="subtotal"><h2>Sub-total</h2></td>
          <td class="subtotal"><h2>Sub-total</h2></td>
        </tr>
        
        <tr class="service">
          <td class="tableitem"><p class="itemtext">Communication</p></td>
          <td class="tableitem"><p class="itemtext">5</p></td>
          <td class="tableitem"><p class="itemtext">$75</p></td>
          <td class="tableitem"><p class="itemtext">$75</p></td>
          <td class="tableitem"><p class="itemtext">$75</p></td>
          <td class="tableitem"><p class="itemtext">$375.00</p></td>
        </tr>
        
        <tr class="service">
          <td class="tableitem"><p class="itemtext">Asset Gathering</p></td>
          <td class="tableitem"><p class="itemtext">3</p></td>
          <td class="tableitem"><p class="itemtext">$75</p></td>
          <td class="tableitem"><p class="itemtext">$225.00</p></td>
        </tr>
        
        <tr class="service">
          <td class="tableitem"><p class="itemtext">Design Development</p></td>
          <td class="tableitem"><p class="itemtext">5</p></td>
          <td class="tableitem"><p class="itemtext">$75</p></td>
          <td class="tableitem"><p class="itemtext">$375.00</p></td>
        </tr>
        
        <tr class="service">
          <td class="tableitem"><p class="itemtext">Animation</p></td>
          <td class="tableitem"><p class="itemtext">20</p></td>
          <td class="tableitem"><p class="itemtext">$75</p></td>
          <td class="tableitem"><p class="itemtext">$1,500.00</p></td>
        </tr>
        
        <tr class="service">
          <td class="tableitem"><p class="itemtext">Animation Revisions</p></td>
          <td class="tableitem"><p class="itemtext">10</p></td>
          <td class="tableitem"><p class="itemtext">$75</p></td>
          <td class="tableitem"><p class="itemtext">$750.00</p></td>
        </tr>
        
        <tr class="service">
          <td class="tableitem"><p class="itemtext"></p></td>
          <td class="tableitem"><p class="itemtext">HST</p></td>
          <td class="tableitem"><p class="itemtext">13%</p></td>
          <td class="tableitem"><p class="itemtext">$419.25</p></td>
        </tr>
        
          
        <tr class="tabletitle">
          <td></td>
          <td></td>
          <td class="Rate"><h2>Total</h2></td>
          <td class="payment"><h2>$3,644.25</h2></td>
        </tr>
        
      </table>
    </div>
    
  {/* <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
    <input type="hidden" name="cmd" value="_s-xclick">
    <input type="hidden" name="hosted_button_id" value="QRZ7QTM9XRPJ6">
    <input type="image" src="http://michaeltruong.ca/images/paypal.png" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
  </form> */}

    
    <div id="legalcopy">
      <p class="legal"><strong>Thank you for your business!</strong>  Payment is expected within 31 days; please process this invoice within that time. There will be a 5% interest charge per month on late invoices. 
      </p>
    </div>
    
  </div>
</div>
</div>
</>
  )
}
