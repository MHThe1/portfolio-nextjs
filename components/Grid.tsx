import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { gridItems } from "@/data/index";

const Grid = () => {
  return (
    <section id="about">
      <h1 className="heading mt-10 mb-10">
        Brief <span className="text-purple">Intro</span>
      </h1>
      <BentoGrid>
        {gridItems.map(
            (item) => (
                <BentoGridItem
                    id={item.id}
                    key={item.id}
                    title={item.title}
                    description={item.description}
                    className={item.className}
                    img={item.img}
                    imgClassName={item.imgClassName}
                    titleClassName={item.titleClassName}
                    spareImg={item.spareImg}
                />
            )
        )}
      </BentoGrid>
    </section>
  );
};

export default Grid;
