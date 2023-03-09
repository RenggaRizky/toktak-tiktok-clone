import Image from "next/image";
import Link from "next/link";
import { AiFillCheckCircle } from "react-icons/ai";

const Account = ({ url, name, img, height, width, nameStyle, usernameStyle, hide = true, isProfile = false }) => {
    return (
        <>
            <Link href={url} className={[hide ? "d-lg-flex align-items-center" : isProfile ? "d-flex align-items-center flex-wrap row-gap-3" : "d-flex align-items-start align-items-lg-center", "rouded-circle mb-3"].join(" ")}>
                <Image src={img} height={height} width={width} alt={name} className={[hide ? "" : "me-3 me-lg-0", ""].join(" ")} />
                <div className={[hide ? "d-none d-lg-inline-block" : isProfile ? "d-inline-block" : "d-lg-flex align-items-lg-center", "ms-lg-3"].join(" ")}>
                    <div className={[hide ? "d-lg-flex" : "d-flex", "align-items-center"].join(" ")}>
                        <p className={[hide ? `` : `me-1`, `${nameStyle} fw-bold text-dark mb-0`].join(" ")}>{name}</p>
                        <AiFillCheckCircle className={[hide ? "ms-lg-2" : "ms-lg-1", "text-verified"].join(" ")} />
                    </div>
                    <p className={[hide ? `` : isProfile ? `` : `ms-lg-2`, `${usernameStyle} mb-0 text-gray`].join(" ")}>{name}</p>
                </div>
            </Link>
        </>
    );
};

export default Account;
