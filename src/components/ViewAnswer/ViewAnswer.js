import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { EyeIcon } from '@heroicons/react/24/solid';

const ViewAnswer = ({ correctAnswer, showAnswer }) => {
   const showToast = () =>
      toast.success(correctAnswer, {
         position: "top-center",
         autoClose: 2000,
         hideProgressBar: true,
         closeOnClick: true,
         pauseOnHover: true,
         draggable: true,
         progress: undefined,
      });

   return (
      <div>
         <button className='btn btn-sm' onClick={showToast}>
            <EyeIcon className="icon" onClick={showAnswer} />
         </button>

         <ToastContainer
            theme="dark"
            position="top-center"
            autoClose={2000}
            hideProgressBar={true}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
         />
      </div>
   );
};

export default ViewAnswer;