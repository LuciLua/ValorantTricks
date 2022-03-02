// Skeleton components
import Shimmer from "./Shimmer";
import SkeletonElement from "./SkeletonElement";

const SkeletonAgents = ({ theme }) => {
  const themeClass = theme || "light";

  return (
    <>
      <div className={`skeleton-wrapper ${themeClass}`}>
        <div className="skeleton-agents">
          <SkeletonElement type="cardTitle" />

          <div className="skeleton-wrraperTypeIcon">
            <SkeletonElement type="cardIcon" />
            <SkeletonElement type="cardType" />
          </div>

          <SkeletonElement type="cardImage" />
        </div>
        <Shimmer />
      </div>
    </>
  );
};

export default SkeletonAgents;
