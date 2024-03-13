import "./productSort.css";
import FilterIcon from "../../assets/icons/filter.svg";
const ProductSort = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div className="flex justify-between">
          <button className="selected-btn">Barchasi</button>
          <button className="default-btn">Pitsa</button>
          <button className="default-btn">Burger</button>
          <button className="default-btn">Kombo</button>
          <button className="default-btn">Salat</button>
          <button className="default-btn">Shirinliklar</button>
          <button className="default-btn">Ichimliklar</button>
          <button className="flex items-center gap-2 default-btn">
            <img src={FilterIcon} alt="" />
            Filter
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductSort;
