import { OrderListOption } from "./OrderListOption";
import { PropTypes } from "prop-types";

export function OrderedList(props) {
  const { options } = props;
  if (!options.length) {
    return <span className="empty">Not Options provided</span>;
  }
  return (
    <>
      <ol className="options">
        {options.map((option, index) => (
          <OrderListOption key={option} value={option} />
        ))}
      </ol>
    </>
  );
}

OrderedList.prototype = {
  options: PropTypes.array,
};
OrderedList.defaultProps = {
  options: [],
};
