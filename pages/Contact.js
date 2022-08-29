
import styles from '../styles/Contact.module.css'
import Image from 'next/image'
 
const Contact = () => {
    return (  
        <div className={styles.contact}>
            <div className={styles.jaeContact}>
                <div className={styles.logo} style={{marginBottom: 0}}>
                    <Image src='/profile.png' width={100} height={100}/>
                </div>
                <div>
                    <h3 className = {styles.info}>Jaechan Lee</h3>
                    <div className={styles.links}>
                        <a href='https://www.instagram.com/invites/contact/?i=1rasrnl6oit7b&utm_content=38yfz1h'>
                            <Image src='/instagram.png' width={40} height={40}/>
                        </a>
                        <a href='https://www.snapchat.com/add/keejaykim?share_id=L1zGgiZmtcQ&locale=en-US'>
                            <Image src='/snapchat.png' width={40} height={40}/>
                        </a>
                    </div>
                </div>
               
            </div>
 
 
 
            <div className = {styles.keejayContact}>
                <div className={styles.logo} >
                    <Image src='/profile.png' width={100} height={100}/>
                </div>
                <div>
                    <h3 className = {styles.info}>Keejay Kim</h3>
                    <div className={styles.links}>
                        <a href='https://www.instagram.com/invites/contact/?i=1rasrnl6oit7b&utm_content=38yfz1h'>
                            <Image src='/instagram.png' width={40} height={40}/>
                        </a>
                        <a href='https://www.snapchat.com/add/keejaykim?share_id=L1zGgiZmtcQ&locale=en-US'>
                            <Image src='/snapchat.png' width={40} height={40}/>
                        </a>
                    </div>
                </div>
 
            </div>
        </div>
 
    );
}
 
export default Contact;

