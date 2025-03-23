import React from 'react'

const AddUser = () => {
  return (
    <div className="main-content">
  {/* main-content-wrap */}
  <div className="main-content-inner">
    {/* main-content-wrap */}
    <div className="main-content-wrap">
      <div className="flex items-center flex-wrap justify-between gap20 mb-30">
        <h3>Add New User</h3>
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
            <div className="text-tiny">Add New User</div>
          </li>
        </ul>
      </div>
      {/* add-new-user */}
      <form className="form-add-new-user form-style-2">
        <div className="wg-box">
          <div className="left">
            <h5 className="mb-4">Account</h5>
            <div className="body-text">Fill in the information below to add a new account</div>
          </div>
          <div className="right flex-grow">
            <fieldset className="name mb-24">
              <div className="body-title mb-10">Name</div>
              <input className="flex-grow" type="text" placeholder="Username" name="name" tabIndex={0} defaultValue aria-required="true" required />
            </fieldset>
            <fieldset className="email mb-24">
              <div className="body-title mb-10">Email</div>
              <input className="flex-grow" type="email" placeholder="Email" name="email" tabIndex={0} defaultValue aria-required="true" required />
            </fieldset>
            <fieldset className="password mb-24">
              <div className="body-title mb-10">Password</div>
              <input className="password-input" type="password" placeholder="Enter password" name="password" tabIndex={0} defaultValue aria-required="true" required />
              <span className="show-pass">
                <i className="icon-eye view" />
                <i className="icon-eye-off hide" />
              </span>
            </fieldset>
            <fieldset className="password">
              <div className="body-title mb-10">Confirm password</div>
              <input className="password-input" type="password" placeholder="Confirm password" name="password" tabIndex={0} defaultValue aria-required="true" required />
              <span className="show-pass">
                <i className="icon-eye view" />
                <i className="icon-eye-off hide" />
              </span>
            </fieldset>
          </div>
        </div>
        <div className="wg-box">
          <div className="left">
            <h5 className="mb-4">Pernission</h5>
            <div className="body-text">Items that the account is allowed to edit</div>
          </div>
          <div className="right flex-grow">
            <fieldset className="mb-24">
              <div className="body-title mb-10">Add product</div>
              <div className="radio-buttons">
                <div className="item">
                  <input className type="radio" name="add-product" id="add-product1" defaultChecked />
                  <label className htmlFor="add-product1"><span className="body-title-2">Allow</span></label>
                </div>
                <div className="item">
                  <input className type="radio" name="add-product" id="add-product2" />
                  <label className htmlFor="add-product2"><span className="body-title-2">Deny</span></label>
                </div>
              </div>
            </fieldset>
            <fieldset className="mb-24">
              <div className="body-title mb-10">Update product</div>
              <div className="radio-buttons">
                <div className="item">
                  <input className type="radio" name="update-product" id="update-product1" />
                  <label className htmlFor="update-product1"><span className="body-title-2">Allow</span></label>
                </div>
                <div className="item">
                  <input className type="radio" name="update-product" id="update-product2" defaultChecked />
                  <label className htmlFor="update-product2"><span className="body-title-2">Deny</span></label>
                </div>
              </div>
            </fieldset>
            <fieldset className="mb-24">
              <div className="body-title mb-10">Delete product</div>
              <div className="radio-buttons">
                <div className="item">
                  <input className type="radio" name="delete-product" id="delete-product1" defaultChecked />
                  <label className htmlFor="delete-product1"><span className="body-title-2">Allow</span></label>
                </div>
                <div className="item">
                  <input className type="radio" name="delete-product" id="delete-product2" />
                  <label className htmlFor="delete-product2"><span className="body-title-2">Deny</span></label>
                </div>
              </div>
            </fieldset>
            <fieldset className="mb-24">
              <div className="body-title mb-10">Apply discount</div>
              <div className="radio-buttons">
                <div className="item">
                  <input className type="radio" name="apply-product" id="apply-product1" />
                  <label className htmlFor="apply-product1"><span className="body-title-2">Allow</span></label>
                </div>
                <div className="item">
                  <input className type="radio" name="apply-product" id="apply-product2" defaultChecked />
                  <label className htmlFor="apply-product2"><span className="body-title-2">Deny</span></label>
                </div>
              </div>
            </fieldset>
            <fieldset className>
              <div className="body-title mb-10">Create coupon</div>
              <div className="radio-buttons">
                <div className="item">
                  <input className type="radio" name="create-product" id="create-product1" />
                  <label className htmlFor="create-product1"><span className="body-title-2">Allow</span></label>
                </div>
                <div className="item">
                  <input className type="radio" name="create-product" id="create-product2" defaultChecked />
                  <label className htmlFor="create-product2"><span className="body-title-2">Deny</span></label>
                </div>
              </div>
            </fieldset>
          </div>
        </div>
        <div className="bot">
          <button className="tf-button w180" type="submit">Save</button>
        </div>
      </form>
      {/* /add-new-user */}
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

export default AddUser