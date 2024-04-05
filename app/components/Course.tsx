"use client";

interface ItemProps {
  itemId?: string;
  index?: number;
  item_title?: string;
  item_subtitle?: string;
}

const Course = (props: ItemProps) => {
  const { itemId, index, item_title, item_subtitle } = props;

  return (
    <div className="card mb-2 w-full" key={index}>
      <h4>{item_title}</h4>
      <p className="info mb-2">{item_subtitle}</p>
    </div>
  );
};

export default Course;
