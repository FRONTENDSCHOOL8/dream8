import DonationContent from "../../../04_templates/Donation/DonationContent";
import MetaTag from '@/components/01_atoms/MetaTag/MetaTag';

function Donation() {
  const metaTag = {
    title: '후원페이지',
    pageDescription: '드림의 후원 페이지 입니다',
    keywords: 'dream, 판매, 헌옷, 기부, 후원, 지구사랑, 환경, 공헌',
    imgSrc: '/logoOG.png',
    path: 'Donation',
  };
  return (
    <>
      <MetaTag metaTag={metaTag} />
      <div className="pt-20"> 
        <DonationContent />
      </div>
    </>
  );
}

export default Donation;
