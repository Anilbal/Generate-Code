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

export const ExportIcon = ({
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

export const NavbarSectionIcon: React.FC<IconProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="M2 9h20" />
    <circle cx="6" cy="6.5" r=".5" fill="currentColor" />
    <circle cx="8" cy="6.5" r=".5" fill="currentColor" />
    <circle cx="10" cy="6.5" r=".5" fill="currentColor" />
  </svg>
);

export const HeroSectionIcon: React.FC<IconProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m2 14 3-3 3 3 5-5 7 7" />
    <circle cx="8.5" cy="8.5" r="1.5" />
  </svg>
);

export const FeaturesSectionIcon: React.FC<IconProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M12 3v19" />
    <path d="M5 8h14" />
    <path d="M15 4.5 19 8l-4 3.5" />
    <path d="m9 20-4-3.5 4-3.5" />
    <rect width="20" height="20" x="2" y="2" rx="2" />
  </svg>
);

export const CTASectionIcon: React.FC<IconProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5" />
    <circle cx="12" cy="12" r="10" stroke-dasharray="2 4" />
  </svg>
);

export const FooterSectionIcon: React.FC<IconProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="M2 15h20" />
    <path d="M7 18h10" />
  </svg>
);