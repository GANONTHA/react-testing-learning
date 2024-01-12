import PropTypes from "prop-types";

export function OrderListOption(props) {
  const { value } = props;
  return (
    <>
      <li className="value">{value}</li>
    </>
  );
}

OrderListOption.prototype = {
  value: PropTypes.string,
};
