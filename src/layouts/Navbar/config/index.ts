export const navLinks = [
    { href: "#features", label: "Services" },
    { href: "#work", label: "Portfolio" },
    { href: "#process", label: "Process" },
    { href: "#approach", label: "Approach" },
] as const;

export const mobileMenuAnimationConfig = {
    initial: { opacity: 0, height: 0 },
    animate: { opacity: 1, height: "auto" },
    exit: { opacity: 0, height: 0 },
};
