
function SummaryRow({ label, value, valueClassName = '' }) {
  if (!value) return null

  return (
    <p className="success-detail-row">
      {label}:{' '}
      <strong className={valueClassName || undefined}>{value}</strong>
    </p>
  )
}

export default SummaryRow
