import React, { useState, useEffect } from 'react';
import FriendsData from './FriendsData';
import Suggestion from '../images/Suggestion1.png';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

interface Friend {
  id: number;
  avatar: string;
  nickname: string;
  fullName: string;
  isFollowed: boolean;
}

const FollowsPage: React.FC = () => {
  const [friends, setFriends] = useState<Friend[]>(FriendsData);
  const navigate = useNavigate();
  const { user } = useSelector((state: any) => state.auth);

  useEffect(() => {
    if (!user) {
      navigate('/login');
      toast.error('Please login to access the follow page');
    }
  }, [user, navigate]);

  const handleFollowToggle = (id: number) => {
    setFriends(prevData =>
      prevData.map(person => {
        if (person.id === id) {
          return { ...person, isFollowed: !person.isFollowed };
        }
        return person;
      })
    );
  };

  return (
    <div className="container mx-auto px-4 flex flex-wrap mb-4">
      <div className="w-full md:w-1/2 xl:w-1/2 2xl:w-1/2 mb-8 md:mb-0 xl:mb-0 2xl:mb-0">
        <img src={Suggestion} alt="Suggestion" className="w-full h-full md:h-full object-cover rounded" />
      </div>
      <div className="w-full mt-20 md:w-1/2 xl:w-1/2 2xl:w-1/2 pl-8">
        <div>
          <ul>
            {friends.map(person => (
              <li key={person.id} className="flex items-center mb-4">
                <img src={person.avatar} alt={person.fullName} className="w-12 h-12 rounded-full mr-4" />
                <div className="flex flex-col">
                  <span className="font-semibold">{person.nickname}</span>
                  <span className="text-sm text-gray-500">{person.fullName}</span>
                </div>
                <button
                  onClick={() => handleFollowToggle(person.id)}
                  className={`ml-auto px-4 py-2 rounded-md mr-2 ${person.isFollowed ? 'bg-white border-2 border-violet-600' : 'bg-[#4B0082] text-white'}`}
                >
                  {person.isFollowed ? 'Following' : 'Follow'}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-center mt-8">
          <button
            className={`bg-[#4B0082] hover:bg-[#4c0082db] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-4`}
          >
            Next
          </button>
          <button
            className={`text-[#4B0082] hover:text-[#4c0082cf] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline items-center`}
          >
            Skip
          </button>
        </div>
      </div>
    </div>
  );
};

export default FollowsPage;
