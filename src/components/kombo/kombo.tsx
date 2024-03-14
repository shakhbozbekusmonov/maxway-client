// import React from 'react'
import GamburgerImage from "../../assets/kombo-img/gamburger.png";
import { Container } from "@radix-ui/themes";
import KomboProduct from "./kombo-product";

const Kombo = () => {
  return (
    <Container>
      <div>
        <h2 className="text-[52px] leading-[63px] font-bold mb-8">Kombo</h2>
        <ul className="grid grid-cols-2 gap-5">
          <KomboProduct
            title="kombo-1"
            img={GamburgerImage}
            desc="Горячая закуска с митболами  из говядины, томатами"
            price="25.000 UZS"
          />
          <KomboProduct
            title="kombo-2"
            img={GamburgerImage}
            desc="Горячая закуска с митболами  из говядины, томатами"
            price="28.000 UZS"
          />
        </ul>
      </div>
    </Container>
  );
};

export default Kombo;
