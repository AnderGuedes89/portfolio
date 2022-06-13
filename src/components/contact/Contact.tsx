import React from 'react';
import './contact.css';
import { FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { socialsData } from '../../data/socialsData';
import { contactData } from '../../data/contactData';

function Contact() {
  return (
    <>
      <div className="contact">
        <div className="contact__body">
          <div className="contact__description">
            <h2>Contato</h2>
            <p>
              {contactData.description1}
              <br />
              <br />
              {contactData.description2}
              <br />
              {contactData.description3}
            </p>
            <div className="contact__socialmedia">
              {socialsData.linkedIn && (
                <a
                  href={socialsData.linkedIn}
                  target="_blank"
                  rel="noreferrer"
                  className="contact__socialmedia--icon"
                >
                  <FaLinkedinIn />
                </a>
              )}
              {socialsData.github && (
                <a
                  href={socialsData.github}
                  target="_blank"
                  rel="noreferrer"
                  className="contact__socialmedia--icon"
                >
                  <FaGithub />
                </a>
              )}
              {socialsData.twitter && (
                <a
                  href={socialsData.twitter}
                  target="_blank"
                  rel="noreferrer"
                  className="contact__socialmedia--icon"
                >
                  <FaTwitter />
                </a>
              )}
            </div>
          </div>
          <div className="contact__image">
            <img src={contactData.image} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
