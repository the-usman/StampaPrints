import React from "react";
import "./PrivacyPolicy.css";
import privacyImage from "./images/Rectangle 1.png";

const sections = [
  {
    heading: "",
    content:
      "",
  },
  {
    heading: "Getting Registered on the Website",
    content:
      "If you want to avail of our services, the website's registration form should be filled in thoroughly with name and email address. We will get back to a user even if the order has not been placed or processed. Credit card information is taken only if the user has placed an order.",
  },
  {
    heading: "Our Social Media Profiles",
    content:
      "Our website has social media tabs on it; clicking on any of these will enable us to access your IP address and the category page you visit. Cookies power social media tabs. Social media interactions may be taken care of by a third party or us. Your businesses are subjected to the third party's privacy policy if hosting the social media features on our site.",
  },
  {
    heading: "Getting Clauses Related to Blog and Testimonial Sections",
    content:
      "Our blog is accessible to everyone. All the details you provide on the blog in the form of comments can be read, used, and copied by any user. Testimonials are taken from the customers after asking for their consent to publish their names and other details. Stampa Prints doesn't take any responsibility for the personally identifiable information in the testimonial section; you can remove and change your testimonial by following the proper procedure as listed on our website.",
  },
  {
    heading: "Use of Cookies and other Technology Tools",
    content:
      "A cookie on the website is used to collect your IP address, and we use these to identify users who are new to the website, cookies also help us sort out users' files and provide you a more personalized experience. These cookies can be deleted by going into your browser settings. However, by removing cookies, you can't access the whole of our website. We and our affiliates use other technology tools to collect users' demographics and psychographics to manage the website better and track the varying users' trends. Our emails are HTML based with clear gifs, which enable us to know which emails are being opened by our recipients. It helps us analyze our various email marketing campaigns' effectiveness. If you don't want to receive these emails, unsubscribe. Third parties host targeted ads on our website; these are based on behavioral advertising. You can ask us if you don't want to receive such ads.",
  },
  {
    heading: "Protecting your Personal Details",
    content:
      "Stampa Prints understands the importance of sensitive information shared with us by our customers. We, therefore, take all the necessary measures to safeguard your personal details. Industry stands security procedures are available on our website through our browser. Your credit card and financial information are supported by secure socket layer technology. Any email that is not encrypted is not safe; you cannot send any confidential information through unencrypted emails.",
  },
  {
    heading: "Log Files",
    content:
      "We have conventional website servers that make use of log files. Data is collected from the IP address, type of browser, exit pages, time/date, number of clicks on various categories that we use to gauge users' trends; demographic and psychographic details are gathered through log files. However, this data is not linked to the personally identifiable one.",
  },
  {
    heading: "Your Preferences regarding Information Revelation",
    content:
      "As already mentioned, the information will only be revealed to third parties under this policy's situations. We do not sell our client data to anyone.We utilize a shipping company's services to dispatch orders, an email service provider we have sends you emails from us, a credit card company's services are utilized for billing processes. These service providers do not save, share, or misuse your details for any other purpose. If Stampa Prints decides for a merger, or gets acquired by another company, or sells some of its shares, your details would be part of the shared assets. If our users' information gets subjected to be utilized in any other manner other than the mentioned one due to some transition, you would be informed and given a choice to decide beforehand. We will update the changes in the notification section immediately.",
  },
  {
    heading: "Choice to Unsubscribe",
    content:
      "We give you the liberty to unsubscribe or not choosing your information to be utilized for purposes that are not directly linked to our webpage. If you don't want to receive our newsletter or sales emails, you can unsubscribe from these communications by writing us an email.",
  },
  {
    heading: " Links to other Websites",
    content:
      "Stampa Prints might have links to other websites; however, we do not take responsibility for other web pages' privacy settings. Therefore, we encourage you to go through the privacy policies of these websites when you are visiting them. This Privacy Policy is exclusively for the use and collection of Information for Stampa Prints.",
  },
  {
    heading: "Update on Changes",
    content:
      "Any changes made to our Privacy Policy would be updated on the homepage and other areas of the website that we find necessary to know what sort of details we collect, how these are being used, and under what situations we reserve the right to reveal the information. User details would be utilized according to the Privacy Policy under which we collect data. If the user information would be used in any other way other than the mentioned manner, we will have an explicit notice posted on our website before coming into effect. If you have removed your details or deactivated your account, you will not receive any email regarding this; neither your information will be used in any way.",
  },
  {
    heading: " Right to make Changes, Delete and Update Information",
    content:
      "Stampa Prints might We give you the right to change your information. If you don't want to use our services, you can tweak, update your details or ask us to remove/deactivate your account. You can send us an email at the address mentioned in Contact Us. We will get back to you within a considerable timeline. User details are saved only if the account is active or we are offering you services. We will retain your information if deemed necessary for legal responsibilities, resolving issues, and complying with the agreements.",
  },
  {
    heading: "Contact Us",
    content:
      "For any queries, feedback, or suggestions, please don't hesitate to reach out to us at support@stampaprints.com. We value your input. Our Privacy Policy came into effect on July 21, 2020, ensuring your data's security and your trust in our services. Feel confident in connecting with us!",
  },
  // Add more sections here...
];
function PrivacyPolicy() {
  return (
    <div className="">
      <h1 className="ourprivacy">Our Privacy <span style={{ textDecoration: "underline" }}>Policy</span></h1>
      <div className="background-colorprivacy">
        <p className="privacy-policy-container ParagraphH2P pt-4">
          Stampa Prints dedicatedly protects the privacy of its customers. We do
          not reveal, share, or provide our clients' personal information to a
          third-party for selling or any other reason. This Privacy Policy
          entails all the necessary and inclusive information about how Stampa
          Prints is running its operations and enlightening you about collecting
          and using information that you share with us. <br /><br /> The policy would also
          entail guidelines on how you can reach out and change the details
          provided to Stampa Prints. "We," "Our," and "Us" refer to Stampa
          Prints and its associates.
        </p>



        <div className="">

          <h3 className="privacy-heading mainHeadingH2 pt-4">Clauses Related to Information</h3>
          <p className="privacy-policy-container1 ParagraphH2P">Stampa Prints takes ownership of information collected on the website; no third party is involved in revealing our client data. Our website users' details at different stages are solely for processing orders, answering queries, and sending product promos and other marketing collateral. Moreover, we use the contact information to enhance your website experience with us. <br /><br /> However, we reserve the right to reveal your details if required by law, such as if mandatory for a court proceeding, judicial purposes, or any other legal matter. We can also collaborate with third-party sources to get extra customer data to combine it with the existing one to boost our marketing efforts. We send a one-time email to the prospect that too after asking for our former email address for referral service.</p>

          <h3 className="privacy-heading mainHeadingH2 pt-4">Getting Registered on the Website</h3>
          <p className="privacy-policy-container1 ParagraphH2P">If you want to avail of our services, the website's registration form should be filled in thoroughly with name and email address. We will get back to a user even if the order has not been placed or processed. Credit card information is taken only if the user has placed an order.</p>

          <h3 className="privacy-heading mainHeadingH2 pt-4">Our Social Media Profiles</h3>
          <p className="privacy-policy-container1 ParagraphH2P">Our website has social media tabs on it; clicking on any of these will enable us to access your IP address and the category page you visit. Cookies power social media tabs. Social media interactions may be taken care of by a third party or us. Your businesses are subjected to the third party's privacy policy if hosting the social media features on our site.</p>

          <h3 className="privacy-heading mainHeadingH2 pt-4">Clauses Related to Blog and Testimonial Sections</h3>
          <p className="privacy-policy-container1 ParagraphH2P">Our blog is accessible to everyone. All the details you provide on the blog in the form of comments can be read, used, and copied by any user. Testimonials are taken from the customers after asking for their consent to publish their names and other details. Stampa Prints doesn't take any responsibility for the personally identifiable information in the testimonial section; you can remove and change your testimonial by following the proper procedure as listed on our website.</p>

          <h3 className="privacy-heading mainHeadingH2 pt-4">Use of Cookies and other Technology Tools
          </h3>
          <p className="privacy-policy-container1 ParagraphH2P">A cookie on the website is used to collect your IP address, and we use these to identify users who are new to the website, cookies also help us sort out users' files and provide you a more personalized experience. These cookies can be deleted by going into your browser settings. However, by removing cookies, you can't access the whole of our website.
            <br /><br />
            We and our affiliates use other technology tools to collect users' demographics and psychographics to manage the website better and track the varying users' trends. Our emails are HTML based with clear gifs, which enable us to know which emails are being opened by our recipients.
            <br /><br />
            It helps us analyze our various email marketing campaigns' effectiveness. If you don't want to receive these emails, unsubscribe. Third parties host targeted ads on our website; these are based on behavioral advertising. You can ask us if you don't want to receive such ads.</p>

          <h3 className="privacy-heading mainHeadingH2 pt-4">Protecting your Personal Details</h3>
          <p className="privacy-policy-container1 ParagraphH2P">Stampa Prints understands the importance of sensitive information shared with us by our customers. We, therefore, take all the necessary measures to safeguard your personal details. Industry stands security procedures are available on our website through our browser. Your credit card and financial information are supported by secure socket layer technology. Any email that is not encrypted is not safe; you cannot send any confidential information through unencrypted emails.</p>

          <h3 className="privacy-heading mainHeadingH2 pt-4">Log Files
          </h3>
          <p className="privacy-policy-container1 ParagraphH2P">We have conventional website servers that make use of log files. Data is collected from the IP address, type of browser, exit pages, time/date, number of clicks on various categories that we use to gauge users' trends; demographic and psychographic details are gathered through log files. However, this data is not linked to the personally identifiable one.</p>

          <h3 className="privacy-heading mainHeadingH2 pt-4">Your Preferences regarding Information Revelation
          </h3>
          <p className="privacy-policy-container1 ParagraphH2P">As already mentioned, the information will only be revealed to third parties under this policy's situations. We do not sell our client data to anyone.
            We utilize a shipping company's services to dispatch orders, an email service provider we have sends you emails from us, a credit card company's services are utilized for billing processes. These service providers do not save, share, or misuse your details for any other purpose.
            <br /><br />
            If Stampa Prints decides for a merger, or gets acquired by another company, or sells some of its shares, your details would be part of the shared assets. If our users' information gets subjected to be utilized in any other manner other than the mentioned one due to some transition, you would be informed and given a choice to decide beforehand. We will update the changes in the notification section immediately.</p>

          <h3 className="privacy-heading mainHeadingH2 pt-4">Choice to Unsubscribe
          </h3>
          <p className="privacy-policy-container1 ParagraphH2P">We give you the liberty to "unsubscribe" or not choosing your information to be utilized for purposes that are not directly linked to our webpage. If you don't want to receive our newsletter or sales emails, you can unsubscribe from these communications by writing us an email.</p>

          <h3 className="privacy-heading mainHeadingH2 pt-4">Links to other Websites</h3>
          <p className="privacy-policy-container1 ParagraphH2P">Stampa Prints might have links to other websites; however, we do not take responsibility for other web pages' privacy settings. Therefore, we encourage you to go through the privacy policies of these websites when you are visiting them. This Privacy Policy is exclusively for the use and collection of Information for Stampa Prints.</p>

          <h3 className="privacy-heading mainHeadingH2 pt-4">Update on Changes

          </h3>
          <p className="privacy-policy-container1 ParagraphH2P">Any changes made to our Privacy Policy would be updated on the homepage and other areas of the website that we find necessary to know what sort of details we collect, how these are being used, and under what situations we reserve the right to reveal the information. User details would be utilized according to the Privacy Policy under which we collect data.
            <br /><br />
            If the user information would be used in any other way other than the mentioned manner, we will have an explicit notice posted on our website before coming into effect. If you have removed your details or deactivated your account, you will not receive any email regarding this; neither your information will be used in any way.</p>

          <h3 className="privacy-heading mainHeadingH2 pt-4">Right to make Changes, Delete and Update Information
          </h3>
          <p className="privacy-policy-container1 ParagraphH2P">We give you the right to change your information. If you don't want to use our services, you can tweak, update your details or ask us to remove/deactivate your account. You can send us an email at the address mentioned in Contact Us. We will get back to you within a considerable timeline. User details are saved only if the account is active or we are offering you services. We will retain your information if deemed necessary for legal responsibilities, resolving issues, and complying with the agreements.
          </p>

          <h3 className="privacy-heading mainHeadingH2 pt-4">Contact Us
          </h3>
          <p className="privacy-policy-container1 ParagraphH2P">For any queries, feedback, or suggestions, please don't hesitate to reach out to us at support@stampaprints.com. We value your input. Our Privacy Policy came into effect on July 21, 2020, ensuring your data's security and your trust in our services. Feel confident in connecting with us!"</p>




        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
