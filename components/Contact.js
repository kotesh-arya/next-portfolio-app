import React from 'react';

function Contact() {
  return (
    <div className="container  px-4 flex flex-col items-center  mx-auto mt-10 ">
      <h2 className="text-2xl font-bold">CONTACT ME</h2>
      <div className="flex flex-col items-start pt-20 pb-10 justify-center">
        <div className=" px-4  mt-8   ml-4 ">
          <div>
            <form className=" text-gray-800  py-20 px-20 border-2 flex flex-col justify-between items-start">
              <label className="mb-10">
                Name:
                <input className="border-2" type="text" name="name" />
              </label>
              <label className="mb-10">
                Email Adddress:
                <input className="border-2" type="email" name="email" />
              </label>
              <label className="mb-10">
                Message:
                <textarea className="border-2" name="name" />
              </label>
              <input
                className="ml-auto mr-auto border-2 text-gray-600 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium "
                type="submit"
                value="Submit"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
