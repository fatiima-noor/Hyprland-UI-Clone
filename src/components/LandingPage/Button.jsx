function Button({ children, type = 'default', size = 'xl' }) {
  const baseStyles = 'font-medium rounded-lg transition-all duration-300';
  const sizeStyles = size === 'xl' ? 'px-6 py-3 text-lg' : 'px-4 py-2 text-base';
  const typeStyles =
    type === 'fancyOutline'
      ? 'border-2 border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white'
      : 'bg-cyan-500 text-white hover:bg-cyan-600';

  return (
    <button className={`${baseStyles} ${sizeStyles} ${typeStyles}`}>
      {children}
    </button>
  );
}

export default Button;