import React from 'react'

const ListUser = () => {
  return (
   <div className="main-content">
  {/* main-content-wrap */}
  <div className="main-content-inner">
    {/* main-content-wrap */}
    <div className="main-content-wrap">
      <div className="flex items-center flex-wrap justify-between gap20 mb-30">
        <h3>All User</h3>
        <ul className="breadcrumbs flex items-center flex-wrap justify-start gap10">
          <li>
            <a href="index.html"><div className="text-tiny">Dashboard</div></a>
          </li>
          <li>
            <i className="icon-chevron-right" />
          </li>
          <li>
            <a href="#"><div className="text-tiny">User</div></a>
          </li>
          <li>
            <i className="icon-chevron-right" />
          </li>
          <li>
            <div className="text-tiny">All User</div>
          </li>
        </ul>
      </div>
      {/* all-user */}
      <div className="wg-box">
        <div className="flex items-center justify-between gap10 flex-wrap">
          <div className="wg-filter flex-grow">
            <form className="form-search">
              <fieldset className="name">
                <input type="text" placeholder="Search here..." className name="name" tabIndex={2} defaultValue aria-required="true" required />
              </fieldset>
              <div className="button-submit">
                <button className type="submit"><i className="icon-search" /></button>
              </div>
            </form>
          </div>
          <a className="tf-button style-1 w208" href="add-new-user.html"><i className="icon-plus" />Add new</a>
        </div>
        <div className="wg-table table-all-user">
          <ul className="table-title flex gap20 mb-14">
            <li>
              <div className="body-title">User</div>
            </li>    
            <li>
              <div className="body-title">Phone</div>
            </li>
            <li>
              <div className="body-title">Email</div>
            </li>
            <li>
              <div className="body-title">Action</div>
            </li>
          </ul>
          <ul className="flex flex-column">
            <li className="wg-product item-row">
              <div className="name flex-grow">
                <div className="image">
                  <img src="images/products/product-1.jpg" alt />
                </div>
                <div>
                  <div className="title">
                    <a href="#" className="body-title-2">V-neck linen T-shirt</a>
                  </div>
                  <div className="text-tiny">Product name</div>
                </div>
              </div>
              <div className="body-text">(212) 555-1234</div>
              <div className="body-text">info@fashionshop.com</div>
              <div className="list-icon-function">
                <div className="item eye">
                  <i className="icon-eye" />
                </div>
                <div className="item edit">
                  <i className="icon-edit-3" />
                </div>
                <div className="item trash">
                  <i className="icon-trash-2" />
                </div>
              </div>
            </li>
            <li className="wg-product item-row">
              <div className="name flex-grow">
                <div className="image">
                  <img src="images/products/product-2.jpg" alt />
                </div>
                <div>
                  <div className="title">
                    <a href="#" className="body-title-2">Neptune Longsleeve</a>
                  </div>
                  <div className="text-tiny">Product name</div>
                </div>
              </div>
              <div className="body-text">(212) 555-1234</div>
              <div className="body-text">info@fashionshop.com</div>
              <div className="list-icon-function">
                <div className="item eye">
                  <i className="icon-eye" />
                </div>
                <div className="item edit">
                  <i className="icon-edit-3" />
                </div>
                <div className="item trash">
                  <i className="icon-trash-2" />
                </div>
              </div>
            </li>
            <li className="wg-product item-row">
              <div className="name flex-grow">
                <div className="image">
                  <img src="images/products/product-3.jpg" alt />
                </div>
                <div>
                  <div className="title">
                    <a href="#" className="body-title-2">Ribbed Tank Top</a>
                  </div>
                  <div className="text-tiny">Product name</div>
                </div>
              </div>
              <div className="body-text">(212) 555-1234</div>
              <div className="body-text">info@fashionshop.com</div>
              <div className="list-icon-function">
                <div className="item eye">
                  <i className="icon-eye" />
                </div>
                <div className="item edit">
                  <i className="icon-edit-3" />
                </div>
                <div className="item trash">
                  <i className="icon-trash-2" />
                </div>
              </div>
            </li>
            <li className="wg-product item-row">
              <div className="name flex-grow">
                <div className="image">
                  <img src="images/products/product-4.jpg" alt />
                </div>
                <div>
                  <div className="title">
                    <a href="#" className="body-title-2">Oversized Motif T-shirt</a>
                  </div>
                  <div className="text-tiny">Product name</div>
                </div>
              </div>
              <div className="body-text">(212) 555-1234</div>
              <div className="body-text">info@fashionshop.com</div>
              <div className="list-icon-function">
                <div className="item eye">
                  <i className="icon-eye" />
                </div>
                <div className="item edit">
                  <i className="icon-edit-3" />
                </div>
                <div className="item trash">
                  <i className="icon-trash-2" />
                </div>
              </div>
            </li>
            <li className="wg-product item-row">
              <div className="name flex-grow">
                <div className="image">
                  <img src="images/products/product-5.jpg" alt />
                </div>
                <div>
                  <div className="title">
                    <a href="#" className="body-title-2">Jersey thong body</a>
                  </div>
                  <div className="text-tiny">Product name</div>
                </div>
              </div>
              <div className="body-text">(212) 555-1234</div>
              <div className="body-text">info@fashionshop.com</div>
              <div className="list-icon-function">
                <div className="item eye">
                  <i className="icon-eye" />
                </div>
                <div className="item edit">
                  <i className="icon-edit-3" />
                </div>
                <div className="item trash">
                  <i className="icon-trash-2" />
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="divider" />
        <div className="flex items-center justify-between flex-wrap gap10">
          <div className="text-tiny">Showing 10 entries</div>
          <ul className="wg-pagination">
            <li>
              <a href="#"><i className="icon-chevron-left" /></a>
            </li>
            <li>
              <a href="#">1</a>
            </li>
            <li className="active">
              <a href="#">2</a>
            </li>
            <li>
              <a href="#">3</a>
            </li>
            <li>
              <a href="#"><i className="icon-chevron-right" /></a>
            </li>
          </ul>
        </div>
      </div>
      {/* /all-user */}
    </div>
    {/* /main-content-wrap */}
  </div>
  {/* /main-content-wrap */}
  {/* bottom-page */}
  <div className="bottom-page">
    <div className="body-text">Copyright © 2024 <a href="https://themesflat.co/html/ecomus/index.html">Ecomus</a>. Design by Themesflat All rights reserved</div>
  </div>
  {/* /bottom-page */}
</div>

  )
}

export default ListUser