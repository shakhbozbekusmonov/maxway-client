// import React from 'react'

const KomboProduct = (props: {
  title: string;
  img: string;
  desc: string;
  price: string;
}) => {
  console.log(props.img);

  return (
    <li className="w-full max-w-[540px] flex gap-[37px] border-[1px] px-[30px] py-[19px] rounded-[12px]">
      <img className="w-full max-w-[192px] h-[192px]" src={props.img} alt="" />
      <div>
        <h3 className="text-2xl font-medium mb-4 leading-[29px]">
          {props.title}
        </h3>
        <p className="text-[17px] text-[#222124] pr-[47px] opacity-40 mb-4">
          {props.desc}
        </p>
        <span className="flex items-center justify-between">
          <h4 className="text-2xl font-bold leading-[29px]">{props.price}</h4>
          <button className="w-[50px] h-[50px] bg-yellow-400 rounded-[50%] text-white text-2xl">
            +
          </button>
        </span>
      </div>
    </li>
  );
};

export default KomboProduct;
