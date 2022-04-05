import './component.css'

export const MinimalInput = ({ error, value, onChange, label, w, labelStyles, InputStyles, ...props }) => (
  <div className='minimal-input' style={w ? { width: `${w}%` } : { width: 'auto' }}>
    <div className={`minimal-input-label ${error ? 'error-label' : ''} ${props.disabled ? 'disabled-label' : ''}`} style={labelStyles}>
      {label}
    </div>
    <input className={`minimal-input-base ${error ? 'error-input' : ''}`} style={InputStyles} {...props} value={value} onChange={e => onChange(e.target.value)} />
    {error && error.error && <span className='error-msg'>{error.msg}</span>}
  </div>
)

export const Button = ({ children, ...props }) => {
  const getClasses = () => {
    if (props.variant === 'primary') return 'bg-primary border-none outline-none px-8 py-2 font-extrabold rounded text-white'
    if (props.variant === 'secondary') return 'bg-none border-none outline-none px-8 py-2 font-extrabold rounded text-black'
  }
  return (
    <button className={getClasses()} {...props}>
      {children}
    </button>
  )
}
