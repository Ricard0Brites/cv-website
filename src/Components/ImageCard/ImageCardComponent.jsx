import PlaceholderImage from '../../assets/PlaceholderImage.png'

export default function ImageCard({ imageSrc, title, accentColor = 'zinc-400' }) {
    imageSrc = PlaceholderImage;
    return (
      <div
        className={`relative w-full h-full overflow-hidden rounded-2xl shadow-md`}
      >
        <img src={imageSrc} alt={title} className="absolute inset-0 w-full h-full object-cover"/>
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h2 className="text-white text-xl font-semibold">{title}</h2>
        </div>
      </div>
    );
  }
  