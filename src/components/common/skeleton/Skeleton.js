import LibrarySkeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Skeleton = ({ width, height }) => {
  return <LibrarySkeleton width={width} height={height} />;
};

export default Skeleton;
