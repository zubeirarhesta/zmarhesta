import Hero from "@/components/home-page/hero-section";
import Photo from "@/components/home-page/photo-section";
import Modal from "@/components/ui/modal";
import { useState } from "react";

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentId, setCurrentId] = useState(null);

  const openModal = (id) => {
    setIsModalOpen(true);
    setCurrentId(id);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Hero />
      <Photo onPhotoClick={openModal} />
      <Modal id={currentId} onClose={closeModal} isOpen={isModalOpen} />
    </>
  );
}
