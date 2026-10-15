export default function Badge({ children, variant = "purple" }) {
  const styles = {
    purple: "bg-secondary text-on-secondary",
    lime: "bg-tertiary-fixed text-[#121f00]",
    red: "bg-error text-on-error",
    softRed: "bg-error-container text-on-error-container",
    dark: "bg-primary-container text-on-primary-container"
  };
  return <span className={`inline-flex items-center rounded-full px-2 py-1 text-[10px] font-bold tracking-wide ${styles[variant] || styles.purple}`}>{children}</span>;
}
