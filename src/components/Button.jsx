/* eslint-disable react/prop-types */
import classNames from "classnames";
import { FaSync } from "react-icons/fa";

function Button({
  children,
  loading,
  icons,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  ...rest
}) {
  const classes = classNames("flex justify-center items-center h-10 w-28", {
    "h-auto w-auto p-1.5 rounded-sm": icons,
    "opacity-80": loading,
    "bg-blue-600 text-white": primary,
    "bg-gray-600 text-white": secondary,
    "bg-green-600 text-white": success,
    "bg-yellow-500 text-white": warning,
    "bg-red-500 text-white": danger,
    "border-2 bg-transparent": outline,
    "rounded-full": rounded,

    "border-blue-500 text-blue-500": primary && outline,
    "border-gray-500 text-gray-700": secondary && outline,
    "border-green-500 text-green-600": success && outline,
    "border-yellow-500 text-yellow-500": warning && outline,
    "border-red-500 text-red-500": danger && outline,
  });

  return (
    <button className={classes} disabled={loading} {...rest}>
      {loading ? (
        <FaSync className="animate-spin" size={icons && 14} />
      ) : (
        children
      )}
    </button>
  );
}

Button.propTypes = {
  checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!success) +
      Number(!!warning) +
      Number(!!danger);

    if (count > 1) {
      return new Error(`You can't use more than one variation at a time`);
    }
  },
};

export default Button;
