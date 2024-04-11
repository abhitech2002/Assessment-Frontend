import React, { useState, useEffect } from 'react';
import CategoriesData from './CategoriesData';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { toast } from 'react-toastify';


const Category: React.FC = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const navigate = useNavigate();
  const { user } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    if (!user) {
      navigate('/login');
      toast.error('Please login to access the Category page');
    }
  }, [user, navigate]);

  const toggleCategory = (categoryId: string) => {
    if (selectedCategories.includes(categoryId)) {
      setSelectedCategories(selectedCategories.filter(id => id !== categoryId));
    } else {
      setSelectedCategories([...selectedCategories, categoryId]);
    }
  };

  // Function to check if the Next button should be enabled
  const isNextButtonEnabled = selectedCategories.length >= 10;

  const handleNextButtonClick = () => {
    if (isNextButtonEnabled) {
      navigate('/user/follow');
    }
  };

  return (
    <div className="bg-gray-50 p-4 flex flex-col items-center">
      <h2 className="text-xl font-medium mb-4 bg-[#EDD3FF] h-10 w-full flex items-center justify-center px-4">Choose your top 10 categories</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
        {CategoriesData.map(category => (
          <div
            key={category.id}
            className={`relative p-4 border rounded-md h-44 w-40 cursor-pointer ${selectedCategories.includes(category.id.toString()) ? 'border-violet-600 bg-white' : 'bg-gray-200'}`}
            onClick={() => toggleCategory(category.id.toString())}
            >
            {selectedCategories.includes(category.id.toString()) && (
              <div className="absolute top-0 right-0 flex items-center justify-center w-6 h-6 m-1 bg-[#4B0082] text-white rounded-full">
                {selectedCategories.indexOf(category.id.toString()) + 1}
              </div>
            )}
            <div className="flex flex-col items-center justify-center h-full">
              <category.icon size={30} className="mx-auto mb-2" />
              <p className="text-center">{category.name}</p>
            </div>
          </div>
        ))}
      </div>
      <button
        className={`mt-10 bg-[#4B0082] hover:bg-[#4c0082db] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${isNextButtonEnabled ? '' : 'cursor-not-allowed opacity-50'}`}
        disabled={!isNextButtonEnabled}
        onClick={handleNextButtonClick}
      >
        Next
      </button>
    </div>
  );
};

export default Category;
