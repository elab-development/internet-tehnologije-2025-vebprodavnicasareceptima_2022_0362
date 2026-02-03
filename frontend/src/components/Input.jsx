export default function Input({
  label,
  value,
  onChange,
  placeholder = '',
  type = 'text',
  className = '',
  disabled = false,
  required = false,
  name = ''
}) {
  return (
    <div className="input-group">
      {label && <label htmlFor={name}>{label}</label>}
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`input-field ${className}`}
        disabled={disabled}
        required={required}
      />
    </div>
  );
}
