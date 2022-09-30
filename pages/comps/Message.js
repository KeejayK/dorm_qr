import styles from '../../styles/Message.module.css'

const Message = () => {
    return ( 
        <div className={styles.main}> 
            <div className={styles.messageContainer}>
                <p>Leave us a message!</p>
                <div className={styles.message}>
                    <form>
                        <input 
                        id = 'name'
                        name = 'message'
                        type = 'textarea'
                        />
                    </form>
                </div>
            </div>


        </div>

   );
} 

export default Message;