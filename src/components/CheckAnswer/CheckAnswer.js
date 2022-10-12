import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CheckAnswer = ({ option, correctAnswer, handleAnswer }) => {
   if (option === correctAnswer) {
      var showToast = () =>
         toast.success("Correct Answer", {
            position: "top-center",
            autoClose: 300,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
         });
   }
   else {
      showToast = () =>
         toast.error("Wrong Answer", {
            position: "top-center",
            autoClose: 200,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
         });
   }

   return (
      <div>
         <button className='btn btn-sm' onClick={showToast}>
            <p className="card-text pe-5" onClick={handleAnswer}>{option}</p>
         </button>

         <ToastContainer
            theme="dark"
            position="top-center"
            autoClose={200}
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

export default CheckAnswer;