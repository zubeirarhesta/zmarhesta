import Footer from "@/components/home-page/footer-section";
import Hero from "@/components/home-page/hero-section";
import Photo from "@/components/home-page/photo-section";
import Modal from "@/components/ui/modal";
import { useEffect, useRef, useState } from "react";

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentId, setCurrentId] = useState(null);

  const footerRef = useRef(null);
  const [isFooterIntersecting, setIsFooterIntersecting] = useState(false);
  const [isIconVisible, setIsIconVisible] = useState(false);

  const openModal = (id) => {
    setIsModalOpen(true);
    setCurrentId(id);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const footerObs = new IntersectionObserver(
      ([entry]) => {
        setIsFooterIntersecting(entry.isIntersecting);
      },
      {
        threshold: 0.5,
      }
    );

    footerObs.observe(footerRef.current);

    return () => footerObs.disconnect();
  }, [isFooterIntersecting]);

  useEffect(() => {
    if (isFooterIntersecting) {
      document.body.classList.add("colored_body");
    } else {
      document.body.classList.remove("colored_body");
    }
  }, [isFooterIntersecting]);

  useEffect(() => {
    const hiddenElements = footerRef.current.querySelectorAll("li");

    hiddenElements.forEach((e) => {
      if (isFooterIntersecting) {
        /* e.classList.add("show"); */
        setIsIconVisible(true);
      } else {
        // e.classList.remove("show");
        setIsIconVisible(false);
      }
    });
  }, [isFooterIntersecting]);

  return (
    <>
      <Hero />
      <Photo onPhotoClick={openModal} />
      <Modal id={currentId} onClose={closeModal} isOpen={isModalOpen} />
      <Footer ref={footerRef} iconVisibility={isIconVisible} />
    </>
  );
}
