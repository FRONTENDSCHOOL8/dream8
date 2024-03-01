import profile from 'public/profile.svg';

function User() {
  return (
    <figure className="flex items-center gap-3">
      <img src={profile} alt="유저 프로필" />
      <figcaption>user</figcaption>
    </figure>
  );
}

export default User;
