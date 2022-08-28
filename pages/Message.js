import styles from '../styles/Message.module.css'

const Message = () => {
    return ( 
        <div className={styles.messageContainer}>
            <p>Leave us a message!</p>
            <div className={styles.message}>
                <form>
                    <input type='submit' value='submit'/>
                </form>
            </div>
        </div>

   );
} 

export default Message;