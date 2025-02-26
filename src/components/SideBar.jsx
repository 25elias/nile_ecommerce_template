import React from 'react'

const SideBar = ({onCategoryChange, products}) => {


    return(
        <div className="flex flex-col gap-8 pr-4">
            <div>
                <h2 className='text-2xl text-gray-900 tracking-wide pt-8 pb-2'>Catagory</h2>
                <div>
                    <ul className="flex flex-col gap-4">
                        <li className="inline-flex gap-2">
                            <input type="checkbox" /><p>Men</p></li>
                        <li className="inline-flex gap-2"><input type="checkbox" /> <p>Women</p></li>
                        <li className="inline-flex gap-2"><input type="checkbox" /> <p>T-Shirts</p></li>
                        <li className="inline-flex gap-2"><input type="checkbox" /> <p>Handbags</p></li>
                        <li className="inline-flex gap-2"><input type="checkbox" /> <p>Jackets &amp; Coats</p></li>
                        <li className="inline-flex gap-2"><input type="checkbox" /> <p>Watches</p></li>
                        <li className="inline-flex gap-2"><input type="checkbox" /> <p>Hats &amp; Coats</p></li>
                    </ul>
                </div>
            </div>

            <div>
                <h2 className='text-2xl text-gray-900 tracking-wide pt-8 pb-2'>Color</h2>
                <div>
                    <ul className="flex flex-col gap-4">
                        <li className="inline-flex gap-2"><input type="radio" className='p-4 bg-black border border-gray-300'/> <p>Black</p></li>
                        <li className="inline-flex gap-2"><input type="radio" /> <p>Gray</p></li>
                        <li className="inline-flex gap-2"><input type="radio" /> <p>Green</p></li>
                        <li className="inline-flex gap-2"><input type="radio" /> <p>Red</p></li>
                        <li className="inline-flex gap-2"><input type="radio" /> <p>Orange</p></li>
                        <li className="inline-flex gap-2"><input type="radio" /> <p>Blue</p></li>
                        <li className="inline-flex gap-2"><input type="radio" /> <p>Pink</p></li>
                        <li className="inline-flex gap-2"><input type="radio" /> <p>White</p></li>
                    </ul>
                </div>
            </div>
            
            <div>
                <h2 className='text-2xl text-gray-900 tracking-wide pt-8 pb-2'>Size</h2>
                <div>
                    <ul className="flex flex-col gap-4">
                        <li className="inline-flex gap-2"><input type="checkbox" /> <p>S</p></li>
                        <li className="inline-flex gap-2"><input type="checkbox" /> <p>M</p></li>
                        <li className="inline-flex gap-2"><input type="checkbox" /> <p>L</p></li>
                        <li className="inline-flex gap-2"><input type="checkbox" /> <p>XL</p></li>
                        <li className="inline-flex gap-2"><input type="checkbox" /> <p>XXL</p></li>
                        <li className="inline-flex gap-2"><input type="checkbox" /> <p>XXXL</p></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SideBar