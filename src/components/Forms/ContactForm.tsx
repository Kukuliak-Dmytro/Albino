import styles from './ContactForm.module.scss'
interface ContactFormProps{
    label:string;
    placeholder:string;
    id:string;
    area?:boolean;
}
const ContactForm: React.FC<ContactFormProps> = ({ label, placeholder,id, area }) => {
    if(area){
    return(
        <div className={styles.cardWrapper}>
            <label htmlFor={id}>{label}</label>
            <textarea name="message" id={id} rows={5} ></textarea>
            
        </div>
    )}
    else
    {
        return(
            <div className={styles.cardWrapper}>
                <label htmlFor={id}>{label}</label>
                <input id={id} type="text" placeholder={placeholder}/>
                
            </div>
        )
    }
}
export default ContactForm;