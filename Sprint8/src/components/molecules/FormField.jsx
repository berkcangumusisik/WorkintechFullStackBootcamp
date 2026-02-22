
function FormField({ label, required = false, error = '', errorId, children }) {
  return (
    <div className="form-group">
      {label && (
        <label className="form-label">
          {label}
          {required && <span className="required"> *</span>}
        </label>
      )}
      {children}
      {error && (
        <p className="form-error-msg" id={errorId} role="alert">
          {error}
        </p>
      )}
    </div>
  )
}

export default FormField
