/* eslint-disable react/prop-types */
const Card = ({ user }) => {
  const {
    avatar_url,
    followers,
    following,
    name,
    login,
    public_repos,
    location,
  } = user;
  return (
    <div className="mx-auto bg-blue-800 rounded-xl mt-5 p-10 w-full lg:w-1/2">
      <div className="flex justify-center">
        <img src={avatar_url} alt="user" />
      </div>
      <div className="text-center text-gray-300 font-bold text-xl md:text-2xl py-5">
        <a href={`https://github.com/${login}`}>{name}</a>
      </div>
      <div className="block md:flex text-white font-semibold text-lg md:text-xl justify-center gap-2 lg:gap-10">
        <div>
         
          <p>Total Followers :{followers}</p>
          <p>Total Following : {following}</p>
        </div>
        <div>
          <p>Public Repositories :{public_repos}</p>
          <p>Country : {location}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
