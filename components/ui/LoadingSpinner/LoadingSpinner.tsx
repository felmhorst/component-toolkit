import styles from "./LoadingSpinner.module.css";

interface LoadingSpinnerProps {
    size?: "md" | "sm";
}

export const LoadingSpinner = ({
    size = "md"
}: LoadingSpinnerProps) => {

    const sizeClassName = styles[`spinner--size-${size}`];
    return (
        <div
            className={`${styles.spinner} ${sizeClassName}`}
            aria-label={"loading"}/>
    );
};