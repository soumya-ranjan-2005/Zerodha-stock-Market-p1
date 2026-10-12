import React from 'react'

function pricing() {
    return ( 
        <div className='container p-5' >
            <div className='row '>
                <div className='col-4 ' >
                    <h1>unbeatable prices</h1>
                    <p>we pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href className='mx-5' style={{ textDecoration: "none" }}>
              see pricing{" "} <i class="fa-solid fa-arrow-right-long"></i></a>

                </div>
                    <div className='col-2' ></div>
                    <div className='col-6' >
                      <div className='row text-center'>
                        <div className='col border p-5'>
                            <h1 className='mb-3'>₹0</h1>
                            <p>Free equity delivery and direct mutual fund </p>

                        </div>
                        <div className='col border p-5'>
                            <h1 className='mb-3'>₹20</h1>
                            <p>Intraday and F&O</p>
                        </div>
                      </div>
                    </div>
            </div>
        </div>
     );
}

export default pricing;