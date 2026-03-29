interface IconProps {
  size?: number | string;
  color?: string;
  className?: string;
}

export const PreviewIcon = ({
  size = 16,
  color = "none",
  className,
}: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

export const CodeIcon = ({
  size = 16,
  color = "#000000",
  className,
}: IconProps) => (
  <svg
    fill={color}
    width={size}
    height={size}
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <g>
      <path d="M5.15,5,3.88,3.76.29,7.34a.91.91,0,0,0,0,1.28l3.64,3.64L5.2,11l-3-3Zm10.6,2.31L12.16,3.76,10.89,5l2.95,3-3,3,1.27,1.28,3.64-3.64A.91.91,0,0,0,15.75,7.34ZM5.63,13.78l1.74.44,3-12L8.61,1.78Z" />
    </g>
  </svg>
);

export const ExportIcon = ({ size = 16, color = "none", className }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    fill={color}
    className={className}
  >
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" x2="12" y1="15" y2="3" />
  </svg>
);

export const DropdownIcon = ({
  size = 16,
  color = "none",
  className,
}: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    fill={color}
    className={className}
  >
    <path d="m6 9 6 6 6-6" />
  </svg>
);
