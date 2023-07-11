// import React from 'react';
// import {dsnCN} from "../../hooks/helper";
// import { fetcher } from '../../lib/api';


// export const getStaticProps = async () => {
//     const res = await fetcher("http://localhost:1337/api/contacts")
//     console.log(res);
//     const data =await res.json()
//     return { contact: { data } }
//   }

// function InfoBox({contact}) {
// console.log(contact);
//     return (
//         <div className={dsnCN('box-info-contact', className)}>
//             <ul>
//                 <li>
//                     <h5 className="title-block mb-15">Contact</h5>
//                     <p className="text-p ">+1 (800) 990 8877</p>
//                     <div className="over-hidden mt-5">
//                         <a className="link-hover" data-hover-text="info@example.com"
//                            href="#">info@example.com</a>
//                     </div>

//                 </li>
//                 <li>
//                     <h5 className="title-block mb-15">Address</h5>
//                     <p className="text-p">United Kingdom <br /> 33—35 Southernhay East</p>
//                 </li>
//                 <li>
//                     <h5 className="title-block mb-15">Follow Us</h5>
//                     <div className="social-item over-hidden">
//                         <a className="link-hover" data-hover-text="Instagram." href="#"
//                            target="_blank" rel="nofollow">Instagram.</a>
//                     </div>
//                     <div className="social-item over-hidden">
//                         <a className="link-hover" data-hover-text="Facebook." href="#"
//                            target="_blank" rel="nofollow">Facebook.</a>
//                     </div>
//                 </li>
//             </ul>
//         </div>

//     );
// }

// export default InfoBox;


import React from 'react';
import { fetcher } from '../../lib/api';

export const getServerSideProps = async () => {
  try {
    const res = await fetcher('http://localhost:1337/api/contacts');
    console.log(res); // Log the response object to check its contents
    if (!res.ok) {
      throw new Error('Failed to fetch contacts');
    }
    const data = await res.json();
    return { props: { contact: data } };
  } catch (error) {
    console.log(error);
    return { props: { contact: null } };
  }
};

function InfoBox({ contact }) {
  console.log(contact);
  return <></>;
}

export default InfoBox;



