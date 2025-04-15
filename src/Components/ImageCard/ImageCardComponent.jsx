import PlaceholderImage from '../../assets/PlaceholderImage.png'

export default function ImageCard({imageSrc = PlaceholderImage, title = 'PlaceHolder Title'}) {

    return (
      <div className={`relative overflow-hidden shadow-md hover:-mt-50 duration-400 flex-1`}>
        <img src={imageSrc} alt={title} className="relative inset-0 w-full h-full object-cover" loading='lazy'/>
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h2 className="text-white text-xl font-semibold">
            {title}
          </h2>
        </div>
      </div>
    );
  }
