import DonationTable from '../../../03_organisms/Donation/Donationtable/DonationTable';
import DonationForm from '../../../03_organisms/Donation/DonationForm/DonationForm';
import { useEffect, useState } from 'react';
import { pb } from '@/api/pocketbase';
import ConfirmModal from '@/components/02_molecules/Modal/ConfirmModal/ConfirmModal';
import useLoginFormStore from '@/store/useLoginFormStore';
import useNoticeList from '@/store/useNoticeList';
import useCountStore from '@/store/useCountStore';
import MetaTag from '@/components/01_atoms/MetaTag/MetaTag';
interface Donation {
  id?: string;
  name: string;
  category: string;
  description: string;
}

function DonationSubmission() {
  const metaTag = {
    title: '후원 신청페이지',
    pageDescription: '드림의 후원 신청페이지 입니다',
    keywords: 'dream, 판매, 헌옷, 기부, 후원, 지구사랑, 환경, 공헌',
    imgSrc: '/logoOG.png',
    path: 'DonationForm',
  };

  const { plusCount } = useCountStore();

  const [showModal, setShowModal] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalMessage, setModalMessage] = useState('');
  const { userInfo } = useLoginFormStore();

  const [donations, setDonations] = useState<Donation[]>([]);

  const handleAddDonation = (donation: Donation) => {
    const lastId = parseInt(localStorage.getItem('lastDonationId') || '0', 10);
    const newId = lastId + 1;
    const newDonation = { ...donation, id: newId.toString() };

    setDonations((prevDonations) => {
      const updatedDonations = [...prevDonations, newDonation];
      localStorage.setItem('donations', JSON.stringify(updatedDonations));
      localStorage.setItem('lastDonationId', newId.toString());
      return updatedDonations;
    });
  };

  const storedDonations = localStorage.getItem('donations');

  if (storedDonations) {
    const donations = JSON.parse(storedDonations);

    donations.forEach((donation) => {
      console.log(donation.id);
    });
  } else {
    console.log('로컬 스토리지에 저장된 후원 데이터가 없습니다.');
  }

  const handleDeleteDonation = (id: string) => {
    setDonations((prevDonations) => {
      const updatedDonations = prevDonations.filter(
        (donation) => donation.id !== id
      );
      localStorage.setItem('donations', JSON.stringify(updatedDonations));
      return updatedDonations;
    });
  };

  const handleSubmit = async () => {
    if (
      donations.length === 0 ||
      donations.some(
        (donation) =>
          !donation.name || !donation.category || !donation.description
      )
    ) {
      setModalTitle('실패');
      setModalMessage('필요한 정보를 모두 작성해주세요.');
      setShowModal(true);
      return;
    }

    try {
      for (const donation of donations) {
        const dataToSend = {
          name: donation.name,
          category: donation.category,
          description: donation.description,
          userId: userInfo.id,
        };

        const response = await pb.collection('donation').create(dataToSend);

        const data = {
          id: response.id,
          field: 'notification',
          title: donation.description,
          description: donation.description,
          isComplete: true,
          photo: '',
          userId: userInfo.id,
          type: 'donation',
        };

        await pb.collection('notification').create(data);

        plusCount();
      }
      localStorage.removeItem('donations');
      localStorage.setItem('lastDonationId', '0');

      setDonations([]);
      setModalTitle('신청완료');
      setModalMessage('후원 신청이 완료 되었습니다. 감사합니다.');
      setShowModal(true);
    } catch (error) {
      console.error('데이터 저장 실패:', error);
      setModalTitle('오류🤯');
      setModalMessage('데이터 저장에 실패하였습니다. 다시 시도해주세요.');
      setShowModal(true);
    }
  };

  useEffect(() => {
    const storedDonations = localStorage.getItem('donations');
    if (storedDonations) {
      setDonations(JSON.parse(storedDonations));
    }
  }, []);

  return (
    <>
      <MetaTag metaTag={metaTag} />
      <div className="p-[5rem] xxl:py-36">
        <div className="flex flex-col gap-8 items-center justify-center w-[10rem] sm:w-[20rem] md:w-[40rem] xl:w-[50rem] xxl:w-[64rem] m-auto py-20 xxl:border border-gray-200 rounded-[50px]">
          <h2 className="text-4xl">후원 신청</h2>

          <div className=" max-w-[595px] flex flex-col gap-10 items-center">
            <DonationForm onAddDonation={handleAddDonation} />
            <div className="w-full h-[1px] bg-gray-200"></div>
            <DonationTable
              donations={donations}
              onDeleteDonation={handleDeleteDonation}
            />
            <p>⚠️신청서 제출 후 취소 불가</p>
            <button
              type="button"
              onClick={handleSubmit}
              className="font-bold text-blue-primary border-2 border-blue-primary rounded-[3px] py-2 w-full m-auto hover:bg-blue-primary hover:text-white transition-all"
            >
              제출하기
            </button>
            {showModal && (
              <ConfirmModal
                title={modalTitle}
                onClose={() => setShowModal(false)}
              >
                <p>{modalMessage}</p>
              </ConfirmModal>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default DonationSubmission;
