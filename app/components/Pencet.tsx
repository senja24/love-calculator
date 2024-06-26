
"use client";

import { Button, Modal } from "flowbite-react";
import { useState } from "react";

export default function Pencet() {
    const [openModal, setOpenModal] = useState(true);

    return (
        <>
            <Button onClick={() => setOpenModal(true)}>Love Sekebon</Button>
            <Modal show={openModal} onClose={() => setOpenModal(false)}>
                <Modal.Header>Love Calculator</Modal.Header>
                <Modal.Body>
                    <div className="space-y-6">
                        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                            Bingung mau nulis apaan buat bagian ini. karena aku juga udah capek banget seharian heheee. Yang penting ini bagian persembahan.
                        </p>
                        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                            Pokoknya makasih banget buat <a href="https://x.com/Eun_eo" target="_blank">Panda</a> dan <a href="https://x.com/hemogIobine" target="_blank">Yaya </a>yang udah nyaranin buat bikin ini aplikasi sederhana ❤️
                        </p>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => setOpenModal(false)}>Oke</Button>
                    <Button color="gray" onClick={() => setOpenModal(false)}>
                        Oke juga si
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
