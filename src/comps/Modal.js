import React from 'react';
import {motion} from 'framer-motion';
import useStorage from '../hooks/useFirestore';
import {projectStorage,projectFirestore,timeStamp} from '../firebase/config';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const collectionRef = projectFirestore.collection('images');
const Modal = ({selectedImg,setSelectedImg}) => {
   
    
    const handleClick =(e) =>{
        if(e.target.classList.contains('backdrop')){
        setSelectedImg(null);
        }
    }
    const deleteButtonHandler = () =>{
    collectionRef.doc(selectedImg.id).delete();
    setSelectedImg(null);

    }
    return (
        <motion.div className = "backdrop" onClick={handleClick}
        initial = {{opacity: 0 }}
        animate={{opacity: 1 }}
        transition={{delay: 0.2}}

        >
            <motion.img src={selectedImg.url} alt= "enlarged pic"
            initial={{y: "-100vh" }}
            animate={{y: 0 }}
            transition={{delay: 0.5}}
            />
            <IconButton aria-label="delete" disabled color="secondary" onClick={deleteButtonHandler}>
             <DeleteIcon />
                </IconButton>
            
             </motion.div>
    )
} 
export default Modal;