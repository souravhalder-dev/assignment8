import React from "react";

const AppsCard = ({ singleDta }) => {
  console.log(singleDta);

  const { image, companyName } = singleDta;

  return (
    <div className="   mt-10">
      <div className="card bg-base-100  shadow-sm">
        <figure className="h-48 overflow-hidden">
          <img className="w-full object-cover" src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{companyName}</h2>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppsCard;
