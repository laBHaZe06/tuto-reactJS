import { useState } from 'react'
import '../styles/Footer.css'
import logoLeaf from '../assets/img/logoLeaf.png'

function Footer(){
    const [inputValue, setInputValue] = useState('')
    function handleInput(e) {
		setInputValue(e.target.value)
	}

	function handleBlur() {
		if (!inputValue.includes('@')) {
			alert("Attention, il n'y a pas d'@, ceci n'est pas une adresse valide 😥")
		} else{
            alert(`Super! On se retrouve très vite avec nos prochaine actualités`)
        }
	}
    return (
        <footer className='jh-footer mt-2'>
                <img src={logoLeaf} alt='logo'/>
                <div className='jh-footer-elem'>
                    Pour les passionné·e·s de plantes 🌿🌱🌵
                </div>
            <div className='jh-footer-elem'>Laissez-nous votre mail pour nos nouveautés :</div>
            <div className='col-sm-4'>
                <div class="input-group mb-3 mx-auto">
                    <span class="input-group-text">
                    <i class="fas fa-envelope"></i>
                    </span>
                    <input type="text" class="form-control" 
                            placeholder='Entrez votre mail'
                            onChange={handleInput}
                            value={inputValue}
                            onBlur={handleBlur}
                    />
                </div>
            </div>        
            <button className='btn btn-outline-warning text-dark mt-2 border border-dark' 
                    onClick={()=>alert(inputValue)}>Donner moi les news
            </button>
        </footer>

    )
}

export default Footer