interface NothingNotificationProps {
  isData: '';
}

const NothingNotification = ({ isData }: NothingNotificationProps) => {
  return (
    <>
      {isData.length <= 0 || isData === undefined || isData === null ? (
        <section className="flex flex-col gap-10 justify-center items-center w-full bg-white p-10 rounded-lg">
          <p className="text-lg">알림이 없습니다.</p>
        </section>
      ) : (
        ''
      )}
    </>
  );
};

export default NothingNotification;
