export default function getDaysFromToday(date: string) {
  const today = new Date();
  const theDay = new Date(date);
  const betweenTimeDay = Math.floor(
    (today.getTime() - theDay.getTime()) / 1000 / 60 / 60 / 24
  );

  switch (true) {
    case betweenTimeDay === 0:
      return '오늘';
    case betweenTimeDay < 365:
      return `${betweenTimeDay}일전`;
    default:
      return `${betweenTimeDay / 365}일전`;
  }
}
