import React, { type PropsWithChildren } from "react";
import styles from "./PageLayout.module.css";
import {Footer, PageWrapper} from "@/components";

export const PageLayout: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <div className={styles.layout}>
            <PageWrapper>
                {children}
            </PageWrapper>
            <Footer/>
        </div>
    );
};