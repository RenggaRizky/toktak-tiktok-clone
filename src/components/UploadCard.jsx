import styles from "@/styles/css/upload.module.css";
import { IoMdCloudUpload } from "react-icons/io";

const UploadCard = () => {
    return (
        <section className='container row p-0 mx-0 mx-sm-auto my-0'>
            <div className='card p-4'>
                <div className='card-body'>
                    <h1 className='display-6 text-dark fw-bold mb-2'>Unggah Video</h1>
                    <p className='fs-6 text-gray mb-md-4 mb-lg-5'>Posting video ke akun anda</p>
                    <form className='row gy-5 gx-md-4'>
                        <div className='col-12 col-md-6 col-lg-5 col-xl-4 mt-5'>
                            <div className={`${styles.uploadVideo} border-link border-4 text-center p-4 rounded-3`}>
                                <IoMdCloudUpload className='text-link' style={{ fontSize: "80px" }} />
                                <h2 className='display-6 fs-6 text-dark fw-bold mt-3 mb-5'>Pilih video untuk diunggah</h2>
                                <p className='fs-6 text-dark fw-light mb-4'>MP4, WebM, atau OGG</p>
                                <p className='fs-6 text-dark fw-light mb-4'>Resolusi 720x1280 atau lebih tinggi</p>
                                <p className='fs-6 text-dark fw-light mb-4'>Sampai 10 menit</p>
                                <p className='fs-6 text-dark fw-light mb-4'>Kurang dari 2GB</p>

                                <button for='upload' className='btn btn-primary text-white w-100 my-4'>
                                    Pilih File
                                </button>
                                {/* <label for='upload' className='form-label'>
                                    Large file input example
                                </label> */}
                                <input className='d-none' id='upload' type='file' />
                            </div>
                        </div>

                        <div className='col-12 col-md-6 col-lg-7 col-xl-8 px-xl-4'>
                            <div className='mb-4'>
                                <label for='caption' className='form-label text-dark fw-bold fs-6'>
                                    Keterangan
                                </label>
                                <input type='email' className='form-control border border-link ' id='caption' />
                            </div>

                            <div className='mb-5'>
                                <label for='topics' className='form-label text-dark fw-bold fs-6'>
                                    Pilih topik
                                </label>
                                <select className='form-select form-select-lg mb-3 text-dark fs-6 border border-link' id='topics'>
                                    <option selected disabled hidden>
                                        Pilih salah satu
                                    </option>
                                    <option value='komedi'>Komedi</option>
                                    <option value='pendidikan'>Pendidikan</option>
                                    <option value='hiburan'>Hiburan</option>
                                    <option value='kendaraan'>Kendaraan</option>
                                    <option value='film&animasi'>Film & Animasi</option>
                                    <option value='game'>Game</option>
                                    <option value='musik'>Musik</option>
                                    <option value='berita&politik'>Berita & Politik</option>
                                    <option value='blog'>Blog</option>
                                    <option value='hewan'>Hewan</option>
                                    <option value='olahraga'>Olahraga</option>
                                    <option value='sains&teknologi'>Sains & Teknologi</option>
                                    <option value='perjalanan&acara'>Perjalanan & Acara</option>
                                </select>
                            </div>

                            <div className={`${styles.buttonWrapper} mb-4 d-flex justify-content-center column-gap-3 justify-content-lg-start`}>
                                <button className='btn btn-light border-secondary border-2 rounded-2 text-dark px-4 py-2 fw-bold fs-6'>Buang</button>
                                <input type='submit' className='btn btn-primary rounded-2 text-white text-white px-4 py-2 fw-bold fs-6' value='Posting' />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default UploadCard;
