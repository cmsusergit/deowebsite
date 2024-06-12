import { useState, useEffect } from "react";
export default function Slider({ sliderList }) {
  const [currindx, setCurrIndx] = useState(0);
  return (
    <>
      <div className="flex w-full px-4 py-0 space-x-1 overflow-x-scroll">
        {sliderList.map((slider, indx) => {
          return (
            <div className="carousel-item border">
              {/* <img src={slider} class="rounded-box size-72" /> */}
              <div className="card md:w-[40rem] w-[28rem] bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title underline">{slider.title}</h2>
                  <p className="card-content text-justify">
                    {slider.description}
                  </p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-secondary text-white rounded">
                      DOWNLOAD
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {/* <div className="min-h-72 w-full shadow-lg shadow-slate-800 relative">
        {sliderList.map((slider, indx) => {
          return (
            indx == currindx && (
              <div
                key={indx}
                className="absolute left-0 top-0  right-0 bg-base-200 min-h-72 text-white text-center"
              >
                <img
                  className="max-h-72 min-w-full object-scale-down"
                  src={slider}
                  alt={slider}
                />
              </div>
            )
          );
        })}
        <button
          onClick={() => {
            setCurrIndx(currindx > 0 ? currindx - 1 : sliderList.length - 1);
          }}
          id="prevBtn"
          type="button"
          className="hs-carousel-prev hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 start-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/10 rounded-s-lg dark:text-white dark:hover:bg-white"
        >
          <span className="text-2xl" aria-hidden="true">
            <svg
              className="flex-shrink-0 size-5"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m15 18-6-6 6-6"></path>
            </svg>
          </span>
          <span className="sr-only">Previous</span>
        </button>
        <button
          onClick={() => {
            setCurrIndx((currindx + 1) % sliderList.length);
          }}
          id="nextBtn"
          type="button"
          className="hs-carousel-next hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 end-0 inline-flex justify-center items-center w-[48px] h-full text-gray-800 hover:bg-gray-800/10 rounded-e-lg "
        >
          <span className="sr-only">Next</span>
          <span className="text-2xl" aria-hidden="true">
            <svg
              className="flex-shrink-0 size-5"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6"></path>
            </svg>
          </span>
        </button>
      </div> */}
    </>
  );
}
