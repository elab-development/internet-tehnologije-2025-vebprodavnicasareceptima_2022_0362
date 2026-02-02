export default function Button({
  label,
  onClick,
  className = '',
  variant = 'primary',
  disabled = false,
  type = 'button'
}) {
  const baseClass = 'btn';
  const variantClass = `btn-${variant}`;

  return (
    <button
      type={type}
      className={`${baseClass} ${variantClass} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
}
