interface NothingNotificationProps {
  isData: [];
}

const NothingNotification = ({ isData }: NothingNotificationProps) => {
  console.log('isData   ', isData);
  if (isData === undefined || isData === null || isData.length === 0) {
    return (
      <section className="flex flex-col gap-10 justify-center items-center w-full bg-white p-10 rounded-lg">
        <p className="text-lg">알림이 없습니다.</p>
      </section>
    );
  } else {
    return null;
  }
};

export default NothingNotification;
