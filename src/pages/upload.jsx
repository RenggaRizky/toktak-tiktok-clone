import UploadCard from "@/components/UploadCard";
import ContainerNav from "@/layouts/ContainerNav";
import styles from "@/styles/css/upload.module.css";

const upload = () => {
    return (
        <>
            <ContainerNav classMain={`${styles.uploadWrapper} w-100`}>
                <UploadCard />
            </ContainerNav>
        </>
    );
};

export default upload;
