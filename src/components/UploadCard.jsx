import styles from "@/styles/css/upload.module.css";
import { IoMdCloudUpload } from "react-icons/io";

const UploadCard = () => {
    return (
        <section className='container row p-0 mx-0 mx-lg-auto my-0'>
            <div className='card p-4'>
                <div className='card-body'>
                    <h1 className='display-6 text-dark fw-bold mb-2'>Unggah Video</h1>
                    <p className='fs-6 text-gray'>Posting video ke akun anda</p>
                    <div className='row gy-5'>
                        <div className='col-12 mt-5'>
                            <div className={`${styles.uploadVideo} border-link border-4 text-center p-4 rounded-3`}>
                                {/* <label for='formFileLg' className='form-label'>
                                Large file input example
                            </label> */}
                                {/* <input className={`${styles.uploadVideo} border-gray border-4 form-control form-control-lg`} id='formFileLg' type='file' /> */}
                                <IoMdCloudUpload className='text-link' style={{ fontSize: "80px" }} />
                                <h2 className='display-6 fs-6 text-dark fw-bold mt-3 mb-5'>Pilih video untuk diunggah</h2>
                                <p className='fs-6 text-dark fw-light mb-4'>MP4, WebM, atau OGG</p>
                                <p className='fs-6 text-dark fw-light mb-4'>Resolusi 720x1280 atau lebih tinggi</p>
                                <p className='fs-6 text-dark fw-light mb-4'>Sampai 10 menit</p>
                                <p className='fs-6 text-dark fw-light mb-4'>Kurang dari 2GB</p>

                                <button className='btn btn-primary text-white w-100 my-4'>Pilih File</button>
                            </div>
                        </div>

                        <div className='col-12'>
                            <div class='mb-4'>
                                <label for='caption' class='form-label text-dark fw-bold fs-6'>
                                    Keterangan
                                </label>
                                <input type='email' class='form-control' id='caption' />
                            </div>

                            <div class='mb-4'>
                                <label for='topics' class='form-label text-dark fw-bold fs-6'>
                                    Pilih topik
                                </label>
                                <select class='form-select form-select-lg mb-3' id='topics'>
                                    <option selected>Open this select menu</option>
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
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UploadCard;
