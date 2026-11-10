type ImagePlaceholderProps = {
  label: string;
  className?: string;
};

// Keeps future hotel photos simple to replace when they're ready.
export function ImagePlaceholder({ label, className = "" }: ImagePlaceholderProps) {
  return (
    <div
      className={`photo-placeholder ${className}`}
      role="img"
      aria-label={`${label} photo placeholder`}
    >
      <span className="photo-placeholder__label">{label}</span>
    </div>
  );
}