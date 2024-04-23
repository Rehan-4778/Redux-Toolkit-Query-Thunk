import classNames from "classnames";

const Skeleton = ({ times }) => {
  const outerClasses = classNames(
    "relative",
    "bg-gray-200",
    "overflow-hidden",
    "h-10",
    "mb-2"
  );
  const innerClasses = classNames(
    "animate-shimmer",
    "absolute",
    "transle-x-full",
    "bg-gradient-to-r",
    "from-gray-200",
    "via-white",
    "to-gray-200",
    "inset-0 "
  );

  const boxes = Array(times)
    .fill(0)
    .map((_, index) => (
      <div className={outerClasses} key={index}>
        <div className={innerClasses}></div>
      </div>
    ));

  return boxes;
};

export default Skeleton;
