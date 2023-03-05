import Image from "next/image";
import Link from "next/link";
import { AiFillCheckCircle } from "react-icons/ai";

const Account = ({ url, name, img, height, width, nameStyle, usernameStyle, hide = true }) => {
    return (
        <>
            <Link href={url} className={[hide ? "d-lg-flex align-items-center" : "d-flex align-items-start", "rouded-circle mb-3"].join(" ")}>
                <Image src={img} height={height} width={width} alt={name} className={[hide ? "" : "me-3", ""].join(" ")} />
                <div className={[hide ? "d-none d-lg-inline-block " : "d-lg-flex", "ms-lg-3"].join(" ")}>
                    <div className={[hide ? "d-lg-flex" : "d-flex", "align-items-center"].join(" ")}>
                        <p className={[hide ? `` : `me-1`, `${nameStyle} fw-bold text-dark mb-0`].join(" ")}>{name}</p>
                        <AiFillCheckCircle className='text-verified ms-lg-2' />
                    </div>
                    <p className={`${usernameStyle} mb-0 text-gray`}>{name}</p>
                </div>
            </Link>
        </>
    );
};

export default Account;
