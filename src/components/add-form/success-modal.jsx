import React from 'react';
import Modal from 'react-modal';
import './success-modal.css';
import { Link } from 'react-router-dom';

const SuccessModal = ({modelOpen, setModelOpen}) => {
    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: '#F4EEE0',
          borderRadius: '12px'
        },
      };
  return (
    <Modal isOpen={modelOpen} style={customStyles}>
        <div className='modal-inner'>
            <label >Expense Added Successfully</label>
            <img src={require("../../assets/images/achievement.png")} alt="success image" className='added-image' />

            <Link to='/'>

            <div className='take-home-button'>
            <i class="fi fi-rr-home"></i>
            Home
            </div>

            </Link>
            
        </div>
    </Modal>
  )
}

export default SuccessModal;