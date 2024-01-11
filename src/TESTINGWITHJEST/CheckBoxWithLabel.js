import { useState } from "react";

export default function CheckBoxWithLabel(props) {
  const [isChecked, setIsChecked] = useState(false);
  const { labelOn, labelOff } = props;

  const onChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <label>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={onChange}
        data-testid="checkbox"
      />
      {isChecked ? labelOn : labelOff}
    </label>
  );
}
