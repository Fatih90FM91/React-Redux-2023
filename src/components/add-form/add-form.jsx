import React, { useState } from 'react';
import './add-form.css'
import { categories } from '../../constants/add-expense';
import {useDispatch} from 'react-redux';
import {addExpense} from '../../redux/actions/expenses';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SuccessModal from './success-modal';

const AddForm = () => {
    const cat = categories;
    const [categoryOpen, setCategoryOpen] = useState(false)
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [category, setCategory] = useState();
    const [modelOpen, setModelOpen] = useState(false);
    const dispatch = useDispatch();//hook

    const handleTitle = (e) => {
        setTitle(e.target.value)
    }

    const handleAmount = (e) => {
        const val = parseFloat(e.target.value)
        if(isNaN(val)){
            setAmount('');
            return;
        }
        setAmount(val);
    };

    const handleCategory = (category) => {
        setCategory(category)
        setCategoryOpen(false)
     
    };

    const handleSubmit = () => {
        console.log('submit clicked!');
        if(title ==='' || amount=== '' || !category){
            const notify = () => toast("Please enter valid data!");
            notify()
            return;
        }
        const data = {
            title,
            amount,
            category,
            createdAt:new Date()
        }

        dispatch(addExpense(data))
        setModelOpen(true)

     
    };

  return (
    <div className='add-form'>
        <ToastContainer
            position="bottom-left"
            autoClose={1500}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            />

        <SuccessModal modelOpen={modelOpen} setModelOpen={setModelOpen} />
        <div className='form-item'>
            <label>Titel</label>
            <input placeholder='Give a name to your expenditure'
            value={title}
            onChange={(e) => handleTitle(e)}
             />
        </div>
        <div className='form-item'>
            <label>Amount €</label>
            <input placeholder='Enter Amount'
            className='amount-input'
            value={amount}
            onChange={(e) => handleAmount(e)}
             />
        </div>
        <div className='category-container-parent'>
            <div className='category'>
                <div className='category-dropdown' onClick={()=> setCategoryOpen(!categoryOpen)}>
                    <label >{category ? category.title : 'Category'}</label>
                    <i class="fi-rr-angle-down"></i>
                    <div>{categoryOpen && <div className='ctaegory-container'>
                        {cat.map(category=>(
                            <div className='category-item' style={{
                                borderRight:`5px solid ${category.color}`
                            }} key={category.id} onClick={()=> handleCategory(category)}>

                                <label>{category.title}</label>
                                <img src={category.icon} alt={category.title}/>

                            </div>
                        ))}
                        </div>}
                        </div>
                </div>
            </div>
        </div>
        <div className='form-add-buttton'>
            <div onClick={handleSubmit}>
                <label >Add</label>
                <i class="fi fi-rr-paper-plane"></i>
            </div>
        </div>
    </div>
  )
}

export default AddForm; 