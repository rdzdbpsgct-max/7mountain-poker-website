"use client";

import { useState, useCallback, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";

type ImageLightboxProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
};

export default function ImageLightbox({
  src,
  alt,
  width,
  height,
  className = "",
  priority = false,
}: ImageLightboxProps) {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, close]);

  return (
    <>
      {/* Thumbnail with hover effect */}
      <div
        onClick={open}
        className={`group relative cursor-zoom-in overflow-hidden ${className}`}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="w-full h-auto transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          priority={priority}
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-emerald/0 group-hover:bg-emerald/5 transition-colors duration-300" />
        {/* Zoom icon */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-12 h-12 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center border border-white/20">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="M21 21l-4.35-4.35" />
              <path d="M11 8v6M8 11h6" />
            </svg>
          </div>
        </div>
      </div>

      {/* Lightbox overlay — rendered via portal to escape transform containers */}
      {isOpen &&
        createPortal(
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8 animate-[fadeIn_0.2s_ease-out]"
            onClick={close}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/85 backdrop-blur-md" />

            {/* Close button */}
            <button
              onClick={close}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center transition-colors border border-white/10"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>

            {/* Hint text */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/40 text-xs">
              ESC or click to close
            </div>

            {/* Full-size image */}
            <div
              className="relative max-w-[95vw] max-h-[90vh] animate-[scaleIn_0.25s_ease-out]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={src}
                alt={alt}
                width={width * 2}
                height={height * 2}
                className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
                quality={95}
              />
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
