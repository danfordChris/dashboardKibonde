export default function Products() {
  return (
    <div className="m-4">
      <div className="flex flex-row p-2 w-full">
        <div className="flex flex-row basis-5/6">
          <label className="me-3 p-1 ">Product name</label>
          <input
            type="text"
            className="p-1 focus:outline focus:outline-none focus:ring focus:ring-slate-100 border border-slate-300 rounded-md
          w-80 text-sm"
            placeholder="Search product ..."
          />
        </div>
        <button className="bg-blue-500 p-1 w-16 rounded-md text-white font-bold md:ms-28 hover:bg-blue-900">
          +
        </button>
      </div>
      <div className="justify-center h-[100vh] grid md:mt-20" id="addCard ">
        <div className="flex flex-col shadow-sm shadow-black h-80 text-sm">
          <div className="flex flex-row p-3 ">
            <label className="me-2 p-1 basis-1/3">Product name</label>
            <input
              type="text"
              className="p-1 focus:outline focus:outline-none focus:ring focus:ring-slate-100 border border-slate-300 rounded-md
           text-sm"
              placeholder="Enter product name"
            />
          </div>
          <div className="flex flex-row p-3">
            <label className="me-2 p-1 basis-1/3">Cost</label>
            <input
              type="number"
              className="p-1 focus:outline focus:outline-none focus:ring focus:ring-slate-100 border border-slate-300 rounded-md
           text-sm"
              placeholder="Enter cost"
            />
          </div>
          <div className="flex flex-row p-3 ">
            <label className="me-2 p-1 basis-1/3">Unit price</label>
            <input
              type="number"
              className="p-1 focus:outline focus:outline-none focus:ring focus:ring-slate-100 border border-slate-300 rounded-md
           text-sm"
              placeholder="Enter unit price"
            />
          </div>
          <div className="flex flex-row p-3 ">
            <label className="me-2 p-1 basis-1/3">Total price</label>
            <input
              type="number"
              className="p-1 focus:outline focus:outline-none focus:ring focus:ring-slate-100 border border-slate-300 rounded-md
           text-sm"
              placeholder="Total price"
            />
          </div>
          <button className="bg-blue-600 p-1 m-4 text-white font-bold mt-10 hover:bg-blue-900">Add Product</button>
        </div>
      </div>
    </div>
  );
}
