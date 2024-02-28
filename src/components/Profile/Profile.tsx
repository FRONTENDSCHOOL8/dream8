import profile from 'public/profile.svg';

function Profile() {
  return (
    <div className="flex items-center gap-3">
      <img src={profile} alt="Profile" />
      <h2 className="text-sm">name</h2>
    </div>
  );
}

export default Profile;
