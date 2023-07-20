import { AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai"
import { BsFacebook } from "react-icons/bs"
import { RiInstagramFill } from "react-icons/ri"
import { useTranslation } from "react-i18next";
import "./Footer.scss"

export const Footer = () => {
  const { t } = useTranslation(["footer"]);
  return (
    <>
      <footer>
        <div className='container flex'>
          <p>{t('text')}</p>
          <div className='social'>
            <BsFacebook className='icon' />
            <RiInstagramFill className='icon' />
            <AiFillTwitterCircle className='icon' />
            <AiFillLinkedin className='icon' />
          </div>
        </div>
      </footer>
    </>
  )
}
