// 'use client';
// import React, { useState } from 'react';

// interface AddAddressModalProps {
//   isOpen: boolean;
//   onClose: () => void;
//   onSave: (data: { address: string; phone: string }) => void;
// }

// export const AddAddressModal: React.FC<AddAddressModalProps> = ({ isOpen, onClose, onSave }) => {
//   const [address, setAddress] = useState('');
//   const [phone, setPhone] = useState('');
//   const [error, setError] = useState('');

//   const handleSubmit = () => {
//     if (!address || !phone) {
//       setError('Both fields are required.');
//       return;
//     }

//     // Optional: Add phone validation
//     if (!/^\d{10}$/.test(phone)) {
//       setError('Phone number must be 10 digits.');
//       return;
//     }

//     setError('');
//     onSave({ address, phone });
//     setAddress('');
//     setPhone('');
//     onClose();
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
//       <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-lg relative">
//         <h2 className="text-xl font-semibold mb-4">Add Address & Phone</h2>

//         {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

//         <div className="mb-4">
//           <label className="block text-sm font-medium mb-1">Address</label>
//           <textarea
//             className="w-full border rounded-md p-2"
//             value={address}
//             onChange={(e) => setAddress(e.target.value)}
//             placeholder="Enter your address"
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-sm font-medium mb-1">Phone Number</label>
//           <input
//             type="text"
//             className="w-full border rounded-md p-2"
//             value={phone}
//             onChange={(e) => setPhone(e.target.value)}
//             placeholder="Enter 10-digit phone number"
//           />
//         </div>

//         <div className="flex justify-end space-x-3">
//           <button
//             onClick={onClose}
//             className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300"
//           >
//             Cancel
//           </button>
//           <button
//             onClick={handleSubmit}
//             className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
//           >
//             Save
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };


// 'use client';

// import { Dialog, Transition } from '@headlessui/react';
// import { Fragment, useState } from 'react';

// interface AddAddressModalProps {
//   isOpen: boolean;
//   onClose: () => void;
//   onSave: (data: { address: string; phone: string }) => void;
//   loading?: boolean;
// }

// export default function AddAddressModal({
//   isOpen,
//   onClose,
//   onSave,
//   loading = false,
// }: AddAddressModalProps) {
//   const [address, setAddress] = useState('');
//   const [phone, setPhone] = useState('');
//   const [error, setError] = useState('');

//   const handleSubmit = () => {
//     if (!address || !phone) {
//       setError('Both fields are required.');
//       return;
//     }

//     if (!/^\d{10}$/.test(phone)) {
//       setError('Phone number must be 10 digits.');
//       return;
//     }

//     setError('');
//     onSave({ address, phone });
//     setAddress('');
//     setPhone('');
//     onClose();
//   };

//   return (
//     <Transition appear show={isOpen} as={Fragment}>
//       <Dialog as="div" className="relative z-50" onClose={onClose}>
//         <Transition.Child
//           as={Fragment}
//           enter="ease-out duration-300"
//           enterFrom="opacity-0"
//           enterTo="opacity-100"
//           leave="ease-in duration-200"
//           leaveFrom="opacity-100"
//           leaveTo="opacity-0"
//         >
//           <div className="fixed inset-0 bg-black bg-opacity-25" />
//         </Transition.Child>

//         <div className="fixed inset-0 flex items-center justify-center p-4">
//           <Transition.Child
//             as={Fragment}
//             enter="ease-out duration-300"
//             enterFrom="opacity-0 scale-95"
//             enterTo="opacity-100 scale-100"
//             leave="ease-in duration-200"
//             leaveFrom="opacity-100 scale-100"
//             leaveTo="opacity-0 scale-95"
//           >
//             <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 shadow-xl transition-all">
//               <Dialog.Title className="text-lg font-medium text-gray-900 mb-4">
//                 Add Address & Phone
//               </Dialog.Title>

//               {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

//               <div className="mb-4">
//                 <label className="block text-sm font-medium mb-1">Address</label>
//                 <textarea
//                   className="w-full border rounded-md p-2"
//                   value={address}
//                   onChange={(e) => setAddress(e.target.value)}
//                   placeholder="Enter your address"
//                 />
//               </div>

//               <div className="mb-4">
//                 <label className="block text-sm font-medium mb-1">Phone Number</label>
//                 <input
//                   type="text"
//                   className="w-full border rounded-md p-2"
//                   value={phone}
//                   onChange={(e) => setPhone(e.target.value)}
//                   placeholder="Enter 10-digit phone number"
//                 />
//               </div>

//               <div className="flex justify-end space-x-3">
//                 <button
//                   onClick={onClose}
//                   className="px-4 py-2 text-sm text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   onClick={handleSubmit}
//                   disabled={loading}
//                   className="px-4 py-2 text-sm text-white bg-blue-600 rounded-md hover:bg-blue-700 disabled:opacity-50"
//                 >
//                   {loading ? 'Saving...' : 'Save'}
//                 </button>
//               </div>
//             </Dialog.Panel>
//           </Transition.Child>
//         </div>
//       </Dialog>
//     </Transition>
//   );
// }


'use client';

import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';

interface AddAddressModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: { address: string; phone: string }) => void;
  loading?: boolean;
}

export default function AddAddressModal({
  isOpen,
  onClose,
  onSave,
  loading = false,
}: AddAddressModalProps) {
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = () => {
    if (!address || !phone) {
      setError('Both fields are required.');
      return;
    }

    if (!/^\d{10}$/.test(phone)) {
      setError('Phone number must be 10 digits.');
      return;
    }

    setError('');
    onSave({ address, phone });
    setAddress('');
    setPhone('');
    onClose();
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        {/* Background overlay */}
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        {/* Right side panel */}
        <div
          className="fixed right-0 top-1/2 transform -translate-y-1/2 flex max-w-full"
          style={{ height: '70vh' }}
        >
          <Transition.Child
            as={Fragment}
            enter="transform transition ease-in-out duration-300"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transform transition ease-in-out duration-300"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
          >
            <Dialog.Panel className="w-screen max-w-md bg-white shadow-xl flex flex-col rounded-l-xl overflow-hidden h-full p-6">
              <Dialog.Title className="text-lg font-medium text-gray-900 mb-4">
                Add Address & Phone
              </Dialog.Title>

              {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

              <div className="mb-4 flex-grow overflow-auto">
                <label className="block text-sm font-medium mb-1">Address</label>
                <textarea
                  className="w-full border rounded-md p-2 resize-none h-24"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Enter your address"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Phone Number</label>
                <input
                  type="text"
                  className="w-full border rounded-md p-2"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Enter 10-digit phone number"
                />
              </div>

              <div className="flex justify-end space-x-3">
                <button
                  onClick={onClose}
                  className="px-4 py-2 text-sm text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSubmit}
                  disabled={loading}
                  className="px-4 py-2 text-sm text-white bg-blue-600 rounded-md hover:bg-blue-700 disabled:opacity-50"
                >
                  {loading ? 'Saving...' : 'Save'}
                </button>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}
