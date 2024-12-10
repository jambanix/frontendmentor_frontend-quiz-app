export const Button = ({ children, disabled, ...props }) => {

  const colourClass = disabled ? "bg-grey-navy cursor-default" : "bg-purple";

  return (
    <button className={`transition-colors rounded-xl text-pure-white p-4" ${colourClass} cursor-pointer`} {...props}>
      {children}
    </button>
  );
};
