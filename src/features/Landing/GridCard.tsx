import type React from "react";

interface GridCardProps {
  name: string;
  categories: string[];
  video?: string;
}

const GridCard: React.FC<GridCardProps> = ({ name, categories, video }) => {
  return (
    <div className="w-full h-full rounded-sm overflow-hidden group mb-4 px-2 sm:px-0">
      <video
        src={video}
        autoPlay
        muted
        loop
        playsInline
        className="rounded-sm overflow-hidden"
      />
      <h1 className="text-xl ">{name}</h1>
      <p className="text-xs py-2 group-hover:opacity-100 opacity-0 transition-opacity duration-500 text-gray-500">
        {categories.join(", ")}
      </p>
    </div>
  );
};

export default GridCard;
