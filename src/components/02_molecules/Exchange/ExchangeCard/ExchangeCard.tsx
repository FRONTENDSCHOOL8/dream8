import Button from '@/components/01_atoms/Button/Button';
import User from '@/components/02_molecules/Exchange/User/User';

interface ExchangeCard {
  imageSrc: string;
  className?: string;
  title: string;
  content: string;
  name: string;
  imageAlt: string;
}

function ExchangeCard({
  imageSrc,
  className,
  title,
  content,
  name,
  imageAlt,
}: ExchangeCard) {
  return (
    <div className={className}>
      <img src={imageSrc} alt={imageAlt} />
      <User />
      <h2>{title}</h2>
      <p>{content}</p>
      <Button
        type="button"
        className="bg-orange-primary text-white items-center text-[0.85rem] px-1 rounded-md"
      >
        {name}
      </Button>
    </div>
  );
}

export default ExchangeCard;
