import profile from '/profile.svg';

interface userNameProp {
  userName?: string;
}

function User({ userName }: userNameProp) {
  return (
    <div>
      <figure className="flex items-center gap-3 pt-1 pl-4">
        <img src={profile} alt="유저 프로필" />
        <figcaption>{userName}</figcaption>
      </figure>
    </div>
  );
}

export default User;
