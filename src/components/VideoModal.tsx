import { X } from "lucide-react";
import { useEffect, useRef, useCallback } from "react";

interface Props {
  open: boolean;
  onClose: () => void;
  videoId: string;
}

const VideoModal = ({ open, onClose, videoId }: Props) => {
  const closeRef = useRef<HTMLButtonElement>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);

  // Store the element that opened the modal so we can return focus
  useEffect(() => {
    if (open) {
      previouslyFocused.current = document.activeElement as HTMLElement;
      // Small delay to ensure the modal is rendered before focusing
      requestAnimationFrame(() => closeRef.current?.focus());
    }
    return () => {
      if (!open && previouslyFocused.current) {
        previouslyFocused.current.focus();
        previouslyFocused.current = null;
      }
    };
  }, [open]);

  // Handle Escape key
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (open) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  // Trap focus within the modal (WCAG 2.4.3)
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key !== "Tab") return;

      const modal = e.currentTarget as HTMLElement;
      const focusable = modal.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"]), iframe'
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    },
    []
  );

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/95 p-4 backdrop-blur-sm animate-fade-up"
      style={{ backgroundColor: "hsl(var(--ink) / 0.95)" }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="video-modal-title"
      onKeyDown={handleKeyDown}
    >
      <h2 id="video-modal-title" className="sr-only">Veterans Dental Foundation Mission Video</h2>
      <button
        ref={closeRef}
        onClick={onClose}
        aria-label="Close video"
        className="absolute right-6 top-6 flex h-12 w-12 items-center justify-center rounded-full border border-primary-foreground/80 text-primary-foreground transition-colors hover:bg-accent hover:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold focus-visible:ring-offset-2"
      >
        <X className="h-5 w-5" aria-hidden="true" />
      </button>
      <div
        className="relative w-full max-w-5xl overflow-hidden rounded-sm shadow-cinematic"
        style={{ aspectRatio: "16/9" }}
        onClick={(e) => e.stopPropagation()}
      >
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
          title="Veterans Dental Foundation Mission"
          allow="autoplay; encrypted-media; fullscreen"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default VideoModal;
