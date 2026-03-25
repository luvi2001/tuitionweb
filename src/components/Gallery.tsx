import Image from 'next/image';

const galleryItems = [
  { label: 'Featured image — classroom / event', image: '/image1.JPG' },
  { label: 'Activity photo', image: '/image2.JPG' },
  { label: 'Workshop photo', image: '/image3.JPG' },
  { label: 'Students / team photo', image: '/image4.JPG' },
    { label: 'Classsroom Pic', image: '/image6.png' },

];

const GalleryPlaceholder = ({ label }: { label: string }) => (
  <div className="img-placeholder-gallery">
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#6b7a8d" strokeWidth="1.5">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <polyline points="21 15 16 10 5 21" />
    </svg>
    <span>{label}</span>
  </div>
);

export default function Gallery() {
  return (
    <section className="gallery" id="gallery">
      <div className="gallery-inner">
        <div className="gallery-heading fade-up">
          <h2>Life at Learning Zone</h2>
          <p>Moments from our classes, workshops, and activities — showcasing our learning community in action.</p>
        </div>
        <div className="gallery-grid fade-up">
          {galleryItems.map((item, i) => (
            <div
              className="gallery-item"
              key={i}
              style={{ position: 'relative' }}
              title={item.label}
            >
              {item.image && (
                <>
                  <Image
                    src={item.image}
                    alt={item.label}
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                    priority={i === 0}
                  />
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(180deg, transparent 0%, rgba(10, 22, 40, 0.3) 100%)',
                    opacity: 0,
                    transition: 'opacity 0.35s ease',
                  }} 
                  className="gallery-overlay"
                  />
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
